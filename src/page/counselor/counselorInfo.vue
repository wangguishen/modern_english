<template>
  <div id='coun-info'>
    <div class="header">
      <x-header class='xheader' :title="CounInfo.p || counselor.p">
        <span slot="overwrite-left" class="iconfont h-icon-back" @click="backClick()">&#xe60f;</span>
        <a slot="right">私信</a>
      </x-header>
    </div>
    <div class="center">
      <div class='img'>
        <img class='img1' :src="bg">
        <img class='img2' :src="CounInfo.src1 || counselor.src1">
      </div>
      <div class='ctx'>
        <div class='ctx2'> 
          <span class='h4' style='display:inline-block'>{{CounInfo.h4 || counselor.h4}}</span>
          <div style='display:inline-block;height:36px;'>
            <img style='display:block;height:100%' :src="CounInfo.src2 || counselor.src2">
          </div> 
        </div>
        <p class='p1'>从业<span>{{CounInfo.span1 || counselor.span1}}</span>年 已服务<span>{{CounInfo.span2 || counselor.span2}}</span>名客户</p>
        <p class='p2'><span>{{CounInfo.span || counselor.span}}</span>{{CounInfo.text || counselor.text}}</p>
      </div>
    </div>
    <div class="footer">
      <grid :show-vertical-dividers="false">
        <grid-item >
          <!-- <div class='ggg'> -->
            <span slot="icon" class='iconfont'>&#xe637;</span>
            <span slot="label" class="grid-center">关注</span>
          <!-- </div>-->
        </grid-item>
        <grid-item >
          <!-- <div class='ggg'> -->
            <span slot="icon" class='iconfont'>&#xe63b;</span>
            <span slot="label" class="grid-center">预约咨询</span>
          <!-- </div>          -->
        </grid-item>
        <grid-item >
          <div class="ggg">拨打电话</div>
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
import { XHeader,Flexbox, FlexboxItem,Grid, GridItem } from 'vux'
import zhuan from '@/assets/images/zhuan.png'
import bai1 from '@/assets/images/bai1.png'
export default {
  data (){
  	return {
      bg:zhuan,
      bai:bai1,
      counselor:{}

  	}
  },
  components:{
    XHeader,
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem 
  },
  computed:{
    CounInfo: function() {
      return this.$store.state.obj1;
    }
  },
  mounted(){
    let self=this;
    self.counselor = JSON.parse(window.sessionStorage.getItem('CHANGEINFO'))
    console.log(self.counselor)
  },
  methods:{
    backClick () {
      let self = this;
      self.$router.push('/counselor')
    }
  }
}
</script>

<style lang='less' scoped>
.header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  right: 0;
  .xheader{
    background-color: #ffffff;
    .h-icon-back{
      color: #FF2D4B;
      font-size:1.4rem;
    }
    a{
      color: grey;
    }
  }
}
.center{
  margin-top: 47px;
  .img{
    position: relative;
    margin-bottom: 15%;
    .img1{
      display: block;
      width: 100%;
    }
    .img2{
      position: absolute;
      display: block;
      width: 25%;
      border-radius: 50%;
      top: 76%;
      /* bottom: 50px; */
      left: 36%;
    }
  }
  .ctx{
    margin-bottom: 60px;
    .ctx2{
      display: flex;
      justify-content: center;
      align-items: center;
      .h4{
        font-size: 16px;
        text-align: center;
        font-weight: 600;
        padding: 10px;
        letter-spacing: 2px;
      }
    }
    .p1{
      font-size: 16px;
      text-align: center;
      padding: 10px;
      color: grey;
      span{
        color: #e53244;
        font-weight: 600;
      }
    }
    .p2{
      padding: 10px;
      line-height: 20px;
      font-size: 14px;
      text-indent: 14px;
      letter-spacing: 2px;
      color: grey;
      span{
        font-weight: 600;
        color: black;
      }
    }
  }
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width:100%;
  .iconfont{
    color:#666;
  }
  .ggg{
    padding: 1rem;
    font-size: 0.95rem;
  }
}
.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #2bbf3a;
  background-clip: padding-box;
  letter-spacing: 3px;
  font-weight: 600;
  font-size: 20px;
}
</style>
