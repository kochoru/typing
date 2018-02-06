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

const state = {
  playerInfo: {
    department: '',
    id: '',
    name: '',
    handleName: '',
    displayNameEnable: 'false',
    score: 0,
    challengeCount: 0,
    adminFlg: false
  },
  errorMessage: '!!'
}
const actions = {
  // 定数を関数名として使用できる ES2015 の算出プロパティ名機能
  // commit は context.commit の分割代入
  [LOGIN] ({ commit, state }) {
    try {
      axios.post(
        'http://localhost:8080/player',
        qs.stringify(state.playerInfo)
      ).then((res) => {
        commit(LOGIN, res.data)
        if (state.playerInfo.challengeCount >= 2) {
          router.push({ path: '/error' })
        } else {
          router.push({ path: '/typing' })
        }
      }).catch((res) => {
        console.log(res)
        router.push({ path: '/' })
      })
    } catch (error) {
      // Debug用try catch
      console.log(error)
    }
  },
  [REGISTER_RESULT] ({ commit, state }, data) {
    commit(REGISTER_RESULT, data)
    axios.put(
      'http://localhost:8080/player/' + state.playerInfo.id + '/result',
      qs.stringify({
        score: data.score,
        challengeCount: data.challengeCount
      })
    ).then((res) => {
      //
    }).catch((res) => {
      console.log(res)
    })
  }
}
const getters = {}
const mutations = {
  [LOGIN] (state, data) {
    state.playerInfo.challengeCount = data.challengeCount
    state.playerInfo.adminFlg = data.adminFlg
    if (data.challengeCount >= 2) {
      state.errorMessage = 'チャレンジは一度のみです'
    }
  },
  [REGISTER_RESULT] (state, data) {
    state.playerInfo.score = data.score
    state.playerInfo.challengeCount = data.challengeCount
  },
  bindTopForm (state, formData) {
    state.playerInfo.department = formData.department
    state.playerInfo.id = formData.id
    state.playerInfo.name = formData.name
    state.playerInfo.handleName = formData.handleName
    state.playerInfo.displayNameEnable = formData.displayNameEnable
  },
  setErrorMessage (state, message) {
    state.errorMessage = message
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
