import Vue from 'vue'
import axios from 'axios';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes.js'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
console.log((localStorage, "mains s "));
export const HTTP = axios.create({
  baseURL: `http://35.177.76.135:36115/api`,
  headers: {
    // Authorization: userInfo.userAccessToken
  }
});
