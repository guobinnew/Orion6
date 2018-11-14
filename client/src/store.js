import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appName: '',
    version: '',
    subVersion: '',
    company: ''
  },
  getters: {
    appTitle(state) {
      return `${state.appName} V${state.version}`
    }
  },
  mutations: {
    updateManifest(state, info) {
      state.appName = info.appName
      state.version = info.version
      state.subVersion = info.subVersion
      state.company = info.company
    }
  },
  actions: {

  }
})
