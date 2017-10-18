<template>
  <div class="typing">
    <h1 class="score">あなたのスコアは： {{ score }}</h1>
    <h1 class="mondai"> {{ mondai }} </h1>
    <input type="email" class="input" v-model="input" v-focus="focus"
      v-on:keyup="checkKeyCode">
    <el-button type="primary" size="large" class="startButton"
      v-on:click="startTyping" :disabled="buttonDisabled">はじめる</el-button>
    <footer>
      <el-progress :percentage="percentage" :show-text='false' :status="progressStatus"></el-progress>
    </footer>
  </div>
</template>

<script>
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
      elapsedTimeMS: 0,
      timer: 0,
      buttonDisabled: false,
      progressStatus: '',

      TOTAL_TIME: 60000
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
    startTyping: function () {
      this.reloadNextWord()
      this.focus = true
      this.buttonDisabled = true

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
      this.elapsedTimeMS = 0
      this.percentage = 100
      this.updateProgress()
    },
    updateProgress: function () {
      this.elapsedTimeMS = this.elapsedTimeMS + 50
      this.percentage = this.percentage - ((this.elapsedTimeMS / this.TOTAL_TIME * 100) / 1000)
      this.timer = setTimeout(this.updateProgress, 50)
      if (this.percentage <= 30) {
        this.progressStatus = 'exception'
      }
      if (this.percentage <= 0) {
        this.percentage = 0
        clearTimeout(this.timer)
      }
    }
  }
}
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
  height: 40px;
  margin-bottom: 30px;
}
</style>
