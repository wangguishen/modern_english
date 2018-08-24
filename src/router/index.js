import Vue from 'vue'
import Router from 'vue-router'

Router.prototype.go = function (link, param) {
  let store = this.app.$store;
  store.dispatch('setTransitionName','slide-left');
  this.push(link)
}
Router.prototype.back = function (link, param) {
  let store = this.app.$store;
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
      path: '/counselor', //找顾问
      component: resolve => require(['@/page/counselor/counselor.vue'], resolve)
    },
    {
      path: '/counselorInfo', //顾问详情
      component: resolve => require(['@/page/counselor/counselorInfo.vue'], resolve)
    },
    {
      path: '/courseList', //全部课程列表页
      component: resolve => require(['@/page/home/course/courseList.vue'], resolve)
    },
    {
      path: '/course', //课程
      component: resolve => require(['@/page/course/course.vue'], resolve)
    },
    {
      path: '/courseDetail', //课程详情
      component: resolve => require(['@/page/course/courseDetail.vue'], resolve)
    },
    {
      path: '/learnCard', //学迹卡
      component: resolve => require(['@/page/learn-card/learnCard.vue'], resolve)
    },
    {
      path: '/experimentalList', //学迹卡实验班列表
      component: resolve => require(['@/page/learn-card/experimentalList.vue'], resolve)
    },
    {
      path: '/makeUpLessons', //学迹卡实验班申请补课
      component: resolve => require(['@/page/learn-card/makeUpLessons.vue'], resolve)
    },
    {
      path: '/shoppingTrolley', //购物车
      component: resolve => require(['@/page/shopping-trolley/shoppingTrolley.vue'], resolve)
    },
    {
      path: '/confirmOrder', //购物车--确认订单
      component: resolve => require(['@/page/shopping-trolley/confirmOrder.vue'], resolve)
    },
    {
      path: '/paymentSuccess', //购物车--支付完成
      component: resolve => require(['@/page/shopping-trolley/paymentSuccess.vue'], resolve)
    },
    {
      path: '/myMessage', //我的信息
      component: resolve => require(['@/page/my-message/myMessage.vue'], resolve)
    },  
    {
      path: '/myIndentCenter', //我的订单中心
      component: resolve => require(['@/page/my-message/myIndentCenter.vue'], resolve)
    },
    {
      path: '/dealIndent', //我的订单支付
      component: resolve => require(['@/page/my-message/dealIndent.vue'], resolve)
    },
    {
      path: '/myDiscountCoupon/:id', //我的优惠券
      component: resolve => require(['@/page/my-message/myDiscountCoupon.vue'], resolve)
    },
  ]
})
