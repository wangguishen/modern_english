<template>
  <div>
    <div class='g-course-box' @click="jumpCourseDetail(curriculum)">
      <div class='s-course-content'>
        <img class='sm-course-img' :src="curriculum.img" alt="">
        <div class='sm-course-box'>
          <flexbox orient="vertical">
            <flexbox-item>
              <div class="sm-course-title">
                {{curriculum.title}}
              </div>
            </flexbox-item>
            <flexbox-item>
              <flexbox>
                <flexbox-item :span="5">
                  <div class="flex-demo grayColor">
                    讲师：<span class='blackColor'>{{curriculum.lecturer}}</span>
                  </div>
                </flexbox-item>
                <flexbox-item>
                  <div class="flex-demo grayColor">
                    开班人数：<span class='blackColor'>{{curriculum.classSchedule}}人</span>
                  </div>
                </flexbox-item>
              </flexbox>
            </flexbox-item>
            <flexbox-item>
              <flexbox>
                <flexbox-item :span="5">
                  <div class="flex-demo grayColor">
                    课次：<span class='blackColor'>{{curriculum.classTime}}次</span>
                  </div>
                </flexbox-item>
                <flexbox-item>
                  <div class="flex-demo grayColor">
                    课程状态：<span class='blackColor'>{{curriculum.courseState}}</span>
                  </div>
                </flexbox-item>
              </flexbox>
            </flexbox-item>
          </flexbox>
        </div>
        <span class="iconfont sm-icon-sty">&#xe60e;</span>
      </div>
      <div class='s-bar-line'>
        <span class="iconfont">&#xe61b;</span>
        <span>{{curriculum.startTime | YIDTime}} - {{curriculum.endTime | YIDTime}} 每周五晚上{{curriculum.startTime | hourTime}} - {{curriculum.endTime | hourTime}}</span>
      </div>
      <div class='s-bar-line'>
        <span class="iconfont">&#xe610;</span>{{curriculum.address}}
      </div>
    </div>
    <div class='s-course-fotter'>
      <span class='lf t-course-time'>{{curriculum.classState | classState}}</span>
      <div class="y-course-price grayColor rf">价格：<span class="normRedColor">￥{{curriculum.price | priceInit}}</span></div>
    </div>
  </div>
</template>
<script>
import { XButton, Flexbox, FlexboxItem } from 'vux'
import {formatTime} from '@/util/dateUtil'
export default {
  components: {
    XButton, Flexbox, FlexboxItem
  },
  props:{
    curriculum: Object
  },
  data(){
    return {
    }
  },
  mounted (){
    let self = this;
  },
  methods: {
    jumpCourseDetail (state) {
      let self = this;
      self.$emit('jumpCourseDetail',state)
    }
  },
  filters: {
    YIDTime: (value) => { //年月日
      if (!value) return ''
      return value.split(' ')[0]
    },
    hourTime: (value) => { //时间钟点
      if (!value) return ''
      return value.split(' ')[1]
    },
    classState: (value) => { //开班时间转换
      let val = '';
      if (value == 0) { //未开班
        val = '未开班'
      } else if (value == 1) { //已开班
        val = '已开班'
      } else if (value == 2) { //已结束
        val = '已结束'
      }
      return val
    },
    priceInit: (value) => {
      return parseInt(value).toFixed(2)
    }
  }
}
</script>
<style scoped>
  .iconfont{
    color: #999;
  }
  .g-course-box {
    margin: 1rem 0 0;
    padding: .5rem;
    background-color: #fff;
    box-sizing: border-box;
  }
  .sm-course-img {
    display: block;
  }
  .s-course-content {
    display: flex;
    align-items: center;
  }
  .sm-course-box{
    padding: 0 .5rem;
    width: 70%;
    box-sizing: border-box;
  }
  .sm-course-title{
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: .1rem;
  }
  .s-course-content .sm-icon-sty{
    color: #999;
  }
  .grayColor{
    letter-spacing: .05rem;
  }
  .blackColor{
    font-size: 1rem;
  }
  .s-bar-line{
    display: flex;
    align-items: center;
    padding: .5rem 0;
    font-size: .8rem;
  }
  .s-bar-line .iconfont{
    font-size: 1.2rem;
    margin-right:.5rem;
  }
  .s-course-fotter {
    width:100%;
    background: #fff;
    font-size:.9rem;
    padding: .5rem;
    color:#999;
    border-top: 1px solid #f5f5f5;
    overflow:hidden;
    box-sizing: border-box;
    letter-spacing: .1rem;
    display: flex;
    align-items: center;
  }
  .t-course-time{
    width:60%;
    color:#000;
  }
  .y-course-price{
    display: flex;
    align-items: center;
  }
  .s-course-fotter .y-course-price .normRedColor{
    font-size: 1.2rem;
  }
</style>