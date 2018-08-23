<template>
  <div class='main'>
  	<my-header v-on:backWay="backWay" :headObj="headObj" :rightObj="rightObj" v-on:finish="finish"></my-header>
    <template v-for='item in courseList'>
      <my-course-module :curriculum='item' v-on:jumpCourseDetail="jumpCourseDetail"></my-course-module>
    </template>
    <div v-transfer-dom>
      <popup v-model="screenFraneShow" position="bottom" max-height="93%" height="93%" :show-mask='false'>
        <group class="g-screen-group">
          <template v-for="screen of screenList">
            <template v-if="screen.hasOwnProperty('contentShow')">
              <cell
                :title="screen.title"
                is-link
                :border-intent="false"
                :arrow-direction="screen.contentShow ? 'up' : 'down'"
                @click.native="screen.contentShow = !screen.contentShow"></cell>
              <div class="slide" :class="screen.contentShow?'animate':''">
                <template v-if="screen.year">
                  <my-flex-btn :screen='screen.year' :moduleShow='true'></my-flex-btn>
                </template>
                <template v-if="screen.month">
                  <my-flex-btn :screen='screen.month' :moduleShow='true'></my-flex-btn>
                </template>
                <template v-if="screen.jqPyatyi">
                  <my-flex-btn :screen='screen.jqPyatyi' :moduleShow='true'></my-flex-btn>
                </template>
                <template v-if="screen.jqEnglish">
                  <my-flex-btn :screen='screen.jqEnglish' :moduleShow='true'></my-flex-btn>
                </template>
                <template v-if="screen.sat">
                  <my-flex-btn :screen='screen.sat' :moduleShow='true'></my-flex-btn>
                </template>
                <template v-if="screen.tf">
                  <my-flex-btn :screen='screen.tf' :moduleShow='true'></my-flex-btn>
                </template>
              </div>
            </template>
            <template v-else>
              <cell
                :title="screen.title"></cell>
              <div class="s-slide">
                <my-flex-btn :screen='screen' :moduleShow='false'></my-flex-btn>
              </div>
            </template>
          </template>
        </group>
        <div class="bgWrite g-screen-btn-box">
          <x-button mini plain type="warn" @click.native="resetBtn">重置</x-button>
        </div>
        <!-- <template v-if="screenFraneShow"> -->
          <x-button @click.native="screenFraneShow = false" type="primary" class="g-screen-btn">确定</x-button>
        <!-- </template> -->
      </popup>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/my-header'
