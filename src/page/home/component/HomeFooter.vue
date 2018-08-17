<template>
  <div id='footer'>
    <div class="recommend" v-for='(item,index) of rec' :key='index'>
      <div class="img">
        <div class="p">
          <div class="p-wrapper"> 
            <p class='img-p1'>{{item.p1}}</p>
            <p class='img-p2'>{{item.p2}}</p>
            <p class='img-p3'>{{item.p3}}</p>
          </div> 
        </div>
        <img :src="item.src">
      </div>
      <p class='span'> 
        <span class='title'>{{item.title}}</span>
        <span class='name'>{{item.name}}</span>
        <span class='school'>{{item.school}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import girl1 from '@/assets/images/girl1.png'
import boy1 from '@/assets/images/boy1.png'
import boy2 from '@/assets/images/boy2.png'
import boy3 from '@/assets/images/boy3.png'
import boygirl from '@/assets/images/boygirl.png'
import girl2 from '@/assets/images/girl2.png'
const recList = [{
  src:girl1,
  p1:'4-6岁剑桥儿童英语',
  p2:'儿童英语学习的启蒙教材',
  title:'成功案例：',
  name:'隋沛淇',
  school:'-就读北京四中 CAE通过时仅11岁'
},{
  src:boy1,
  p1:'6-8岁剑桥少儿英语',
  p2:'针对学生英语能力培养和提高',
  p3:'累计学生人数2600',
  title:'成功案例：',
  name:'隋沛淇',
  school:'-就读北京四中 CAE通过时仅11岁'
},{
  src:boy2,
  p1:'9-10岁剑桥五级英语KET',
  p2:'全国最早开设英语KET课程的培训机构',
  p3:'累计学生人数3200',
  title:'成功案例：',
  name:'隋沛淇',
  school:'-就读北京四中 CAE通过时仅11岁'
},{
  src:boy3,
  p1:'6-8岁剑桥少儿英语',
  p2:'针对学生英语能力培养和提高',
  p3:'累计学生人数2600',
  title:'成功案例：',
  name:'隋沛淇',
  school:'-就读北京四中 CAE通过时仅11岁'
},{
  src:boygirl,
  p1:'9-10岁剑桥五级英语KET',
  p2:'全国最早开设英语KET课程的培训机构',
  p3:'累计学生人数3200',
  title:'成功案例：',
  name:'隋沛淇',
  school:'-就读北京四中 CAE通过时仅11岁'
},{
  src:girl2,
  p1:'4-6岁剑桥儿童英语',
  p2:'儿童英语学习的启蒙教材',
  title:'成功案例：',
  name:'隋沛淇',
  school:'-就读北京四中 CAE通过时仅11岁'
}]
export default {
  name: 'HomeFooter',
  data (){
  	return {
      rec:recList
  	}
  }
}
</script>

<style lang='less' scoped>
#footer{
  .recommend{
    position: relative;
    background: #FFF;
    margin-top: 10px;
    width: 100%;
    height: 0;
    padding-bottom: 36%;
    .img{
      position: relative;
      border-bottom: 1px solid #80808024;
      .p{
        top: 0;
        left: 0px;
        bottom: 0;
        right: 30%;
        position: absolute;
        display: flex;
        align-items: center;
        .img-p1{
          padding: 0 0 10px 10px;
          font-size: 14px;
          font-weight: 600;
        }
        .img-p2{
          padding-left: 10px;
          padding-bottom: 5px;
          font-size: 12px;
          color: grey;
        }
        .img-p3{
          padding-left: 10px;
          font-size: 12px;
          color: grey;
        }
      }
      img{
        display: block;
        width: 100%;
      }
    }
    .span{
      position: absolute;
      left: 0;
      top: 68%;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      padding-left: 10px;
      .title{
        color: #fa3052;
      }
      .name{ 
        font-weight: 600;
        font-size: 12px;
      }
      .school{
        color:grey;
        font-size: 12px;
      }
    }
  }
}
</style>
