import Vue from 'vue'
import Router from 'vue-router'
import {verify} from '@/util/verify'

Router.prototype.go = function (link, param) {
  let store = this.app.$store;
  verify(link)
  store.dispatch('setTransitionName','slide-left');
  this.push(link)
}
Router.prototype.back = function (link, param) {
  let store = this.app.$store;
  verify(link.path)
  store.dispatch('setTransitionName','slide-right');
  this.push(link)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/page/login/login.vue'], resolve)
    },
    {
      path: '/login',
      component: resolve => require(['@/page/login/login.vue'], resolve)
    },
    {
      path: '/registerStatus/:id',
      component: resolve => require(['@/page/login/registerStatus.vue'], resolve)
    },
    {
      path: '/home', //首页
      component: resolve => require(['@/page/home/home.vue'], resolve)
    },
    {
      path: '/course', //课程
      component: resolve => require(['@/page/course/course.vue'], resolve)
    },
    {
      path: '/learnCard', //学迹卡
      component: resolve => require(['@/page/learn-card/learnCard.vue'], resolve)
    },
    {
      path: '/shoppingTrolley', //购物车
      component: resolve => require(['@/page/shopping-trolley/shoppingTrolley.vue'], resolve)
    },
    {
      path: '/myMessage', //我的信息
      component: resolve => require(['@/page/my-message/myMessage.vue'], resolve)
    },  
  ]
})
