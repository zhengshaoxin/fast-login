import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Demo from './components/demo'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Demo}
];

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export { app }
