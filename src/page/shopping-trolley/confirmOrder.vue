<template>
  <div class="main">
  	<my-header v-on:backWay="backWay" :headObj="headObj" :rightObj="rightObj"></my-header>
    <div class='g-message-box'>
      <img class="s-strip" :src="colourfulStrip" alt="">
      <div class="s-message">
        <div class="s-message-content">
          <div class="sm-cont-user">购买用户：{{user.name}}</div>
          <div class="sm-cont-tel">{{user.telPhone | telPhoneStyle}}</div>
        </div>
        <div class="s-message-jump">
          <span class="iconfont">&#xe60e;</span>
        </div>
      </div>
    </div>
    <div class="g-order-box">
      <template v-for="item of orderList">
        <div class="s-order-header">
          <img :src="item.img" alt="">
          <div class="s-cont-box">
            <div class="l-cont l-cont-title">{{item.title}}</div>
            <div class="l-cont l-cont-message">
              <span>讲师: <span class="normRedColor">{{item.lecturer}}</span></span>
              <span>课次: <span class="normRedColor">{{item.residueTime}}次</span></span>
            </div>
            <div class="l-cont l-cont-address">
              <span class="iconfont">&#xe67f;</span>
              <span>{{item.address}}</span>
            </div>
          </div>
        </div>
        <div class="s-order-footer">
          <span>{{item.classesState | classesFilter}}</span>
          <span class="normRedColor">￥{{item.price | priceInit}}</span>
        </div>
      </template>
    </div>
    <group class="g-coupon-box g-screen-group">
      <cell
        title="优惠券"
        @click.native="jumpCoupon"
        is-link>
        <div>
          <span class="normRedColor">{{couponPrice | reducePrice}}</span>
        </div>
      </cell>
    </group>
    <group class="g-invoice-box g-screen-group">
      <cell
        title="是否需要发票"
        @click.native="IsInvoice = !IsInvoice">
        <div>
          <span class="iconfont s-invoice-icon" v-show="!IsInvoice">&#xe641;</span>
          <span class="iconfont normRedColor" v-show="IsInvoice">&#xe674;</span>
        </div>
      </cell>
    </group>
    <group class="g-payment-box g-screen-group">
      <template v-for="payment of paymentList">
        <cell
          :title="payment.title"
          :inline-desc="payment.subhead">
          <span
            slot="icon"
            class="iconfont normRedColor"
            :class="{'normRedColor': payment.id == '1', 'wechatColor': payment.id == '2', 'alipayColor': payment.id == '3'}"
            v-html="payment.icon">
          </span>
          <div class="a-discount-box">
            <check-icon :value.sync="payment.paymentShow" @click.native="changePayment(payment)"></check-icon>
          </div>
        </cell>
      </template>
    </group>
    <div class="g-price-box">
      <div class="s-total-box">
        <span>实际应付</span>
        <span class="normRedColor">￥{{totalPrices - couponPrice | priceInit}}</span>
      </div>
      <button class="s-settle-accounts" @click="settleAccount">确认下单</button>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/my-header'
import strip from '@/assets/images/show_strip.png'
import {getLocalStorage, removeLocalStorage} from '@/util/storageUtil'
import { Group, Cell, CheckIcon } from 'vux'
export default {
  components: {
    MyHeader, Group, Cell, CheckIcon
  },
  data () {
  	return {
			headObj:{
        title: '确认订单',
        isBack: true,
      },
      rightObj:{
        isMore: false
      },
      colourfulStrip: strip,
      user: {
        name: 'Shinphy',
        telPhone: '18866668888'
      },
      orderList: [], //订单列表
      couponPrice: 2100, //优惠券价格
      IsInvoice: false, //是否需要发票
      paymentList: [ //支付方式
        {
          id: 1,
          icon: '&#xe626;',
          title: '余额支付', //余额支付
          subhead: '使用账户的余额进行支付',
          paymentShow: true
        },{
          id: 2,
          icon: '&#xe611;',
          title: '微信支付', //微信支付
          subhead: '使用账户的余额进行支付',
          paymentShow: false
        },{
          id: 3,
          icon: '&#xe758;',
          title: '支付宝支付', //支付宝支付
          subhead: '使用账户的余额进行支付',
          paymentShow: false
        },
      ],
      totalPrices: 0
  	}
  },
  watch: {
    orderList: {
      handler: function (val, old) {
        let self = this;
        let ind = 0;
        val.forEach((item, index) => {
          if (item.paymentShow) {
            ind = index
          } else {
            item.paymentShow = false
          }
          self.totalPrices += item.price
        })
        console.log(444)
      },
      deep: true
    }
  },
  mounted (){
    let self = this;
    self.orderList = getLocalStorage('SET_MY_ORDER_DETAIL', 'json')
    let couponObj = getLocalStorage('SET_MY_SELECT_COUPON', 'json')
    if (couponObj) {
      self.couponPrice = couponObj.money
    }
  },
  methods: {
    backWay () {
      let self = this;
      removeLocalStorage("SET_MY_SELECT_COUPON")
      self.$router.back('/shoppingTrolley')
    },
    jumpCoupon () { //跳转优惠券页面
      let self = this;
      self.$router.go({
        path:'/myDiscountCoupon/shopping'
      })
    },
    settleAccount () { //确认订单
      let self = this;
      let IsHavePayment = false;
      self.paymentList.forEach((item, index) => {
        if (item.paymentShow) IsHavePayment = true
      })
      if (!IsHavePayment) {
        self.$vux.toast.text('请选择支付方式', 'middle')
      } else{
        self.$router.go('/paymentSuccess')
      }
    },
    changePayment (payment) {
      let self = this;
      self.paymentList.forEach((item, index) => {
        if (payment.id != item.id) {
          item.paymentShow = false
        }
      })
    }
  },
  filters: {
    telPhoneStyle: (value) => {
      let val = value.substring(0, 3) + ' ' + value.substring(3, 7) + ' ' + value.substring(7, 11);
      return val
    },
    classesFilter: (value) => { // 开班状态转换
      let res = ''
      if (value == '0') {
        res = '未开班'
      } else {
        res = '已开班'
      }
      return res
    },
    priceInit: (value) => { //价格后两位小数保留
      return parseInt(value).toFixed(2)
    },
    reducePrice: (value) => { //价格变为负数
      let val = '- ￥' + value
      return val
    },
  }
}
</script>

