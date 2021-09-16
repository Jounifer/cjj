import Vue from 'vue';
import Vuex from 'vuex';

const store = {
  namespaced: true,
  state: {
    isEn: true,
    browser: 'pc',
  },
  mutations: {
    setIsEn(state, payload) {

      state.isEn = payload;

    },
    setBrowser(state, payload) {

      state.browser = payload;

    },
  },
  actions: {
    setIsEnAsync(
      {
        commit,
      },
      payload,
    ) {

      commit('setIsEn', payload);

    },
    setBrowserAsync({
        commit,
      },
      payload,
    ) {

      commit('setBrowser', payload);

    },
  },
};

Vue.use(Vuex);

export default new Vuex.Store(store);
