<template>
  <div id="app">
    <view-box ref="viewBox">
    	<transition :name="transitionName">
      	<router-view></router-view>
      </transition>
      <template v-if="myTabbarShow">
        <my-tabbar slot="bottom"></my-tabbar>
      </template>
    </view-box>
  </div>
</template>

<script>
import store from '@/store/store'
import {getLocalStorage} from '@/util/storageUtil'
import MyTabbar from './components/my-tabbar'
import { ViewBox } from 'vux'
import {setLocalStorage} from '@/util/storageUtil'
export default {
  name: 'App',
  components: {
    MyTabbar, ViewBox
  },
  store: store,
  data () {
  	return {
  		transitionName: 'slide-right',
      myTabbarShow: false
  	}
  },
  mounted (){
    let self = this;
  },
  watch:{
  	'$route':{  
      handler:function(val,oldval){
      	let self = this;
        if (val.path == '/home' || val.path == '/course' || val.path == '/learnCard' || val.path == '/shoppingTrolley' || val.path == '/myMessage') {
          self.myTabbarShow = true
        } else {
          self.myTabbarShow = false
        }
      	self.transitionName = store.state.transitionName;
      },  
      deep:true//对象内部的属性监听，也叫深度监听  
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #F5F5F5;
}
/*.child-view {
  position: absolute;
  width:100%;
  transition: all .8s cubic-bezier(.55,0,.1,1);
}*/
</style>
