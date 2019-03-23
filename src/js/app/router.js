import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store.js';

Vue.use(VueRouter);

import Index from './views/Index.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      meta: {
        middleware: 'guest',
      }
    },
  ]
});

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
