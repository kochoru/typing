<template>
  <el-form ref="form" v-bind:model="form" label-width="300px" size="medium" class="form">
    <el-form-item label="Department">
      <el-select
        size="large"
        v-model="form.department"
        placeholder=""
        clearable="clearable"
        aria-required="true">
        <el-option
          v-for="item in form.departmentOptions"
          v-bind:key="item.value"
          v-bind:label="item.label"
          v-bind:value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="ID">
      <el-input
        v-model="form.id"
        placeholder="XXXXXXXX"
        aria-required="true"></el-input>
    </el-form-item>
    <el-form-item label="おなまえ">
      <el-input
        v-model="form.name"
        placeholder="氏名をフルネームで入力ください（半角全角はどっちでもいいです）"
        aria-required="true"></el-input>
    </el-form-item>
    <el-form-item label="ハンドルネーム">
      <el-input v-model="form.handleName"
        placeholder="好きなハンドルネームを入力ください"></el-input>
    </el-form-item>
    <el-form-item label="ランキングで「おなまえ」はひょうじしたくない">
      <el-radio-group v-model="form.displayNameEnable">
        <el-radio label="はい"></el-radio>
        <el-radio label="とくにこだわらない"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" v-on:click="sendForm">ゲームを開始する</el-button>
      <el-button type="info" v-on:click="showRanking">ランキングを見る</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { LOGIN } from '../store/mutation-types'

export default {
  data () {
    return {
      departmentOptions: ['a', 'i'],
      form: {
        department: '',
        id: '',
        name: '',
        handleName: '',
        displayNameEnable: ''
      }
    }
  },
  methods: {
    ...mapActions([
      LOGIN
    ]),
    ...mapMutations([
      // `thid.bindForm()`を'this.$store.commit('bindForm')にマッピング
      'bindTopForm'
    ]),
    sendForm: function () {
      this.bindTopForm(this.form)
      this.LOGIN()
    },
    showRanking: function () {
      this.$router.push('Ranking')
    }
  }
}
</script>

<style>
.form {
  width: 800px;
  margin: auto;
  margin-top: 100px;
}
</style>
