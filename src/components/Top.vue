<template>
  <el-form ref="form" v-bind:model="form" label-width="120px">
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
        aria-required="true"></el-input>
    </el-form-item>
    <el-form-item label="ハンドルネーム">
      <el-input v-model="form.handleName"></el-input>
    </el-form-item>
    <el-form-item label="ランキングで「おなまえ」はひょうじしたくない">
      <el-radio-group v-model="form.displayNameEnable">
        <el-radio label="はい"></el-radio>
        <el-radio label="とくにこだわらない"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" v-on:click="sendForm">タイピングする</el-button>
      <el-button type="infor" v-on:click="showRanking"></el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        department: '',
        departmentOptions: ['a', 'i'],
        id: '',
        name: '',
        handleName: '',
        displayNameEnable: ''
      }
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>
