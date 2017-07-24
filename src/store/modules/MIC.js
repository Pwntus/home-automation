import Vue from 'vue'
import * as t from '@/store/mutation-types'
import { MIC } from '@/lib/MIC'
import { MIC_THING_TYPE_ID } from '@/config'

const state = {
  things: [],
  observed: {
    id: null,
    timestamp: [],
    bat: [],
    hum: [],
    tmp: []
  }
}

const mutations = {

  [t.MIC_SET_THING] (state, hits) {
    console.log(hits)
  }
}

const actions = {

  init ({commit, dispatch}) {
    let payload = {
      action: 'FIND',
      query: {
        size: 1,
        from: 0,
        sort: { 'label.lowercase': 'asc' },
        filter: {
          bool: {
            must: [{
              term: { thingType: MIC_THING_TYPE_ID }
            }]
    } } } }

    return MIC.invoke('ThingLambda', payload)
      .then(data => { return data.hits.hits })
      .then(hits => {
        commit(t.MIC_SET_THING, hits)
      })
      .catch(err => { return Promise.reject(err) })
  }
}

const getters = {
  
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
