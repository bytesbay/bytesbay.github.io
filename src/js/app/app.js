import Vue from 'vue';
import App from './App.vue';

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
