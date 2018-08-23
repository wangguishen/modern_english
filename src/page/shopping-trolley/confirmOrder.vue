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
          <div>
            <check-icon :value.sync="payment.paymentShow"></check-icon>
          </div>
        </cell>
      </template>
    </group>
  </div>
</template>

<script>
import MyHeader from '@/components/my-header'
import strip from '@/assets/images/show_strip.png'
import {getLocalStorage} from '@/util/storageUtil'
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
      couponPrice: '2100', //优惠券价格
      IsInvoice: false, //是否需要发票
      paymentList: [ //支付方式
        {
          id: 1,
          icon: '&#xe626;',
          title: '余额支付', //余额支付
          subhead: '使用账户的余额进行支付',
          paymentShow: false
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
      ]
  	}
  },
  mounted (){
    let self = this;
    self.orderList = getLocalStorage('SET_MY_ORDER_DETAIL', 'json')
    console.log(self.orderList)
  },
  methods: {
    backWay () {
      let self = this;
      self.$router.back('/shoppingTrolley')
    }
  },
  filters: {
    telPhoneStyle: (value) => {
      let val = value.substring(0, 3) + ' ' + value.substring(3, 7) + ' ' + value.substring(7, 11);
      console.log(val)
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
    color: green;
  }
  .alipayColor{
    color: blue;
  }
}
</style>
