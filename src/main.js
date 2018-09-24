import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import Home from './components/home'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home }
];

const router = new VueRouter({
  routes
})

const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

export { app, store }
