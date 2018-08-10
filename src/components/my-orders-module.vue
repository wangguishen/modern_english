<template>
	<div class='g-order-box'>
    <div class='s-order-header'>
      <span class='lf'>订单号：<span style="color:#000;">{{order.order_number}}</span></span>
      <span class='rf'>{{order.state | stateDictionary}}</span>
    </div>
    <template v-for='(item, index) in order.order_content'>
      <div class='s-order-content' :class="{'s-order-border': (index != 0)}">
        <img class='sm-order-img' :src="item.img" alt="">
        <div class='sm-order-box'>
          <div class="y-order-title">{{item.title}}</div>
          <div class="y-order-price grayColor">总价：<span class="normRedColor">￥{{item.price}}</span></div>
        </div>
      </div>
    </template>
    <div class='s-order-fotter'>
      <span class='lf t-order-time'>下单时间：<span style="color:#000;">{{order.order_time | formatPubTime}}</span></span>
      <span class='rf'>
        <template v-if="order.state == 0">
          <x-button mini type="warn" class="normBgRedColor" @click.native="backClickBtn(order)">取消订单</x-button>
        </template>
        <template v-if="order.state == 1">
          <x-button mini type="warn" class="normBgRedColor" @click.native="backClickBtn(order)">付款</x-button>
        </template>
      </span>
    </div>
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
    order: Object
  },
  data(){
    return {
    }
  },
  mounted (){
    let self = this;
  },
  methods: {
    backClickBtn (state) {
      let self = this;
      self.$emit('backClickBtn',state)
    }
  },
  filters: {
    stateDictionary: (value) => {  //格式化state字段
      if (value === '0') {
        value = '交易成功'
      } else if (value === '1') {
        value = '待付款'
      } else if (value === '2') {
        value = '已取消'
      } else if (value === '3') {
        value = '已退款'
      }
      return value
    },
    formatPubTime: (value) => { //格式化pubtime
      if (!value) return ''
      return formatTime(value, '{y}/{m}/{d} {h}:{i}')
    }
  }
}
</script>
<style scoped>
  .g-order-box {
    margin: 1rem 0;
    font-size: 14px;
  }
  .s-order-header, .s-order-fotter {
    width:100%;
    background: #fff;
    padding:.8rem 1rem;
    color:#999;
    overflow:hidden;
    box-sizing: border-box;
  }
  .s-order-fotter {
    padding:.5rem 1rem;
  }
  .s-order-content {
    display: flex;
    align-items: center;
    padding: .8rem 1rem;
    background-color: #FAFAFA;
  }
  .s-order-border{
    border-top: 1px solid #eee;
  }
  .sm-order-img {
    display: block;
  }
  .sm-order-box {
    padding-left: 1rem;
  }
  .y-order-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: .5rem;
  }
  .t-order-time{
    line-height: 2;
  }
</style>