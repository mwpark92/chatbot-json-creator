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
    resetChatbotJSON(state) {
      state.chatbotJSON = {
        event: "send",
        user: "user-식별값",
        textContent: {
          text: ""
        }
      };
    },
    updateTextContent(state, text) {
      state.chatbotJSON.textContent.text = text;
    }
  },
  actions: {
    resetChatbotJSON({ commit }) {
      commit('resetChatbotJSON');
    }
  },
  modules: {
  },
  getters: {
  }
})
