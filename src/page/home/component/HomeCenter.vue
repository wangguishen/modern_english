<template>
  <div id='center'>
    <div class='advertisement' v-for='(item,index) of adver' :key="index">
      <div class='ad'>      
        <div class='ad-img'>
          <img :src="item.src">
        </div>
        <div class="ad-text">
          <p class='top' :class="{'change-color': (item.id == 2)}">{{item.text1}}</p>
          <p class='bottom'>{{item.text2}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dre from '@/assets/images/dre.png'
import TuoFu from '@/assets/images/TuoFu.png'
const adList = [
  {
    src:dre,
    text1:'新用户专享',
    text2:'一分钱充5元学费',
    id:1
  },
  {
    src:TuoFu,
    text1:'1688元起',
    text2:'High趴进行曲',
    id:2
  }
]

export default {
  name: 'HomeCenter',
  data (){
  	return {
      adver:adList
  	}
  },
  // watch {
  //   text1:{
  //     handler:function(){
  //       let self=this;
  //       self.text1 = ''
  //       if()
  //     }
  //   }
  // }
}
</script>

<style lang='less' scoped>
  #center{
    margin-top: 10px;
    background: #FFF;
    .advertisement{
      // margin-top: 10px;
      width: 50%;
      height: 100px;
      display: inline-block;
      .ad{
        // padding: 5px;
        width: 100%;
        height: 100%;
        display: flex;
        /* justify-content: center; */
        box-sizing: border-box;
        align-items: center;
        .ad-img{
          width: 40%;
          padding: 10px;
          box-sizing: border-box;
          img{
            display: block;
            width: 100%;
          }   
        }
        .ad-text{
          flex:1;
          .top{
            font-size: 16px;
            font-weight: 800;
            color: #fec53d;
            padding: 5px;
          }
          .change-color{
            color: red;
          }
          .bottom{
            color: gray;
            padding: 5px;
            font-size: 14px;
          }
        }

      }
    }
  }
</style>
