import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'


Vue.use(vueRouter);
  //routings
//   const router = new vueRouter({
//     router  
// });



new Vue({
  el: '#app',
  vueRouter,
  template: '<App/>',
  components: { App }
});