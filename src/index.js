// index.js

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '@/App.vue'
import HelloVue from 'Component/Hello';
import GoodbyeVue from 'Component/Goodbye';

Vue.use(VueRouter);

const Hello = HelloVue;

const routes = [
  {path: '/hello', component: Hello},
  {path: '/goodbye', component: GoodbyeVue},
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
