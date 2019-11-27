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
    resetChatbotJSON(state, type) {
      switch (type) {
        case "TEXT_CONTENT":
          state.chatbotJSON = {
            event: "send",
            user: "user-식별값",
            textContent: {
              text: ""
            }
          };
          break;
        case "IMAGE_CONTENT":
          state.chatbotJSON = {
            event: "send",
            user: "user-식별값",
            imageContent: {
              imageURL: "https://"
            }
          };
          break;
        case "COMPOSITE_CONTENT":
          state.chatbotJSON = {
            event: "send",
            user: "user-식별값",
            compositeContent: {
              compositeList: []
            }
          };
          break;
        default:
          break;
      }
    },
    updateTextContent(state, text) {
      state.chatbotJSON.textContent.text = text;
    },
    updateImageContent(state, imageURL) {
      state.chatbotJSON.imageContent.imageURL = imageURL;
    },
    addComposite(state) {
      let newComposite = {
      };
      state.chatbotJSON.compositeContent.compositeList.push(newComposite);
    },
    deleteComposite(state, index) {
      state.chatbotJSON.compositeContent.compositeList.splice(index, 1);
    },
    updateComposite(state, payload) {
      state.chatbotJSON.compositeContent.compositeList.splice(payload.index, 1, payload.composite);
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
