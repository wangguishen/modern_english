<template>
	<div id="header_box">
    <x-header slot="header"
      style="width:100%;position:fixed;left:0;top:0;z-index:100;background:#FFF;"
      :title="headObj.title"
      class="g-header">
      <span slot="overwrite-left" v-show="headObj.isBack" class="iconfont h-icon-back" @click="backWay()">&#xe60f;</span>
      <span slot="right" class="right_style" v-show="rightObj.isMore">
        <template v-if="rightObj.color">
          <span @click="finish()" :style="{'color': rightObj.color}">{{ rightObj.title }}</span>
          <span class="iconfont s-right-icon" :style="{'color': rightObj.color}" @click="finish()" v-html="rightObj.icon"></span>
        </template>
        <template v-else>
          <span @click="finish()">{{ rightObj.title }}</span>
          <span class="iconfont" @click="finish()" v-html="rightObj.icon"></span>
        </template>
      </span>
    </x-header>
	</div>
</template>
<script>
import { XHeader} from 'vux'
export default {
  components: {
    XHeader,
  },
  props:{
    headObj: Object,
    rightObj: Object,
  },
  data(){
    return {
    }
  },
  mounted (){
    let self = this;
  },
  methods: {
    backWay (){
      let self = this;
      if(self.headObj.isBack){
        self.$emit('backWay','点击返回')
      }
    },
    finish(){
      let self = this;
      if(self.rightObj.isMore){
        self.$emit('finish','点击完成')
      }
    }
  },
}
</script>
<style lang="less" scoped>
  #header_box{
    height: 46px;
  }
	.h-icon-back{
		color: #FF2D4B;
		font-size:1.4rem;
	}
	.right_style{
	  color: #FF2D4B;
	}
  .s-right-icon{
    font-size: .9rem;
  }
</style>