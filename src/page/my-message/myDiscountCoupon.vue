<template>
  <div class="main">
  	<my-header v-on:backWay="backWay" :headObj="headObj" :rightObj="rightObj" v-on:finish="finish"></my-header>
    <div class="content-area">
      <button-tab>
        <button-tab-item selected @on-item-click="unused">未使用</button-tab-item>
        <button-tab-item @on-item-click="haveBeenUsed">已使用</button-tab-item>
        <button-tab-item @on-item-click="haveExpired">已过期</button-tab-item>
      </button-tab>
      <div v-show="unusedShow">
        <template v-for="item of unusedList">
          <my-discount-coupon-module :discountCoupon="item" :styleSetting="styleSetting" v-on:selectCoupon="selectCoupon"></my-discount-coupon-module>
        </template>
      </div>
      <div v-show="haveBeenUsedShow">
        <template v-for="item of haveBeenUsedList">
          <my-discount-coupon-module :discountCoupon="item" :styleSetting="styleSetting"></my-discount-coupon-module>
        </template>
      </div>
      <div v-show="haveExpiredShow">
        <template v-for="item of haveExpiredList">
          <my-discount-coupon-module :discountCoupon="item" :styleSetting="styleSetting"></my-discount-coupon-module>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/my-header'
import MyDiscountCouponModule from '@/components/my-discount-coupon-module'
import {getLocalStorage, setLocalStorage} from '@/util/storageUtil'
import { ButtonTab, ButtonTabItem, Toast } from 'vux'
export default {
  components: {
    MyHeader, MyDiscountCouponModule, ButtonTab, ButtonTabItem, Toast
  },
  data () {
  	return {
      argument: '',
			headObj:{
        title: '优惠券',
        isBack: true,
      },
      rightObj:{
        isMore: true,
        title: '使用说明'
      },
      styleSetting:{
        IsHaveCheckShow: true,
        iconSty: '&#xe60c;'
      },
      unusedList: [
        {
          money: 500,
          content: '充10000送1000活动',
          periodOfValidity: '2018-10-01',
          IsPitchOnShow: false
        },{
          money: 100,
          content: '充1000送100活动',
          periodOfValidity: '2018-08-17',
          IsPitchOnShow: false
        },{
          money: 300,
          content: '充3000送300活动',
          periodOfValidity: '2018-10-01',
          IsPitchOnShow: false
        },{
          money: 1000,
          content: '充10000送1000活动',
          periodOfValidity: '2018-10-01',
          IsPitchOnShow: false
        },{
          money: 600,
          content: '充6000送600活动',
          periodOfValidity: '2018-10-01',
          IsPitchOnShow: false
        }
      ],
      haveBeenUsedList: [
        {
          money: 500,
          content: '充10000送1000活动',
          periodOfValidity: '2018-10-01',
        },{
          money: 100,
          content: '充1000送100活动',
          periodOfValidity: '2018-08-17',
        },{
          money: 300,
          content: '充3000送300活动',
          periodOfValidity: '2018-10-01',
        },{
          money: 1000,
          content: '充10000送1000活动',
          periodOfValidity: '2018-10-01',
        },{
          money: 600,
          content: '充6000送600活动',
          periodOfValidity: '2018-10-01',
        },{
          money: 600,
          content: '充6000送600活动',
          periodOfValidity: '2018-10-01',
        }
      ],
      haveExpiredList: [
        {
          money: 500,
          content: '充10000送1000活动',
          periodOfValidity: '2018-10-01',
        },{
          money: 100,
          content: '充1000送100活动',
          periodOfValidity: '2018-08-17',
        },{
          money: 300,
          content: '充3000送300活动',
          periodOfValidity: '2018-10-01',
        },{
          money: 1000,
          content: '充10000送1000活动',
          periodOfValidity: '2018-10-01',
        }
      ],
      unusedShow: true,
      haveBeenUsedShow: false,
      haveExpiredShow: false,
  	}
  },
  mounted (){
    let self = this;
    self.argument = self.$route.params.id;
  },
  methods: {
    backWay () {
      let self = this;
      if (self.argument == 'message') {
        self.$router.back('/myMessage')
      } else if (self.argument == 'shopping') {
        self.$router.back('/confirmOrder')
      }
    },
    finish () { //点击说明文档按钮
      let self = this;
      self.$vux.toast.text('说明文档暂未开发', 'middle')
    },
    unused () { //未使用
      let self = this;
      self.haveBeenUsedShow = false;
      self.haveExpiredShow = false;
      self.unusedShow = true;
      self.styleSetting.IsHaveCheckShow = true;
    },
    haveBeenUsed () { //已使用
      let self = this;
      self.unusedShow = false;
      self.haveExpiredShow = false;
      self.haveBeenUsedShow = true;
      self.styleSetting.IsHaveCheckShow = false;
      self.styleSetting.iconSty = '&#xe60c;'
    },
    haveExpired () { //已过期
      let self = this;
      self.unusedShow = false;
      self.haveBeenUsedShow = false;
      self.haveExpiredShow = true;
      self.styleSetting.IsHaveCheckShow = false;
      self.styleSetting.iconSty = '&#xe61f;'
    },
    selectCoupon (val) {
      let self = this;
      console.log(val)
      if (self.argument == 'shopping') {
        setLocalStorage('SET_MY_SELECT_COUPON', val)
        self.$router.back('/confirmOrder')
      }
    }
  }
}
</script>

<style lang='less' scoped>
.content-area{
  padding: .5rem 1rem;
}
</style>