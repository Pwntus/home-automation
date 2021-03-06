import Vue from 'vue'
import * as t from '@/store/mutation-types'
import { MIC_HOSTNAME } from '@/config'
import { MIC } from '@/lib/MIC'

const state = {
  inited: false,
  user: null
}

const mutations = {
  [t.APP_SET_INITED] (state, value) {
    state.inited = value
  },
  [t.APP_SET_USER] (state, value) {
    state.user = value
  }
}

const actions = {
  init ({commit, dispatch}) {
    MIC.init(MIC_HOSTNAME)
      .then(()    => { return dispatch('lsGet') })
      .then(token => { return MIC.getCredentials(token) })
      .then(()    => { commit(t.APP_SET_INITED, true) })
      .catch(err  => {
        MIC.refreshCredentials()
          .then(account => {
            commit(t.APP_SET_USER, account.user)
            dispatch('lsSet', account)
            commit(t.APP_SET_INITED, true)
          })
          .catch(err => {
            // Silent
            commit(t.APP_SET_INITED, true)
          })
      })
  },

  /* LocalStorage set */
  lsSet ({commit}, account) {
    window.localStorage.setItem('account', JSON.stringify(account))
  },

  /* LocalStorage get */
  lsGet ({commit}) {
    let token = null
    const account = window.localStorage.getItem('account')
    if (account !== null) {
      const parsed = JSON.parse(account)
      token = parsed.credentials.token

      /* Set user data in store */
      commit(t.APP_SET_USER, parsed.user)
    }
    return Promise.resolve(token)
  },

  login ({commit, dispatch}, {username, password}) {
    return MIC.login(username, password)
      .then(account => {
        commit(t.APP_SET_USER, account.user)
        dispatch('lsSet', account)
        return Promise.resolve()
      })
  },

  logout ({commit, dispatch}) {
    commit(t.APP_SET_USER, null)
    window.localStorage.removeItem('account')
  }
}

const getters = {
  inited: (state) => {
    return state.inited
  },
  user: (state) => {
    return state.user
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
