export default {
  namespaced: true,
  state() {
    return {
      name: 'other'
    }
  },
  getters: {},
  mutations: {
    otherAction(state: { name: string }, payload: any) {
      state.name += payload
      console.log(state.name)
    }
  },
  actions: {}
}
