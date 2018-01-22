<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Navigation from '@/components/Navigation'

export default {
  name: 'app'
}

Vue.component('navigation', Navigation)
</script>

<style >
  #app {
    font-family: "Nico Moji", "Nikukyu", "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>
