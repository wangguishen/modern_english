<template>
  <div>
    <div class='header-two'>
      <flexbox :gutter="0">
        <flexbox-item>
          <div class="flex-demo" @click="level">按级别
            <div class='icon'>
              <p><span class='iconfont' @click.stop="click1">&#xe640;</span></p>
              <p><span class='iconfont'>&#xe605;</span></p>
            </div> 
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo" @click="experience">按经验
            <div class='icon'>
              <p><span class='iconfont'>&#xe640;</span></p>
              <p><span class='iconfont'>&#xe605;</span></p>
            </div> 
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo" @click="serve">按服务数
            <div class='icon'>
              <p><span class='iconfont'>&#xe640;</span></p>
              <p><span class='iconfont'>&#xe605;</span></p>
            </div> 
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="coun-list" v-for='(item,index) of worker' :key='index' @click='handleClick(item)'>
      <div class="img">
        <img :src="item.src1">
      </div>
      <div class="desc">
        <div class="name">   
          <p class='p1'>{{item.p}}</p>
          <div class='img1'><img :src="item.src2"></div>
        </div>
        <p class='p2'>从业<span>{{item.span1}}</span>年 已服务<span>{{item.span2}}</span>名客户</p>
      </div>
    </div>
  </div>
</template>

<script>
const bai=[
  {
    id:'1',
    src1:bai1,
    p:'陈梦茹',
    src2:glode,
    span1:'7',
    span2:'835',
    h4:'剑桥英语金牌顾问',
    span:'【顾问介绍】',
    text:"在生活中，我是一个爱说爱笑的女孩，并且善于与人沟通，在生活和学校中，我的朋友很多，平常爱好唱歌跳舞，热爱各种球类运动，经常与朋友参加团体活动，能很快的融入团体。在工作中，做事积极，执行力很强,办事果断，能够高消的完成工作在生活中，我是一个爱说爱笑的女孩，并且善于与人沟通，在生活和学校中，我的朋友很多，平常爱好唱歌跳舞，热爱各种球类运动，经常与朋友参加团体活动，能很快的融入团体。在工作中，做事积极，执行力很强,办事果断，能够高消的完成工作在生活中，我是一个爱说爱笑的女孩，并且善于与人沟通，在生活和学校中，我的朋友很多，平常爱好唱歌跳舞，热爱各种球类运动，经常与朋友参加团体活动，能很快的融入团体。在工作中，做事积极，执行力很强,办事果断，能够高消的完成工作在生活中，我是一个爱说爱笑的女孩，并且善于与人沟通，在生活和学校中，我的朋友很多，平常爱好唱歌跳舞，热爱各种球类运动，经常与朋友参加团体活动，能很快的融入团体。在工作中，做事积极，执行力很强,办事果断，能够高消的完成工作在生活中，我是一个爱说爱笑的女孩，并且善于与人沟通，在生活和学校中，我的朋友很多，平常爱好唱歌跳舞，热爱各种球类运动，经常与朋友参加团体活动，能很快的融入团体。在工作中，做事积极，执行力很强,办事果断，能够高消的完成工作"
  },{
    id:'2',
    src1:bai2,
    p:'吴佳音',
    src2:glode,
    span1:'14',
    span2:'1122',
    h4:'剑桥英语金牌顾问',
    span:'【顾问介绍】',
    text:"在生活中，我是一个爱说爱笑的女孩，并且善于与人沟通，在生活和学校中，我的朋友很多，平常爱好唱歌跳舞，热爱各种球类运动，经常与朋友参加团体活动，能很快的融入团体。在工作中，做事积极，执行力很强,办事果断，能够高消的完成工作"
  },{
    id:'3',
    src1:bai3,
    p:'陈褔康',
    src2:sliver,
    span1:'6',
    span2:'322',
    h4:'剑桥英语银牌顾问',
    span:'【顾问介绍】',
    text:"在生活中，我是一个爱说爱笑的男生，并且善于与人沟通，在生活和学校中，我的朋友很多，平常爱好唱歌跳舞，热爱各种球类运动，经常与朋友参加团体活动，能很快的融入团体。在工作中，做事积极，执行力很强,办事果断，能够高消的完成工作"
  },{
    id:'4',
    src1:bai4,
    p:'罗惠萍',
    src2:sliver,
    span1:'9',
    span2:'469',
    h4:'剑桥英语银牌顾问',
    span:'【顾问介绍】',
    text:"在生活中，我是一个爱说爱笑的女孩，并且善于与人沟通，在生活和学校中，我的朋友很多，平常爱好唱歌跳舞，热爱各种球类运动，经常与朋友参加团体活动，能很快的融入团体。在工作中，做事积极，执行力很强,办事果断，能够高消的完成工作"
  },{
    id:'5',
    src1:bai5,
    p:'周玉洁',
    src2:tong,
    span1:'2',
    span2:'236',
    h4:'剑桥英语铜牌顾问',
    span:'【顾问介绍】',
    text:"在生活中，我是一个爱说爱笑的女孩，并且善于与人沟通，在生活和学校中，我的朋友很多，平常爱好唱歌跳舞，热爱各种球类运动，经常与朋友参加团体活动，能很快的融入团体。在工作中，做事积极，执行力很强,办事果断，能够高消的完成工作"
  },{
    id:'6',
    src1:bai6,
    p:'柳倩',
    src2:tong,
    span1:'5',
    span2:'335',
    h4:'剑桥英语铜牌顾问',
    span:'【顾问介绍】',
    text:"在生活中，我是一个爱说爱笑的女孩，并且善于与人沟通，在生活和学校中，我的朋友很多，平常爱好唱歌跳舞，热爱各种球类运动，经常与朋友参加团体活动，能很快的融入团体。在工作中，做事积极，执行力很强,办事果断，能够高消的完成工作"
  },{
    id:'7',
    src1:bai8,
    p:'王贵申',
    src2:tong,
    span1:'3',
    span2:'135',
    h4:'剑桥英语铜牌顾问',
    span:'【顾问介绍】',
    text:"在生活中，我是一个爱说爱笑的男生，并且善于与人沟通，在生活和学校中，我的朋友很多，平常爱好唱歌跳舞，热爱各种球类运动，经常与朋友参加团体活动，能很快的融入团体。在工作中，做事积极，执行力很强,办事果断，能够高消的完成工作" 
  },{
    id:'8',
    src1:bai7,
    p:'袁冷月',
    src2:sliver,
    span1:'8',
    span2:'735',
    h4:'剑桥英语银牌顾问',
    span:'【顾问介绍】',
    text:"在生活中，我是一个爱说爱笑的女孩，并且善于与人沟通，在生活和学校中，我的朋友很多，平常爱好唱歌跳舞，热爱各种球类运动，经常与朋友参加团体活动，能很快的融入团体。在工作中，做事积极，执行力很强,办事果断，能够高消的完成工作"
  }
]
import bai1 from '@/assets/images/bai1.png'
import bai2 from '@/assets/images/bai2.png'
import bai3 from '@/assets/images/bai3.png'
import bai4 from '@/assets/images/bai4.png'
import bai5 from '@/assets/images/bai5.png'
import bai6 from '@/assets/images/bai6.png'
import bai7 from '@/assets/images/bai7.png'
import bai8 from '@/assets/images/bai8.png'
import glode from '@/assets/images/glode.png'
import sliver from '@/assets/images/sliver.png'
import tong from '@/assets/images/tong.png'
import { Flexbox, FlexboxItem  } from 'vux'
export default {
  name: 'CounCenter',
  data (){
  	return {
      worker:bai
  	}
  },
  components:{
    Flexbox,
    FlexboxItem
  },
  methods:{
    handleClick(item){
      let self=this;
      window.sessionStorage.setItem('CHANGEINFO',JSON.stringify(item))
      self.$store.dispatch("changeInfo",item)
      self.$router.push('/counselorInfo')
    },
    level () { //按级别
      let self = this;
      self.worker.sort(self.compare('id'))
    },
    experience () { //按经验
      let self = this;
      self.worker.sort(self.compare('span1'))
    },
    serve () { //按服务数
      let self = this;
      self.worker.sort(self.compare('span2')).reverse()
    },
    click1(){
      console.log(4156456465456)
    },
    compare(property){
      return function(a,b){
        var value1 = parseInt(a[property]);
        var value2 = parseInt(b[property]);
        return value1 - value2;
      }
    }
  }
}
</script>

<style lang='less' scoped>
.header-two{
  line-height: 2.5;
}
.flex-demo {
  text-align: center;
  font-size: .9rem;
  color: #716060;
  background-color:#b5acac2b;
  border-right: 1px solid #ebe3e3b8;
  background-clip: padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon{
    display: inline-block;
    line-height: 0.5;
    p{
      line-height: 0.5;
      .iconfont{
        color: #716060;
        font-size: 1rem;
      }
    }
  }
}
.coun-list{
  display: flex;
  height: 100px;
  align-items: center;
  background-color: #fff;
  .img{
    padding: 20px;
    height: 100%;
    box-sizing: border-box;
    img{
      display: block;
      height: 100%;
      border-radius: 50px;
    }
  }
  .desc{
    flex:1;
    .p2{
      color: #65595b;
    }
    p{
      padding: 6px;
      display: inline-block;
      span{
        color: #e53244;
        font-weight: 600;
      }
    }
    .img1{
      display: inline-block;
      height: 26px;
      img{
        height: 100%;
      }
    }
  }
}
</style>
