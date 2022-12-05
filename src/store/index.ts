import { createStore } from 'vuex'
import other from './other'

export default createStore({
  state: {
    name: 'global'
  },
  mutations: {},
  actions: {},
  modules: {
    other
  }
})
