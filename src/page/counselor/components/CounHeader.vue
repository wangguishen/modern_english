<template>
  <div id='CounHeader'>
  	<div class='header-one'>
    	<x-header title="找顾问">
        <span slot="overwrite-left" class="iconfont h-icon-back" @click="backClick()">&#xe60f;</span> 
      </x-header>
  	</div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  name: 'CounHeader',
  data (){
  	return {

  	}
  },
  components:{
  	XHeader
  },
  methods:{
    backClick () {
      let self = this;
      self.$router.push('/home')
    }
  }
}
</script>

<style lang='less' scoped>
.h-icon-back{
  color: #FF2D4B;
  font-size:1.4rem;
}
</style>
