<template>
  <div class="main">
  	<my-header v-on:backWay="backWay" :headObj="headObj" :rightObj="rightObj"></my-header>
  	<template v-for="item in orderList">
  		<my-orders-module :order="item" v-on:backClickBtn="backClickBtn"></my-orders-module>
  	</template>
  </div>
</template>

<script>
import MyHeader from '../../components/my-header'
import {setLocalStorage} from '@/util/storageUtil'
import MyOrdersModule from '../../components/my-orders-module'
export default {
	components: {
    MyHeader, MyOrdersModule
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
	            price: '10000',
	            outOfPocketSum: '9000',
	            discountCoupon: '1000',
	            haveClassNum: 2,
	            orderState:'1'
	          },{
	            img: '../../static/image/PET.png',
	            title: '托福精品课',
	            price: '10000',
	            outOfPocketSum: '8000',
	            discountCoupon: '2000',
	            haveClassNum: 3,
	            orderState:'1'
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
      ]
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
			if (state.state == '0') {
				state.state = '2'
			} else if (state.state == '1') {
				setLocalStorage('SET_PRESENT_MY_INDENT', state)
				self.$router.go('/dealIndent')
			}
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
	.t-btn-box{
		font-size: 15px;
	}
}
</style>
