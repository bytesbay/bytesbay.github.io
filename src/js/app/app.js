import Vue from 'vue';
import VueModal from 'vue-js-modal';
import App from './App.vue';

Vue.use(VueModal);

import './preferences.js';

import store from './store.js';
import router from './router.js';

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  methods: {

  },
});
