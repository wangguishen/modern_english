<template>
	<div class="g-my-tabbar">
    <tabbar @on-index-change="changeIndex">
      <template v-for="item in iconList">
        <tabbar-item :selected="item.selectedShow">
          <template v-if="item.selectedShow">
            <span slot="icon" class="iconfont" :class="{'select-icon': item.selectedShow}" v-html="item.icon2"></span>
          </template>
          <template v-else>
            <span slot="icon" class="iconfont" v-html="item.icon1"></span>
          </template>
          <span slot="label">{{item.label}}</span>
        </tabbar-item>
      </template>
    </tabbar>
	</div>
</template>
<script>
import {getLocalStorage} from '@/util/storageUtil'
import { Tabbar, TabbarItem } from 'vux'
import store from '@/store/store'
export default {
  components: {
    Tabbar, TabbarItem
  },
  props:{
    
  },
  data(){
    return {
      status: 0,
      iconList: [
        {
          icon1: '&#xe6cb;',
          icon2: '&#xe6ca;',
          label: '首页',
          selectedShow: true,
          path: '/home'
        },{
          icon1: '&#xe6ee;',
          icon2: '&#xe646;',
          label: '学迹卡',
          selectedShow: false,
          path: '/learnCard'
        },{
          icon1: '&#xe8ad;',
          icon2: '&#xe8ac;',
          label: '课程',
          selectedShow: false,
          path: '/course'
        },{
          icon1: '&#xe73d;',
          icon2: '&#xe73c;',
          label: '购物车',
          selectedShow: false,
          path: '/shoppingTrolley'
        },{
          icon1: '&#xe7d5;',
          icon2: '&#xe7d9;',
          label: '我的',
          selectedShow: false,
          path: '/myMessage'
        }
      ],
      state: 0 //默认状态跟踪
    }
  },
  mounted (){
    let self = this;
    self.status = getLocalStorage('SET_TABBAR_STATUS')
  },
  methods: {
    changeIndex (val) {
      let self = this;
      let value;
      if(self.state == 0){
        value = self.status
      } else {
        value = val
      }
      self.iconList.forEach((item, index) => {
        if (index == value) {
          item.selectedShow = true
          store.dispatch('setTabbarStatus',value);
          self.$router.go(item.path)
        }else{
          item.selectedShow = false
        }
      })
      self.state ++
    }
  },
  watch: {
    '$route':{  
      handler:function(val,oldval){
        let self = this;
        // console.log(store.state.tabbarStatus)
      },  
      deep:true//对象内部的属性监听，也叫深度监听  
    }
  }
}
</script>
<style scoped>
  .g-my-tabbar .iconfont{
    color: #999;
  }
  .g-my-tabbar .iconfont.select-icon{
    color: #FF2D4B;
  }
</style>