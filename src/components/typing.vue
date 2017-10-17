<template>
  <div class="typing">
    <h1> {{ mondai }} </h1>
    <el-input class="input" v-model="input" v-focus="focus"
      v-on:change="checkKeyCode" ></el-input>
    <el-button type="primary" class="startButton" v-on:click="startTyping">開始する</el-button>
  </div>
</template>

<script>
export default {
  name: 'typing',
  data () {
    return {
      mondai: 'hoge',
      input: '',
      charIndex: 0,
      wordChars: [],
      score: 0,
      focus: false
    }
  },
  methods: {
    checkKeyCode: function (event) {
      console.log('triggerd checkKeyCode')
      let keyStr = String.fromCharCode(event.keyCode)
      if (this.wordChars[this.charIndex] === keyStr) {
        this.charIndex++
        this.input = this.input + keyStr
        if (this.charIndex === this.wordChars.length) {
          this.score++
          this.reloadNextWord()
          this.input = ''
        }
      }
    },
    reloadNextWord: function () {
      console.log('triggerd reloadNextWord')
      this.charIndex = 0
      // let randomIndex = Math.floor( Math.random * wordList.length )
      // mondai = wordList[randomIndex];
      // wordChars = wordList[random].toUpperCase().split('')
      this.wordChars = this.mondai.toUpperCase().split('')
      console.log(this.wordChars[0])
    },
    startTyping: function () {
      console.log('triggerd startTyping')
      this.reloadNextWord()
    }
  }
}
</script>

<style scoped>
.startButton {
  
}
</style>
