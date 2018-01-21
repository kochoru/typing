<template>
  <div class="typing">
    <el-dialog
      title="ルール・注意事項"
      v-bind:visible.sync="confirmDialogVisible"
      size="small">
      <h3 class="keepLeft">・文字の削除に関し、Deleteボタンは対応してません。Backspaceで消してください。</h3>
      <h3 class="keepLeft">・れんしゅう、ほんばんで計2回プレイできます。</h3>
      <h3 class="keepLeft">・タイピングに成功した文字数がそのままスコアに加算されます。</h3>
      <h3 class="keepLeft">・その他、細かいバグがあるかもしれません。ごめんなさい。</h3>
      <span slot="footer" class="dialog-footer">
        <el-button v-bind:plain="true" type="info" v-on:click="confirmDialogVisible = false">さぁ、れんしゅうボタンを押して早速スタートだ！</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="結果発表～！！"
      v-bind:visible.sync="resultDialogVisible"
      size="small">
      <h1>あなたの得点は {{ score }} 点でした！</h1>
      <h1>おめでとうございます！！</h1>
      <h2>プレイありがとうございました。結果は後日発表します。</h2>
    </el-dialog>
    <span>ようこそ {{ id }} さん</span>
    <h1 class="score">あなたのスコアは： {{ score }}</h1>
    <h1 class="mondai">{{ mondai }} </h1>
    <input type="email"
      class="input"
      v-model="input"
      v-focus="focus"
      v-bind:disabled="inputDisabled"
      v-on:keyup="checkKeyCode" />
    <ul>
      <li>
        <el-button
          v-bind:type="buttonType"
          size="large"
          class="startButton"
          v-on:click="startTyping"
          v-bind:disabled="buttonDisabled"> {{ buttonText }} </el-button>
      </li>
    </ul>
    <footer>
      <h2>
        <countdown
          v-bind:time="remainingTime"
          v-bind:interval="50"
          v-if="counting"
          v-on:countdownprogress="updateProgress"
          ref="countdown">
          <template slot-scope="props">のこりじかん {{ props.hours }} : {{ props.minutes}} : {{props.seconds}} </template>
        </countdown>
      </h2>
      <el-progress
        v-bind:percentage="percentage"
        v-bind:show-text='false'
        v-bind:status="progressStatus"></el-progress>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCountdown from '@xkeshi/vue-countdown'
import { mapMutations, mapState, mapActions } from 'vuex'
import { REGISTER_RESULT } from '../store/mutation-types'
import router from '../router'
import { MONDAI_LIST } from '../constants/mondai'

