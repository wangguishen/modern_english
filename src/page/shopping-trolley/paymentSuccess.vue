<template>
  <div class="main">
  	<my-header v-on:backWay="backWay" :headObj="headObj" :rightObj="rightObj"></my-header>
  	<div class="g-header">
    	<img class="h-bg-img" :src="dealObj.bgImg" alt="">
			<div class="h-title-box">
				<span class="iconfont i-title-deal" v-html="dealObj.tlLogo"></span>
				<span>{{dealObj.stateText}}</span>
			</div>
    </div>
    <div class="g-content-box">
    	<div class="s-payment-box">
    		<span>付款：</span>
    		<span>￥6666.00</span>
    	</div>
    </div>
  </div>
</template>

<script>
import { Group, Cell, XDialog, XButton, Flexbox, FlexboxItem, TransferDomDirective as TransferDom } from 'vux'
import MyHeader from '../../components/my-header'
import {getLocalStorage} from '@/util/storageUtil'
import backgroundImg from '../../../static/image/bg_img.png'
export default {
	components: {
    MyHeader, Group, Cell, XDialog, XButton, Flexbox, FlexboxItem
  },
  data () {
  	return {
			headObj:{
        title: '支付成功',
        isBack: true,
      },
      rightObj:{
        isMore: false,
      },
      dealObj: { //订单状态
				bgImg: backgroundImg, //背景图片
				tlLogo: '&#xe792;', //图标
				stateText: '订单支付成功',
			},
  	}
  },
  mounted (){
    let self = this;
  },
  methods: {
    backWay () {
			let self = this;
			self.$router.back('/confirmOrder')
		},
  },
  filters: {
		
	}
}
</script>

<style lang='less' scoped>
.g-header {
	position: relative;
	.h-bg-img {
		display: block;
		width: 100%;
	}
	.h-title-box{
		position: absolute;
		top:25%;
		left:25%;
		width:50%;
		text-align: center;
		.h-bg-img {
			border-radius: 50%;
			margin-bottom: .5rem;
		}
		.i-title-deal{
			font-size: 4rem;
		}
		span {
			display: block;
			color: #fff;
			font-size: 1.3rem;
		}
	}
}
.g-content-box{

}
</style>
