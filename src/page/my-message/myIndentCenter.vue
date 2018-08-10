<template>
  <div class="main">
  	<my-header v-on:backWay="backWay" :headObj="headObj" :rightObj="rightObj"></my-header>
  	<template v-for="item in orderList">
  		<my-orders-module :order="item" v-on:backClickBtn="backClickBtn"></my-orders-module>
  	</template>
  	<div>
      <x-dialog v-model="IsRefundShow" class="g-dislog-box">
        <div class="p-top-box">
          <img class="dib" src="../../../static/image/show_strip.png" alt="">
          <div class="t-title-box">
          	<div class='x-title'>退款申请</div>
          	<div class='x-out-of-pocket'>
          		实付款：<span class="normRedColor">￥{{refundObj.outOfPocketSum}}</span>
          	</div>
          	<div class='x-out-of-pocket'>
          		订单编号：<span>{{refundObj.order_number}}</span><span class="normRedColor x-copy">复制</span>
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
          		已上课次数：{{refundObj.haveClassNum}}*单价￥100 <span>￥{{refundObj.haveClassNum * 100}}</span>
          	</div>
	        </div>
        </div>
	        
       <!--  <div @click="showToast=false">
          <span class="vux-close"></span>
        </div> -->
      </x-dialog>
    </div>
  </div>
</template>

<script>
import MyHeader from '../../components/my-header'
import MyOrdersModule from '../../components/my-orders-module'
import { XDialog, XButton, TransferDomDirective as TransferDom } from 'vux'
export default {
	components: {
    MyHeader, MyOrdersModule, XDialog, XButton
  },
	data () {
		return {
			headObj:{
        title: '订单中心',
        isBack: true,
      },
      rightObj:{
        isMore: false,
      },
      orderList: [
      	{
	        order_number: '201808101111', //订单号
	        state: '0', //交易状态  0-->交易成功，1-->待付款，2-->已取消，3-->已退款，
	        outOfPocketSum: '18000',
					discountCoupon: '2000',

	        order_content: [
	          {
	            img: '../../static/image/PET.png',
	            title: '托福精品课1',
	            price: '10000',
	            haveClassNum: 4
	          },{
	            img: '../../static/image/PET.png',
	            title: '托福精品课2',
	            price: '10000',
	            haveClassNum: 2
	          }
	        ],
	        order_time: '2018-08-07T07:59:04.222+0000'
	      },{
	        order_number: '201808101111', //订单号
	        state: '1', //交易状态  0-->交易成功，1-->待付款，2-->已取消，3-->已退款，
	        order_content: [
	          {
	            img: '../../static/image/PET.png',
	            title: '托福精品课',
	            price: '10000'
	          },{
	            img: '../../static/image/PET.png',
	            title: '托福精品课',
	            price: '10000'
	          }
	        ],
	        order_time: '2018-08-07T07:59:04.222+0000'
	      },{
	        order_number: '201808101111', //订单号
	        state: '2', //交易状态  0-->交易成功，1-->待付款，2-->已取消，3-->已退款，
	        order_content: [
	          {
	            img: '../../static/image/PET.png',
	            title: '托福精品课',
	            price: '10000'
	          }
	        ],
	        order_time: '2018-08-07T07:59:04.222+0000'
	      },{
	        order_number: '201808101111', //订单号
	        state: '3', //交易状态  0-->交易成功，1-->待付款，2-->已取消，3-->已退款，
	        order_content: [
	          {
	            img: '../../static/image/PET.png',
	            title: '托福精品课',
	            price: '10000'
	          }
	        ],
	        order_time: '2018-08-07T07:59:04.222+0000'
	      },
      ],
      IsRefundShow: true,
      refundObj: {
        order_number: '201808101111', //订单号
        state: '0', //交易状态  0-->交易成功，1-->待付款，2-->已取消，3-->已退款，
        outOfPocketSum: '18000',
				discountCoupon: '2000',
				haveClassNum: 6,
        order_content: [
          {
            img: '../../static/image/PET.png',
            title: '托福精品课1',
            price: '10000',
            haveClassNum: 4
          },{
            img: '../../static/image/PET.png',
            title: '托福精品课2',
            price: '10000',
            haveClassNum: 2
          }
        ]
      }
		}
	},
	mounted (){
    let self = this;
  },
	methods: {
		backWay () {
			let self = this;
			self.$router.back('/myMessage')
			console.log("返回我的信息中心")
		},
		backClickBtn (state) {
			let self = this;
			self.refundObj = state
			self.IsRefundShow = true;
			console.log(state)
		}
	}
}
</script>

<style lang='less' scoped>
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
}
</style>
