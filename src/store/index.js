import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chatbotJSON: {
      event: "send",
      user: "user-식별값",
      textContent: {
        text: ""
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
  }
})