import MyFlexBtn from '@/components/my-flex-btn'
import MyCourseModule from '@/components/my-course-module'
import { TransferDom, Popup, Group, Cell, XButton, Flexbox, FlexboxItem } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    MyHeader, MyFlexBtn, MyCourseModule, Popup, Group, Cell, XButton, Flexbox, FlexboxItem
  },
  data () {
  	return {
			headObj:{
        title: '全部课程',
        isBack: true,
      },
      rightObj:{
        isMore: true,
        title: '筛选',
        icon: '&#xe605;',
        color: '#666'
      },
      courseList: [
        {
          img: '../../static/image/PET.png',
          title: '周日下午PET旗舰班',
          lecturer: 'Kobe',
          classSchedule: '11',
          classTime: '45',
          courseState: '新开',
          startTime: '2018.03.04 8:30',
          endTime: '2018.11.04 11:30',
          address: '世纪城',
          classState: 0,
          price: '6666'
        },{
          img: '../../static/image/PET.png',
          title: '周六下午PET旗舰班',
          lecturer: 'Kobe',
          classSchedule: '5',
          classTime: '40',
          courseState: '新开',
          startTime: '2018.02.04 8:30',
          endTime: '2018.10.04 11:30',
          address: '世纪城',
          classState: 1,
          price: '8888'
        },{
          img: '../../static/image/PET.png',
          title: '周五下午PET旗舰班',
          lecturer: 'Kobe',
          classSchedule: '11',
          classTime: '20',
          courseState: '新开',
          startTime: '2018.04.04 8:30',
          endTime: '2018.12.04 11:30',
          address: '世纪城',
          classState: 2,
          price: '2222'
        }
      ],
      // 筛选框
      screenFraneShow: false,
      screenList: [
        {
          title: '按时间：',
          contentShow: true,
          year: {
            title: '年份',
            data: [
              {
                name: '2016年',
                IsChecked: false
              },{
                name: '2017年',
                IsChecked: false
              },{
                name: '2018年',
                IsChecked: false
              }
            ]
          },
          month: {
            title: '月份',
            data: [
              {
                name: '一月',
                IsChecked: false
              },{
                name: '二月',
                IsChecked: false
              },{
                name: '三月',
                IsChecked: false
              },{
                name: '四月',
                IsChecked: false
              },{
                name: '五月',
                IsChecked: false
              },{
                name: '六月',
                IsChecked: false
              },{
                name: '七月',
                IsChecked: false
              },{
                name: '八月',
                IsChecked: false
              },{
                name: '九月',
                IsChecked: false
              },{
                name: '十月',
                IsChecked: false
              },{
                name: '十一月',
                IsChecked: false
              },{
                name: '十二月',
                IsChecked: false
              }
            ]
          }
        },{
          title: '按状态：',
          data:[
            {
              name: '全部',
              IsChecked: false
            },{
              name: '未开班',
              IsChecked: false
            },{
              name: '已开班',
              IsChecked: false
            }
          ]
        },{
          title: '按课程：',
          contentShow: true,
          jqPyatyi: {
            title: '剑桥五级',
            data: [
              {
                name: 'KET',
                IsChecked: false
              },{
                name: 'PET',
                IsChecked: false
              },{
                name: 'FCE',
                IsChecked: false
              },{
                name: 'CAE',
                IsChecked: false
              },{
                name: 'CPE',
                IsChecked: false
              }
            ]
          },
          jqEnglish: {
            title: '剑桥英语',
            data: [
              {
                name: 'Pw1',
                IsChecked: false
              },{
                name: 'Pw2',
                IsChecked: false
              },{
                name: 'KB1',
                IsChecked: false
              },{
                name: 'KB2',
                IsChecked: false
              },{
                name: 'KB3',
                IsChecked: false
              },{
                name: 'KB4',
                IsChecked: false
              },{
                name: 'KB5',
                IsChecked: false
              }
            ]
          },
          sat: {
            title: 'SAT',
            data: [
              {
                name: 'SATⅡ1',
                IsChecked: false
              },{
                name: 'SATⅡ2',
                IsChecked: false
              }
            ]
          },
          tf: {
            title: '托福',
            data: [
              {
                name: '旗舰班',
                IsChecked: false
              },{
                name: '强化班',
                IsChecked: false
              }
            ]
          },
        },{
          title: '按校区：',
          data:[
            {
              name: '西单',
              IsChecked: false
            },{
              name: '双安',
              IsChecked: false
            },{
              name: '望京',
              IsChecked: false
            },{
              name: '公主坟',
              IsChecked: false
            },{
              name: '世纪城',
              IsChecked: false
            }
          ]
        }
      ],
  	}
  },
  mounted (){
    let self = this;
  },
  watch:{
    screenFraneShow:{
      handler: function (val, old) {
        let self = this;
        if (val) {
          self.rightObj.color = '#FF2D4B';
          self.rightObj.icon = '&#xe640;'
        } else {
          self.rightObj.color = '#666';
          self.rightObj.icon = '&#xe605'
        }
      },
      deep: true
    }
  },
  methods: {
    backWay () { //返回事件
      let self = this;
      self.$router.back('/home')
    },
    finish () { //点击筛选按钮
      let self = this;
      self.screenFraneShow = !self.screenFraneShow
      // self.$vux.toast.text('点击筛选按钮', 'middle')
    },
    jumpCourseDetail (state) {
      let self = this;
      self.$vux.toast.text('课程详情暂未开发', 'middle')
      console.log(state)
    },
    resetBtn () { //重置
      let self = this;
      console.log(self.screenList)
      for(let item of self.screenList) {
        if (item.hasOwnProperty('contentShow')) {
          let res = []
          if (item.hasOwnProperty('year')) {
            res = ['year','month']
          } else if (item.hasOwnProperty('jqPyatyi')) {
            res = ['jqPyatyi', 'jqEnglish', 'sat', 'tf']
          }
          for (let even of res) {
            item[even].data.forEach((key, val) => {
              key.IsChecked = false;
            })
          }
        } else {
          item.data.forEach((key, val) => {
            key.IsChecked = false;
          })
        }
      }
    }
  }
}
</script>

<style scoped>
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  font-size: .8rem;
}
.s-slide{
  padding: 0 20px;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
.g-screen-group{
  border-bottom: 1px solid #eaeaea;
}
.g-screen-btn-box{
  display: flex;
  align-items: center;
  padding: .5rem;
}
.g-screen-btn{
  position: fixed;
  bottom:0;
  left:0;
  border-radius: 0;
  border:none;
  background-color: #FF2D4B;
  color:#fff;
  letter-spacing: .5rem;
  line-height: 2.3;
}
</style>
