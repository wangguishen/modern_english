import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/page/login/login.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/page/login/login.vue'], resolve)
    },
    {
      path: '/registerStatus/:id',
      name: 'registerStatus',
      component: resolve => require(['@/page/login/registerStatus.vue'], resolve)
    }
  ]
})
