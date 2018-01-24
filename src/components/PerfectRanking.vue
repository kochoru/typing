<template>
  <div class="perfectRanking">
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
        prop="id"
        label="ID"
        width="180px">
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
        prop="ipAddress"
        label="IPアドレス"
        width="200px">
      </el-table-column>
      <el-table-column
        prop="score"
        label="スコア"
        width="200px">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

const httpClient = axios.create({
  baseURL: 'http://localhost:8080'
})

export default {
  name: 'perfectRanking',
  data () {
    return {
      tableData: [],
    }
  },
  mounted: function () {
    this.fetchRanking()
  },
  methods: {
    fetchRanking: function () {
      httpClient.get('/player/perfectRanking')
      .then((res) => {
        this.tableData = res.data
      }).catch((res) => {
        router.push({ path: 'Top' })
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
