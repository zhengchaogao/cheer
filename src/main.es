import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

/* eslint-disable */
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    route: 'history'
  },
  mutations: {
    changeRoute(state, curRoute) {
      state.route = curRoute;
    }
  }
});
/* eslint-enable */

new Vue({
  el: '#app',
  store,
  render(h) {
    return h(App);
  }
});
