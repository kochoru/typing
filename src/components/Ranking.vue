<template>
  <div class="ranking">
    <h1>ランキング</h1>
  <el-table
    v-bind:data="tableData"
    stripe
    class="rankingTable">
    <el-table-column
      prop="rank"
      label="ランク"
      width="70px">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        rank: 1,
        name: 'ボボボーボ・ボーボボ',
        handleName: 'ボボボーボ・ボーボボ',
        department: 'ボボボーボ・ボーボボ',
        score: 10000
      }, {
        rank: 2,
        name: 'ボボボーボ・ボーボボ',
        handleName: 'ボボボーボ・ボーボボ',
        department: 'ボボボーボ・ボーボボ',
        score: 1000
      }, {
        rank: 3,
        name: 'ボボボーボ・ボーボボ',
        handleName: 'ボボボーボ・ボーボボ',
        department: 'ボボボーボ・ボーボボ',
        score: 100
      }]
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
