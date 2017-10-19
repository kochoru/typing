<template>
  <div class="typing">
    <h1 class="score">あなたのスコアは： {{ score }}</h1>
    <h1 class="mondai"> {{ mondai }} </h1>
    <input type="email" class="input" v-model="input" v-focus="focus"
      v-on:keyup="checkKeyCode" />
    <ul>
      <li>
        <el-button type="info" size="large" class="startButton"
          v-on:click="startPractice" v-bind:disabled="practiceButtonDisabled">れんしゅう</el-button>
      </li>
      <li>
        <el-button type="danger" size="large" class="startButton"
          v-on:click="startProduction" v-bind:disabled="productionButtonDisabled">ほんばん</el-button>
      </li>
    </ul>
    <footer>
      <h2>
        <countdown v-bind:time="remainingTime" v-bind:interval="50" v-bind:autoStart="false" ref="countdown" v-on:countdownprogress="updateProgress">
          <template slot-scope="props">のこりじかん {{ props.hours }} : {{ props.minutes}} : {{props.seconds}} </template>
        </countdown>
      </h2>
      <el-progress v-bind:percentage="percentage" v-bind:show-text='false' v-bind:status="progressStatus"></el-progress>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCountdown from '@xkeshi/vue-countdown'

export default {
  name: 'typing',
  data () {
    return {
      mondai: '',
      mondaiList: ['hoge', 'bar', 'baz', 'kuchiki'],
      input: '',
      charIndex: 0,
      wordChars: [],
      score: 0,
      focus: false,
      percentage: 100,
      practiceButtonDisabled: false,
      productionButtonDisabled: false,
      progressStatus: '',
      remainingTime: 0,
      charangedCount: 0,

      TOTAL_TIME: 60000
    }
  },
  watch: {
    percentage: function (val) {
      if (val < 30 && val !== 0) {
        this.progressStatus = 'exception'
      }
      if (val < 0) {
        this.$refs.countdown.stop()
        this.charangedCount++
      }
    },
    charangedCount: function (val) {
      if (val === 1) {
        this.productionButtonDisabled = false
      }
      if (val === 2) {
        // 点数を表示、表彰状モーダルとか面白そう
      }
    }
  },
  methods: {
    checkKeyCode: function (event) {
      let keyStr = String.fromCharCode(event.keyCode)
      let inputStrs = this.input.split('')
      if (this.wordChars[this.charIndex] === keyStr) {
        this.charIndex++
        if (this.charIndex === this.wordChars.length) {
          this.openSuccessMessage()
          this.score = this.score + this.wordChars.length
          this.reloadNextWord()
          this.input = ''
        }
      } else {
        if (inputStrs.length >= this.wordChars.length) {
          this.openFailureMessage()
          this.input = ''
        }
      }
    },
    reloadNextWord: function () {
      this.charIndex = 0
      console.log(this.mondaiList.length)
      let randomIndex = Math.floor(Math.random() * this.mondaiList.length)
      this.mondai = this.mondaiList[randomIndex]
      console.log(randomIndex)
      console.log(this.mondai)
      this.wordChars = this.mondai.toUpperCase().split('')
    },
    startPractice: function () {
      this.practiceButtonDisabled = true
      this.productionButtonDisabled = true
      this.startTyping()
    },
    startProduction: function () {
      this.productionButtonDisabled = true
      this.startTyping()
    },
    startTyping: function () {
      this.reloadNextWord()
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
      this.percentage = 100
      setTimeout(() => {
        this.$refs.countdown.start()
      }, 50)
    },
    updateProgress: function (data) {
      this.percentage = data.seconds * 1000 / this.TOTAL_TIME * 100
      console.log(this.percentage)
    }
  }
}

Vue.component('countdown', VueCountdown)
</script>

<style scoped>
.typing {
  margin-top: 10px
}

.score {
  text-align: right;
  font-size: 50px;
  color: deepskyblue;
  margin-right: 20px;
}

.mondai {
  margin-top: 100px;
}

.startButton {
  margin: 10px;
  margin-top: 100px;
  font-family: 'Nico Moji', 'Nikukyu', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 30px;
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
