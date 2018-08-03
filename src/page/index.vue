<template>
  <div style="height:100%;">
  	<view-box ref="viewBox">
  		<transition :name="transitionName">
	    	<router-view></router-view>
	    </transition>
	    <my-tabbar slot="bottom"></my-tabbar>
	  </view-box>
  </div>
</template>

<script>
import MyTabbar from '../components/my-tabbar'
import store from '@/store/store'
import { ViewBox } from 'vux'
export default {
	components: {
    MyTabbar, ViewBox
  },
  data () {
  	return {
			transitionName: 'slide-right',
  	}
  },
  watch:{
  	'$route':{  
      handler:function(val,oldval){
      	let self = this;
      	self.transitionName = store.state.transitionName;
      },  
      deep:true//对象内部的属性监听，也叫深度监听  
    }
  }
}
</script>

<style scoped>
</style>
