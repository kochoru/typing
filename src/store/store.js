import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
import router from '../router'

import {
  LOGIN,
  REGISTER_RESULT
} from './mutation-types'

Vue.use(Vuex)

const httpClient = axios.create({
  baseURL: 'http://localhost:8080'
})

const state = {
  playerInfo: {
    department: '',
    id: '',
    name: '',
    handleName: '',
    displayNameEnable: false,
    score: 0,
    challengeCount: 0,
    adminFlg: 0
  }
}
const actions = {
  // 定数を関数名として使用できる ES2015 の算出プロパティ名機能
  // commit は context.commit の分割代入
  [LOGIN] ({ commit }, state) {
    httpClient.post({
      url: '/user',
      data: qs.stringify(state)
    }).then((res) => {
      commit(LOGIN, res.data)
      router.push({ path: 'Typing' })
    }).catch((res) => {
      router.push({ path: 'Top' })
    })
  },
  [REGISTER_RESULT] ({ commit }, state) {
    httpClient.post({
      url: '/playInfo/result',
      data: qs.stringify(state)
    }).then((res) => {
      commit(REGISTER_RESULT, res.data)
    }).catch((res) => {
      // 一旦nop
    })
  }
}
const getters = {}
const mutations = {
  [LOGIN] (state, data) {
    state.playerInfo.challengeCount = data.challengeCount
    state.playerInfo.adminFlg = data.adminFlg
  },
  [REGISTER_RESULT] (state, data) {

  },
  bindTopForm (state, formData) {
    state.playerInfo.department = formData.department
    state.playerInfo.id = formData.id
    state.playerInfo.name = formData.name
    state.playerInfo.handleName = formData.handleName
    state.playerInfo.displayNameEnable = formData.displayNameEnable
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
