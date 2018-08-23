<template>
  <div class='g-order-box'>
    <div class='s-order-header' v-show="order.IsPitchOnShow">
      <span class='rf' @click="operationClick">{{order.classesShow | stateDictionary}}</span>
    </div>
    <div class='s-order-content a-discount-box'>
      <div class="g-pitch-on">
        <check-icon :value.sync="order.IsPitchOnShow"></check-icon>
      </div>
      <img class='sm-order-img' :src="order.img" alt="">
      <div class='sm-order-box'>
        <template v-if="order.classesShow == '0'">
          <flexbox orient="vertical">
            <flexbox-item>
              <div class="sm-course-title">
                {{order.title}}
              </div>
            </flexbox-item>
            <flexbox-item>
              <flexbox>
                <flexbox-item :span="5">
                  <div class="flex-demo grayColor">
                    课次：<span class='blackColor'>{{order.residueTime}}次</span>
                  </div>
                </flexbox-item>
                <flexbox-item>
                  <div class="flex-demo grayColor">
                    地点：<span class='blackColor'>{{order.address}}</span>
                  </div>
                </flexbox-item>
              </flexbox>
            </flexbox-item>
            <flexbox-item>
              <flexbox>
                <flexbox-item :span="5">
                  <div class="flex-demo grayColor">
                    讲师：<span class='blackColor'>{{order.lecturer}}</span>
                  </div>
                </flexbox-item>
              </flexbox>
            </flexbox-item>
          </flexbox>
        </template>
        <template v-else>
          <group class="l-num-box">
            <x-number v-model="order.residueTime" width="50px" :min='0' :max="parseInt(order.classTime)"></x-number>
          </group>
          <button class='l-order-btn' @click="delectOrder">删除</button>
        </template>
      </div>
    </div>
    <div class='s-bar-line'>
      <span class="iconfont">&#xe61b;</span>
      <span>{{order.startTime | YIDTime}} - {{order.endTime | YIDTime}} 每周五晚上{{order.startTime | hourTime}} - {{order.endTime | hourTime}}</span>
    </div>
    <div class='s-order-fotter'>
      <span class='lf t-order-time'>
        {{order.classesState | classesFilter}}
      </span>
      <div class="y-order-price grayColor rf">
        <span style="margin-right: .5rem;" v-show="order.IsPitchOnShow">剩余课次{{order.residueTime}}次*单价￥{{order.unitPrice}}</span>
        <span>价格：</span>
        <span class="normRedColor">￥{{order.price | priceInit}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { XButton, CheckIcon, Flexbox, FlexboxItem, InlineXNumber, Group, XNumber } from 'vux'
import {formatTime} from '@/util/dateUtil'
export default {
  components: {
    XButton, CheckIcon, Flexbox, FlexboxItem, InlineXNumber, Group, XNumber
  },
  props:{
    order: Object,
    orderArr: Array
  },
  data(){
    return {
    }
  },
  mounted (){
    let self = this;
  },
  watch: {
    order: {
      handler: function (val, old) {
        let self = this;
        val.price = val.unitPrice * val.residueTime
        if (!val.IsPitchOnShow) {
          val.classesShow = '0'
          let attr = 0
          self.orderArr.forEach((item, index) => {
            if (item.id == val.id) {
              attr = index
            }
          })
          self.orderArr.splice(attr, 1)
        } else {
          let Isshow = false
          self.orderArr.forEach((item, index) => {
            if (item.id == val.id) {
              Isshow = true
            }
          })
          if (!Isshow) {
            self.orderArr.push(val)
          }
        }
        console.log(val.price)
      },
      deep: true
    }
  },
  methods: {
    backClickBtn (state) {
      let self = this;
      self.$emit('backClickBtn',state)
    },
    operationClick () { // 编辑或者完成事件
      let self = this;
      if (self.order.classesShow == '0') {
        self.order.classesShow = '1'
      } else {
        self.order.classesShow = '0'
      }
    },
    delectOrder () {
      let self = this;
      self.$emit('delectOrder',self.order)
    }
  },
  filters: {
    stateDictionary: (value) => {  //格式化开班状态
      if (value === '0') {
        value = '编辑'
      } else if (value === '1') {
        value = '完成'
      }
      return value
    },
    YIDTime: (value) => { //年月日
      if (!value) return ''
      return value.split(' ')[0]
    },
    hourTime: (value) => { //时间钟点
      if (!value) return ''
      return value.split(' ')[1]
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
    formatPubTime: (value) => { //格式化字符串转数字
      if (!value) return ''
      return parseInt(value)
    }
  }
}
</script>
<style lang="less" scoped>
  .iconfont{
    color: #999;
  }
  .g-order-box {
    margin: 1rem 0;
    font-size: 14px;
  }
  .s-order-header, .s-order-fotter {
    width:100%;
    background: #fff;
    padding:.8rem .8rem;
    color:#999;
    overflow:hidden;
    box-sizing: border-box;
  }
  .s-order-fotter {
    padding:.5rem 1.3rem;
  }
  .s-order-content {
    display: flex;
    align-items: center;
    padding: .8rem 0 .8rem .8rem;
    background-color: #FAFAFA;
  }
  .s-order-border{
    border-top: 1px solid #eee;
  }
  .sm-order-img {
    display: block;
  }
  .sm-order-box {
    padding-left: .5rem;
    width: 70%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .y-order-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: .5rem;
  }
  .t-order-time{
    line-height: 2;
  }
  .sm-course-title{
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: .1rem;
  }
  .s-bar-line{
    display: flex;
    align-items: center;
    padding: .5rem 0 .5rem 1.3rem;
    font-size: .8rem;
    background: #FAFAFA;
    box-sizing: border-box;
  }
  .s-bar-line .iconfont{
    font-size: 1.2rem;
    margin-right:.5rem;
  }
  .y-order-price{
    display: flex;
    align-items: center;
    font-size: .7rem;
  }
  .s-order-fotter .y-order-price .normRedColor{
    font-size: 1.1rem;
  }
  .l-order-btn{
    float:right;
    width:40%;
    height:5.5rem;
    line-height: 5.5rem;
    background-color: #FF2D4B;
    color:#fff;
    border:none;
  }
  .l-num-box{
    width: 60%;
    display: flex;
    justify-content: center;
  }
</style>