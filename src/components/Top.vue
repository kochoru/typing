<template>
  <div class="top">
    <h1 class="caution">!!注意事項!!</h1>
    <h2>・一度実施された方は二度目は実施できません。</h2>
  <el-form
    ref="form"
    v-bind:model="form"
    label-width="300px"
    size="medium"
    class="form"
    v-bind:rules="rules">
    <el-form-item label="Department" prop="department">
      <el-select
        v-model="form.department"
        placeholder="所属する部署を選択してください"
        clearable>
        <el-option
          v-for="item in departmentOptions"
          v-bind:key="item.value"
          v-bind:label="item.label"
          v-bind:value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="ID" prop="id">
      <el-input
        v-model="form.id"
        placeholder="XXXXXXXX"
        required></el-input>
    </el-form-item>
    <el-form-item label="おなまえ" prop="name">
      <el-input
        v-model="form.name"
        placeholder="氏名をフルネームで入力ください（半角全角はどっちでもいいです）"
        required></el-input>
    </el-form-item>
    <el-form-item label="ハンドルネーム">
      <el-input v-model="form.handleName"
        placeholder="好きなハンドルネームを入力ください(任意)"></el-input>
    </el-form-item>
    <el-form-item label="ランキングで「おなまえ」はひょうじしたくない">
      <el-radio v-model="form.displayNameEnable" label="true">はい</el-radio>
      <el-radio v-model="form.displayNameEnable" label="false">とくにこだわらない</el-radio>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" v-on:click="submitForm('form')">ゲームを開始する</el-button>
      <el-button type="info" v-on:click="showRanking">ランキングを見る</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { LOGIN } from '../store/mutation-types'
import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:8080'
})

export default {
  name: 'top',
  data () {
    return {
      departmentOptions: ['a', 'i'],
      form: {
        department: '',
        id: '',
        name: '',
        handleName: '',
        displayNameEnable: 'false'
      },
      rules: {
        department: [
          {
            required: true,
            message: '選択必須です',
            trigger: 'blur'
          }
        ],
        id: [
          {
            required: true,
            message: '入力必須です',
            trigger: 'blur'
          },
          {
            min: 8,
            max: 8,
            message: '8桁必須です',
            trigger: 'blur'
          }
        ],
        name: [
          {
            required: true,
            message: '入力必須です',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted: function () {
    this.fetchDepartment()
  },
  methods: {
    ...mapActions([
      LOGIN
    ]),
    ...mapMutations([
      // `thid.bindForm()`を'this.$store.commit('bindForm')にマッピング
      'bindTopForm'
    ]),
    submitForm: function (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.bindTopForm(this.form)
          this.LOGIN()
        } else {
          this.$alert('入力に誤りがあります', 'バリデーションエラー', {
            confirmButtonText: 'OK'
          })
        }
      })
    },
    showRanking: function () {
      this.$router.push('/ranking')
    },
    fetchDepartment: function () {
      httpClient.get('/department')
      .then((res) => {
        this.departmentOptions = res.data
      }).catch((res) => {
        //
      })
    }
  }
}
</script>

<style>
  .caution {
    color: red;
  }

  .form {
    width: 800px;
    margin: auto;
    margin-top: 100px;
  }
</style>
