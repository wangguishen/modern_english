<template>
  <div class="main">
    <my-header :headObj="headObj" :rightObj="rightObj"></my-header>
    <template v-for='order of orderList'>
	    <my-shopping-module v-on:delectOrder="delectOrder" :orderArr="orderArr" :order="order"></my-shopping-module>
    </template>
    <div class="s-close-account a-discount-box">
    	<div class="sm-check-box">
    		<check-icon :value.sync="checkAllShow"></check-icon>
				<span class='sm-check-all'>全选</span>
    	</div>
			<div class="sm-price-box">
				<div class="sml-total-box">合计：<span class="normRedColor">￥{{totalPrices | priceInit}}</span></div>
				<button class="sml-settle-accounts" @click="settleAccount">结算 ({{checkStateNum}})</button>
			</div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/my-header'
import MyShoppingModule from '@/components/my-shopping-module'
import { XButton, Group, Cell, CheckIcon } from 'vux'
import {getLocalStorage, setLocalStorage} from '@/util/storageUtil'
export default {
	components: {
    MyHeader, MyShoppingModule, XButton, Group, Cell, CheckIcon
  },
	data () {
		return {
			headObj:{
        title: '购物车(5)',
        isBack: false,
      },
      rightObj:{
        isMore: false,
      },
      orderList: [
				{
	        id: 1,
	        IsPitchOnShow: false,
	        img: '../../static/image/PET.png', //订单图片
	        title: '周日下午PET旗舰班', //标题名称（订单名称）
	        price: 6000, //课程价格
	        classTime: '45', //课程节次
	        resTime: 30,
	        residueTime: 30, //剩余课程
	        unitPrice: 200, //课节单价
	        address: '世纪城', //课程开课地点
	        lecturer: 'Kobe', //课程讲师
	        startTime: '2018.03.04 8:30', //课程开始时间
	        endTime: '2018.11.04 11:30', //课程结束时间
	        order_time: '2018-08-07T07:59:04.222+0000', //开课日期
	        classesState: '0', //开班状态  0-->未开班  1-->已开班
	        classesShow: '0', //编辑显示隐藏 0-->编辑  1-->完成
	      },{
	        id: 2,
	        IsPitchOnShow: false,
	        img: '../../static/image/PET.png', //订单图片
	        title: '周日下午PET旗舰班', //标题名称（订单名称）
	        price: 7500, //课程价格
	        classTime: '30', //课程节次
	        resTime:230,
	        residueTime: 20, //剩余课程
	        unitPrice: 250, //课节单价
	        address: '世纪城', //课程开课地点
	        lecturer: 'Kobe', //课程讲师
	        startTime: '2018.03.04 8:30', //课程开始时间
	        endTime: '2018.11.04 11:30', //课程结束时间
	        order_time: '2018-08-07T07:59:04.222+0000', //开课日期
	        classesState: '1', //开班状态  0-->未开班  1-->已开班
	        classesShow: '0', //编辑显示隐藏 0-->编辑  1-->完成
	      }
      ],
      checkAllShow: false,
      checkStateNum: 0,
      totalPrices: 0,
      orderArr: []
		}
	},
	mounted (){
    let self = this;
    self.headObj.title = `购物车(${self.orderList.length})`
  },
  watch: {
    checkAllShow: {
      handler: function (val, old) {
        let self = this;
        let num = 0
        if (val) {
        	self.orderList.forEach((item, index) => {
        		item.IsPitchOnShow = true
        	})
        } else {
        	if (self.changeOff == 0) {
        		self.orderList.forEach((item, index) => {
        			item.IsPitchOnShow = false
        		})
        	}
        }
      },
      deep: true
    },
    orderList: {
      handler: function (val, old) {
        let self = this;
        let numTrue = [];
        let numFalse = [];
        self.totalPrices = 0
        val.forEach((item, index)=>{
					if (item.IsPitchOnShow) {
						self.totalPrices += item.price
        		numTrue.push(index)
        	} else {
        		numFalse.push(index)
        	}
        })
        self.$nextTick(() => {
        	if (numFalse.length == 0) {
        		self.checkAllShow = true
        		self.changeOff = 0
        	} else {
        		self.changeOff = 1
						self.checkAllShow = false
        	}
        	self.checkStateNum = numTrue.length
        })
      },
      deep: true
    }
  },
  methods: {
  	settleAccount () {
  		let self = this;
  		if (self.checkStateNum == 0) {
  			self.$vux.toast.text('请先选择订单', 'middle')
  		} else {
  			setLocalStorage('SET_MY_ORDER_DETAIL', self.orderArr)
  			self.$router.go('/confirmOrder')
  		}
  		// self.$vux.toast.text(`此订单应付款为：${self.totalPrices}元`, 'middle')
  	},
  	delectOrder (order) {
			let self = this;
			let i = 0
			self.orderList.forEach((item, index) => {
				if (item.id == order.id) {
					i = index
				}
			})
			self.orderList.splice(i, 1)
			self.$vux.toast.text('删除此订单', 'middle')
  	}
  },
  filters: {
  	priceInit: (value) => { //价格后两位小数保留
      return parseInt(value).toFixed(2)
    },
  }
}
</script>

<style lang="less" scoped>
.s-close-account{
	display: flex;
	align-items: center;
	width: 100%;
	height: 3rem;
	background-color: #FFF;
	padding-left: 1rem;
	font-size: .9rem;
	box-sizing: border-box;
	position: fixed;
	bottom: 53px;
	left: 0;
	overflow: hidden;
	.sm-check-box{
		float: left;
		width: 30%;
		.sm-check-all{
			margin: 0 .25rem;
		}
	}
	.sm-price-box{
		float: right;
		display: flex;
		align-items: center;
		width: 70%;
		overflow: hidden;
		.sml-total-box{
			width: 65%;
			text-align: right;
			padding-right: .5rem;
			box-sizing: border-box;
			.normRedColor{
				font-size: 1.2rem;
			}
		}
		.sml-settle-accounts{
			width: 35%;
			border: none;
			background-color: #FF2D4B;
			color: #FFF;
			height: 3rem;
			line-height: 3rem;
			font-size: 1rem;
			font-weight: bold;
		}
	}
}
</style>
