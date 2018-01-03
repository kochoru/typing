<template>
  <el-menu theme="dark" :default-active="activeIndex"
    class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">
      <router-link to="/">Typing</router-link>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">ランキング</template>
      <el-menu-item index="2-1">Personal</el-menu-item>
      <el-menu-item index="2-2">All</el-menu-item>
    </el-submenu>
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
