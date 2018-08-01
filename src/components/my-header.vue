<template>
	<div id="header_box">
    <x-header slot="header"
      style="width:100%;position:fixed;left:0;top:0;z-index:100;background:#FFF;"
      :title="headObj.title"
      class="g-header">
      <span slot="overwrite-left" v-show="headObj.isBack" class="iconfont h-icon-back" @click="backWay()">&#xe60f;</span>
      <span slot="right" class="right_style" v-show="rightObj.isMore">
        <span @click="finish()">{{ rightObj.title }}</span>
        <span class="iconfont" @click="finish()" v-html="rightObj.icon"></span>
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
    isBack: Boolean,
    headObj: Object,
    rightObj: Object,
  },
  data(){
    return {
      sideBarState: false,
    }
  },
  mounted (){
    let self = this;
  },
  methods: {
    sideBarShow (){//点击显示侧栏
      let self = this;
      self.$store.commit('SET_PLACEMENT_VALUE',true);
    },
    backWay (){
      let self = this;
      if(self.headObj.isBack){
          self.$emit('backWay','点击返回')
      }
    },
    finish(){
      let self = this;
      if(self.rightObj.isMore){
        self.$emit('listFinish','点击完成')
      }
    }
  },
}
</script>
<style scoped>
	.h-icon-back{
		color: #FF2D4B;
		font-size:1.4rem;
	}
	.right_style{
	  color: #FF2D4B;
	}
</style>