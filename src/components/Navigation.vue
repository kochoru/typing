<template>
  <el-menu theme="dark" v-bind:default-active="activeIndex"
    class="el-menu-demo" mode="horizontal" v-on:select="handleSelect">
    <el-menu-item index="1">
      <router-link to="/">Typing</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>

</style>