<style lang='less' scoped>
.g-message-box{
  margin-top: .8rem;
  background: #fff;
  height: 5rem;
  border-bottom: 1px solid #EAEAEA;
  .s-strip{
    display: block;
    width: 100%;
    height: calc(1 / 20 * 5rem);
  }
  .s-message{
    display: flex;
    align-items:center;
    width: 100%;
    height: calc(19 / 20 * 5rem);
    padding: .5rem 1rem;
    box-sizing: border-box;
    .s-message-content{
      width: 90%;
      height: 100%;
      .sm-cont-user{
        font-weight: bold;
      }
      .sm-cont-user, .sm-cont-tel{
        display: flex;
        align-items: center;
        height: 50%;
      }
    }
    .s-message-jump{
      width: 10%;
      text-align: right;
      .iconfont{
        color: #999;
        font-size: 1.2rem;
      }
    }
  }
}
.g-order-box{
  margin-top: .8rem;
  background: #FFF;
  border-top: 1px solid #EAEAEA;
  border-bottom: 1px solid #EAEAEA;
  .s-order-header{
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #EAEAEA;
    img{
      display: block;
      height: 5rem;
    }
    .s-cont-box{
      width: 100%;
      height: 5rem;
      margin-left: .5rem;
      font-size: .9rem;
      .l-cont{
        display: flex;
        align-items: center;
        height: 33%;
      }
      .l-cont-title{
        height: 34%;
        font-size: 1.1rem;
        font-weight: bold;
      }
      .l-cont-message{
        span{
          width:50%;
          .normRedColor{
            font-weight: bold;
          }
        }
      }
      .l-cont-address{
        .iconfont{
          color: #FF2D4B;
          font-size: 1.1rem;
          margin-right: .5rem;
        }
      }
    }
  }
  .s-order-footer{
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 2.5rem;
    font-size: .9rem;
    span{
      width: 50%;
    }
    .normRedColor{
      text-align: right;
      font-size: 1.4rem;
    }
  }
}
.g-coupon-box, .g-invoice-box, .g-payment-box{
  margin-top: .8rem;
  .normRedColor{
    color: #FF2D4B;
  }
}
.g-coupon-box{
  .normRedColor{
    font-size: .9rem;
    margin-right: .5rem;
  }
}
.g-invoice-box{
  .iconfont{
    font-size: 1rem;
  }
  .s-invoice-icon{
    color: #999;
  }
}
.g-payment-box{
  .normRedColor{
    margin-right: .5rem;
  }
  .wechatColor{
    color: #19B73B;
  }
  .alipayColor{
    color: #149CD5;
  }
}
.g-price-box{
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #EAEAEA;
  background: #FFF;
  overflow: hidden;
  .s-total-box{
    width: 70%;
    text-align: right;
    padding-right: .5rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .normRedColor{
      font-size: 1.2rem;
    }
  }
  .s-settle-accounts{
    width: 30%;
    border: none;
    background-color: #FF2D4B;
    color: #FFF;
    height: 3rem;
    line-height: 3rem;
    font-size: 1rem;
    font-weight: bold;
  }
}
</style>
