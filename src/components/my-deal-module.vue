<template>
	<div class='g-deal-box'>
    <template v-for='(item, index) in deal.order_content'>
      <div class='s-deal-content' :class="{'s-deal-border': (index != 0)}">
        <img class='sm-deal-img' :src="item.img" alt="">
        <div class='sm-deal-box'>
          <div class="y-deal-title">{{item.title}}</div>
          <div class="y-deal-price grayColor">总价：<span class="normRedColor">￥{{item.price}}</span></div>
        </div>
        <div class='btn-deal-box' v-show="item.orderState == '1'">
          <x-button mini type="warn" class="normBgRedColor" @click.native="backDealBtn(item)">退款</x-button>
        </div>
        <div class='btn-deal-box' v-show="item.orderState == '3'">
          <span class="iconfont normRedColor">&#xe60a;</span>
        </div>
      </div>
    </template>
	</div>
</template>
<script>
import { XButton } from 'vux'
import {formatTime} from '@/util/dateUtil'
export default {
  components: {
    XButton
  },
  props:{
    deal: Object
  },
  data(){
    return {
    }
  },
  mounted (){
    let self = this;
  },
  methods: {
    backDealBtn (state) {
      let self = this;
      self.$emit('backDealBtn',state)
    }
  },
}
</script>
<style lang='less' scoped>
  .g-deal-box {
    margin: 1rem 0;
    font-size: 14px;
  }
  .s-deal-content {
    display: flex;
    align-items: center;
    padding: .8rem 1rem;
    background-color: #FAFAFA;
    justify-content: space-between;
  }
  .s-deal-border{
    border-top: 1px solid #eee;
  }
  .sm-deal-img {
    display: block;
  }
  .sm-deal-box {
    flex-grow: 2;
    padding-left: 1rem;
  }
  .y-deal-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: .5rem;
  }
  .t-deal-time{
    line-height: 2;
  }
  .btn-deal-box{
    .normRedColor{
      color: #FF2D4B;
      font-size: 3.5rem;
    }
  }
</style>