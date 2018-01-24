<template>
  <div class="ranking">
    <h1>ランキング</h1>
    <el-table
      v-bind:data="tableData"
      stripe
      class="rankingTable">
      <el-table-column
        label="ランク"
        type="index"
        width="100px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="しめい"
        width="180px">
      </el-table-column>
      <el-table-column
        prop="handleName"
        label="ハンドルネーム"
        width="180px">
      </el-table-column>
      <el-table-column
        prop="department"
        label="ぶしょ"
        width="150px">
      </el-table-column>
      <el-table-column
        prop="score"
        label="スコア"
        width="200px">
      </el-table-column>
    </el-table>
    <h2>and more...</h2>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import router from '../router'

const httpClient = axios.create({
  baseURL: 'http://localhost:8080'
})

export default {
  name: 'ranking',
  data () {
    return {
      tableData: [],
      temporaryTableData: []
    }
  },
  mounted: function () {
    this.fetchRanking()
  },
  methods: {
    fetchRanking: function () {
      httpClient.get('/player/ranking')
      .then((res) => {
        this.temporaryTableData = res.data
        console.log(this.temporaryTableData)
        for (let i = 0, l = this.temporaryTableData.length; i < l; i++) {
          if (this.temporaryTableData[i].displayNameEnable === true) {
            this.temporaryTableData[i].name = 'Hidden'
          }
          this.temporaryTableData[i].handleName = this.temporaryTableData[i].handleName || '名無しさん'
          Vue.set(this.tableData, i, this.temporaryTableData[i])
          if (i === 149) break
        }
      }).catch((res) => {
        router.push({ path: 'top' })
      })
    }
  }
}
</script>

<style>
  .rankingTable {
    width: min-content;
    margin: auto;
  }
</style>
