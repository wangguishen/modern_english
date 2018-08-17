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
    <group class="g-deal-group">
      <cell :title="dealObj.name | dealUserName" :value="dealObj.telphone"></cell>
    </group>
    <template v-for="item in dealList">
  		<my-deal-module :deal="item" v-on:backDealBtn="backDealBtn"></my-deal-module>
  	</template>
  	<x-dialog v-model="IsRefundShow" class="g-dislog-box">
      <div class="p-top-box">
        <img class="dib" src="../../../static/image/show_strip.png" alt="">
        <div class="t-title-box">
        	<div class='x-title'>退款申请</div>
        	<div class='x-out-of-pocket'>
        		实付款：<span class="normRedColor">￥{{refundObj.outOfPocketSum | jineAmount}}</span>
        	</div>
        	<div class='x-out-of-pocket'>
        		订单编号：<span>{{persentIndent.order_number}}</span><span class="normRedColor x-copy">复制</span>
        	</div>
        </div>
        <div class="p-withhold-box grayColor">
        	<div class='x-title'>扣款</div>
        	<div class='x-out-of-pocket'>
        		发票税点：6% <span>￥{{refundObj.outOfPocketSum * 0.06}}</span>
        	</div>
        	<div class='x-out-of-pocket'>
        		综合管理费：3% <span>￥{{refundObj.outOfPocketSum * 0.03}}</span>
        	</div>
        	<div class='x-out-of-pocket'>
        		已上课次数：{{refundObj.haveClassNum}}次*单价￥100 <span>￥{{refundObj.haveClassNum * 100}}</span>
        	</div>
        </div>
        <div class='p-actual-refund'>
        	实际退款：<span class="normRedColor">￥{{(refundObj.outOfPocketSum - refundObj.outOfPocketSum * 0.06 - refundObj.outOfPocketSum * 0.03 - refundObj.haveClassNum * 100) | jineAmount}}</span>
        </div>
      </div>
      <flexbox :gutter="0">
	      <flexbox-item>
	      	<div class="t-btn-box">
	      		<x-button @click.native="cancelRefund">取消</x-button>
	      	</div>
	      </flexbox-item>
	      <flexbox-item>
	      	<div class="t-btn-box">
	      		<x-button type="warn" @click.native="sendRequest">发送请求</x-button>
		      </div>
		    </flexbox-item>
	    </flexbox>
    </x-dialog>
    <x-dialog v-model="IsTwiceRefundShow" class="g-dislog-box">
      <div class="p-top-box">
        <img class="dib" src="../../../static/image/show_strip.png" alt="">
        <div class="t-cont-box">
        	您已发起退款申请，待财务确认后，款项会退至账户余额，请耐心等待！
        </div>
        <div class="t-btn-box">
        	<x-button type="warn" @click.native="refundSucceed">OK！</x-button>
        </div>
      </div>
    </x-dialog>
  </div>
</template>

<script>
import { Group, Cell, XDialog, XButton, Flexbox, FlexboxItem, TransferDomDirective as TransferDom } from 'vux'
import MyHeader from '../../components/my-header'
import {getLocalStorage} from '@/util/storageUtil'
import MyDealModule from '../../components/my-deal-module'
import backgroundImg from '../../../static/image/deal_indent.png'
export default {
	components: {
    MyHeader, MyDealModule, Group, Cell, XDialog, XButton, Flexbox, FlexboxItem
  },
  data () {
  	return {
			headObj:{
        title: '订单详情',
        isBack: true,
      },
      rightObj:{
        isMore: false,
      },
      dealObj: { //订单状态
				bgImg: backgroundImg, //背景图片
				tlLogo: '&#xe792;', //图标
				stateText: '交易成功',
				name: '刘瀚阳',
				telphone: '13111259328'
			},
			persentIndent:{},
			dealList:[],
			IsRefundShow: false,
			IsTwiceRefundShow: false,
			refundObj:{},
			refundNum:0
  	}
  },
  mounted (){
    let self = this;
    self.persentIndent = getLocalStorage('SET_PRESENT_MY_INDENT', 'json')
    self.dealList.push(self.persentIndent)
    console.log(self.persentIndent)
  },
  methods: {
    backWay () {
			let self = this;
			self.$router.back('/myIndentCenter')
		},
		backDealBtn (state) {
			let self = this;
			self.refundObj = state
			self.IsRefundShow = true
			console.log(state)
		},
		cancelRefund () { //取消退款操作
			let self = this;
			self.IsRefundShow = false
		},
		sendRequest () { //发送请求操作
			let self = this;
			self.IsRefundShow = false
			self.IsTwiceRefundShow = true;
		},
		refundSucceed () { //退款成功
			let self = this;
			self.refundNum++
			self.refundObj.orderState = '3';
			if(self.refundNum == self.persentIndent.order_content.length){
				self.dealObj.tlLogo = '&#xe607;'
				self.dealObj.stateText = '已退款'
			}
			console.log(self.persentIndent)
			self.IsTwiceRefundShow = false;
		}
  },
  filters: {
		hidePartPhone: (value) => { //格式化state字段
		  let sub = value.substr(3, 4);
		  let rep = value.replace(sub, "****")
		  return rep
		},
		dealUserName: (value) => { //用户名称转化
			let user = '购买用户：' + value;
			return user
		},
		jineAmount: (value) => { //格式化state字段
		  let money = parseInt(value).toFixed(2)
		  return money
		}
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
		left:37.5%;
		width:25%;
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
.p-top-box{
	text-align: left;
	.dib {
		width: 100%;
	}
	.t-title-box{
		padding: .5rem 1rem;
		box-sizing: border-box;
		.x-title{
			padding: .3rem 0;
			font-weight: bold;
		}
		.x-out-of-pocket{
			padding: .3rem 0 .3rem .5rem;
			font-size: 15px;
			.x-copy{
				margin-left:.5rem;
				text-decoration: underline;
			}
		}
		.x-order-code{
			display: flex;
		}
		.x-order-num{
			display: flex;
			align-items: center;
			flex-direction: column;
		}
	}
	.p-withhold-box{
		padding: .5rem 1rem;
		background: #FAFAFA;
		.x-title{
			padding: .3rem 0;
			font-size: 15px;
		}
		.x-out-of-pocket{
			padding: .3rem 0 .3rem .5rem;
			font-size: 14px;
		}
	}
	.p-actual-refund{
		text-align: center;
		height: 3rem;
		line-height: 3rem;
		font-size: 15px;
		.normRedColor{
			font-size: 18px;
			font-weight: bold;
		}
	}
	.t-cont-box{
		padding: 2rem 1rem;
    font-size: 0.9rem;
	}
	.t-btn-box{
		font-size: 15px;
	}
}
</style>
