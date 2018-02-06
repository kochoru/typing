<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Links</h2>
    <ul>
      <li><a href="https://github.com/kochoru/typing" target="_blank">GitHub</a></li>
    </ul>
    <h2>FrontEnd Technology</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Vue.js:MVVM Framework</a></li>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router:ルーティング</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex:状態管理</a></li>
      <li><a href="http://element.eleme.io" target="_blank">element-ui:UIツールキット</a></li>
      <li><a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator:バリデータ</a></li>
      <li><a href="https://github.com/axios/axios" target="_blank">axios:httpクライアント</a></li>
    </ul>
    <h2>BackEnd Technology</h2>
    <ul>
      <li><a href="https://projects.spring.io/spring-boot/" target="_blank">Spring boot</a></li>
      <li><a href="http://www.mybatis.org/mybatis-3/ja/" target="_blank">ORマッパー：Mybatis</a></li>
      <li><a href="https://www.postgresql.org/" target="_blank">DBMS:postgresql</a></li>
    </ul>
    <ranking></ranking>
  </div>
</template>

<script>
import Vue from 'vue'
import Ranking from '@/components/Ranking'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Thanks for playing Typing App'
    }
  }
}

Vue.component('ranking', Ranking)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