export default {
  name: 'typing',
  data () {
    return {
      mondai: '',
      mondaiList: MONDAI_LIST,
      input: '',
      answer: '',
      charIndex: 0,
      wordChars: [],
      score: 0,
      inputDisabled: true,
      focus: false,
      percentage: 100,

      buttonDisabled: false,
      buttonType: 'info',
      buttonText: 'れんしゅう',

      progressStatus: '',
      remainingTime: 0,
      challengeCount: 0,
      counting: false,
      firstProgressFlg: true,

      TOTAL_TIME: 60000,
      confirmDialogVisible: true,
      resultDialogVisible: false
    }
  },
  mounted: function () {
    if (this.challengeCount >= 2) {
      this.setErrorMessage('あなたは既に本番をプレイ済です。')
      router.push({ path: '/error' })
    }
  },
  computed: mapState({
    // stateの状態を取得
    challengeCount: state => state.playerInfo.challengeCount,
    id: state => state.playerInfo.id
  }),
  watch: {
    percentage: function (val) {
      if (val < 30 && val !== 0) {
        this.progressStatus = 'exception'
      }
      if (val <= 0) {
        this.counting = false
        this.challengeCount++
        this.percentage = 100
        this.progressStatus = ''
        this.firstProgressFlg = true

        this.sendResults()
      }
    },
    challengeCount: function (val) {
      if (val === 1) {
        this.buttonDisabled = false
        this.buttonType = 'danger'
        this.buttonText = 'ほんばん'
        this.mondai = ''
        this.inputDisabled = true
        this.focus = false

        this.score = 0
      }
      if (val === 2) {
        this.inputDisabled = true
        this.resultDialogVisible = true
      }
    }
  },
  methods: {
    ...mapActions([
      REGISTER_RESULT
    ]),
    ...mapMutations([
      'setErrorMessage'
    ]),
    checkKeyCode: function (event) {
      let keyStr = String.fromCharCode(event.keyCode)
      let inputStrArr = this.input.split('')
      if (event.keyCode === 8) {
        // Backspaceが押下された際は何もしない
        if (this.charIndex > 0) {
          this.charIndex--
        }
        return
      }
      if (event.keyCode <= 47 || event.keyCode >= 91) {
        return
      }
      // TODO もう少しキレイにできないものか・・・
      if (this.wordChars[this.charIndex] === keyStr) {
        this.charIndex++
        if (this.charIndex === this.wordChars.length) {
          if (this.input === this.mondai) {
            this.openSuccessMessage()
            this.score = this.score + this.wordChars.length
            this.charIndex = 0
            this.reloadNextWord()
            this.input = ''
            return
          } else {
            this.openFailureMessage()
            this.input = ''
            this.charIndex = 0
          }
        }
      } else {
        this.charIndex++
        if (inputStrArr.length >= this.wordChars.length) {
          this.openFailureMessage()
          this.input = ''
          this.charIndex = 0
        }
      }
    },
    reloadNextWord: function () {
      let randomIndex = Math.floor(Math.random() * this.mondaiList.length)
      this.mondai = this.mondaiList[randomIndex]
      // 一文字ごとに配列に格納する
      this.wordChars = this.mondai.toUpperCase().split('')
    },
    startTyping: function () {
      this.buttonDisabled = true
      this.reloadNextWord()
      this.inputDisabled = false
      this.focus = true

      this.startCountDown()
    },
    openSuccessMessage: function () {
      this.$message({
        message: 'せいかい！',
        type: 'success'
      })
    },
    openFailureMessage: function () {
      this.$message({
        message: 'まちがえてます・・・もう一度最初から！',
        type: 'error'
      })
    },
    startCountDown: function () {
      this.remainingTime = 60 * 1000
      this.counting = true
    },
    updateProgress: function (data) {
      if (this.firstProgressFlg) {
        this.firstProgressFlg = false
      } else {
        this.percentage = data.seconds * 1000 / this.TOTAL_TIME * 100
      }
    },
    sendResults: function () {
      if (this.challengeCount === 1) {
        // れんしゅうモード時の得点は更新しない。
        this.score = 0
      }
      this.REGISTER_RESULT(this.score, this.challengeCount)
    }
  }
}

Vue.component('countdown', VueCountdown)

</script>

<style scoped>
  .typing {
    margin-top: 10px;
  }

  .score {
    text-align: right;
    font-size: 50px;
    color: deepskyblue;
    margin-right: 20px;
  }

  .mondai {
    font-family: helvetica, arial, "hiragino kaku gothic pro", meiryo,
      "ms pgothic", sans-serif;
    margin-top: 100px;
  }

  .keepLeft {
    text-align: left;
  }

  .startButton {
    margin: 10px;
    margin-top: 100px;
    font-family: "Nico Moji", "Nikukyu", "Avenir", Helvetica, Arial, sans-serif;
    font-size: 50px;
  }

  .input {
    display: block;
    margin: auto;
    margin-top: 50px;
    width: 600px;
    height: 40px;
    font-size: 28px;
    text-align: center;
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 5px;
    ime-mode: inactive;
  }

  footer {
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 98%;
    height: 100px;
    margin-bottom: 30px;
  }
</style>
