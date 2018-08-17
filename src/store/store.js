import Vue from 'vue'
import Vuex from 'vuex'
import {setLocalStorage, getLocalStorage} from '@/util/storageUtil'
Vue.use(Vuex)

const state ={
  transitionName: 'slide-left', //页面切换效果
  myTabbarShow: false, //导航栏是否显示
  tabbarStatus: 0, //tabbar导航栏状态
  obj1:{
    src1:'',
    p:'',
    h4:'',
    src2:'',
    span1:'',
    span2:'',
    span:'',
    text:''
  }
}

const actions = {
  setTransitionName: (cxp, value) => cxp.commit('SET_TRANSITION_NAME', value),
  setMyTabbarShow: (cxp, value) => cxp.commit('SET_MY_TABBAR_SHOW', value),
	setTabbarStatus: (cxp, value) => cxp.commit('SET_TABBAR_STATUS', value),
  changeInfo: (ctx,obj) => ctx.commit('changeInfo',obj)
}

const mutations = {
  // 页面切换样式
  SET_TRANSITION_NAME:(state, value) => state.transitionName = value,
  // 导航栏是否显示
  SET_MY_TABBAR_SHOW: function (state, value) {
    state.myTabbarShow = value
    setLocalStorage('SET_MY_TABBAR_SHOW', value)
  },
  // tabbar 下导航栏状态
  SET_TABBAR_STATUS: function (state, value) {
    state.tabbarStatus = value
    setLocalStorage('SET_TABBAR_STATUS', value)
  },
  changeInfo: function (state, obj) {
    state.obj1 = obj;
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})