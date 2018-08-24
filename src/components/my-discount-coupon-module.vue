<template>
  <div class="a-discount-box" :class="{'a-lose-efficacy': !styleSetting.IsHaveCheckShow}">
    <img class="g-image-sty" :src="backgroundImg" alt="">
  	<div class="g-pitch-on" v-show="styleSetting.IsHaveCheckShow">
      <check-icon :value.sync="discountCoupon.IsPitchOnShow"></check-icon>
    </div>
    <div class="g-coupon-cont">
      <flexbox orient="vertical" :gutter="0">
        <flexbox-item>
          <div class="t-money-sty normRedColor">
            ￥ <span class='s-money-num'>{{discountCoupon.money}}</span>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="c-align grayColor">
            {{discountCoupon.content}}
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="c-align grayColor">
            有效期至：{{discountCoupon.periodOfValidity}}
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="g-coupon-icon" v-show="!styleSetting.IsHaveCheckShow">
      <span class="iconfont" v-html="styleSetting.iconSty"></span>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, CheckIcon } from 'vux'
import backgroundImg from '../../static/image/discount_coupon.png' 
export default {
  components: {
    Flexbox, FlexboxItem, CheckIcon
  },
  props: {
    discountCoupon: Object,
    styleSetting: Object
  },
  data () {
  	return {
			backgroundImg: backgroundImg,
      IsPitchOnShow: false,
  	}
  },
  watch: {
    discountCoupon: {
      handler: function (val, old) {
        if (val.IsPitchOnShow) {
          this.$emit('selectCoupon', val)
        }
      },
      deep: true
    }
  },
  mounted (){
    let self = this;
  },
  methods: {
    
  }
}
</script>

<style lang='less' scoped>
.a-discount-box{
  position: relative;
  margin-bottom: .5rem;
  .g-image-sty{
    display: block;
    width: 100%;
  }
  .g-pitch-on{
    position: absolute;
    top: 38%;
    left: 8%;
  }
  .g-coupon-cont{
    position: absolute;
    top: 8%;
    right: 18%;
    .t-money-sty{
      text-align: center;
      font-size: 1.5rem;
      .s-money-num{
        font-size: 3rem;
      }
    }
  }
  .g-coupon-icon{
    position: absolute;
    bottom: 1.3rem;
    right: 0.5rem;
    .iconfont{
      color: #cacaca;
      font-size: 4rem;
    }
  }
}
.a-discount-box.a-lose-efficacy {
  .g-coupon-cont{
    .t-money-sty{
      color: #cacaca;
    }
    .c-align{
      color: #cacaca;
    }
  }
}
</style>
