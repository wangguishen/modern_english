// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'
import './assets/transition.css'
import './page/style/style.less'
import './page/style/theme.less'
import './assets/iconfont.css'
import  { ToastPlugin } from 'vux'

Vue.use(ToastPlugin)

Vue.config.productionTip = false

Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
