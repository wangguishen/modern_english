<template>
	<div id='homeheader'>	
	  <div >
	    <!-- <group-title>use swiper-item for image list</group-title> -->
	    <swiper loop   :aspect-ratio="45/100">
	      <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index"><img :src="item" class='img'></swiper-item>
	    </swiper>
	  </div>
	  <div class='icons'>
	  	<div class="icon-wrapper" v-for="(item,index) of icon" :key="index" @click="jumpPath(item)">
	  		<div class="icon">
	  			<img class='img' :src="item.src">
	  			<p>{{item.text}}</p>
	  		</div>
	  	</div>
	  </div>
	</div>
</template>

<script>
import { Swiper,SwiperItem} from 'vux'
import banner from '@/assets/images/banner.png'
import icon1 from '@/assets/images/icon1.png'
import icon2 from '@/assets/images/icon2.png'
import icon3 from '@/assets/images/icon3.png'
import icon4 from '@/assets/images/icon4.png'
import icon5 from '@/assets/images/icon5.png'
import icon6 from '@/assets/images/icon6.png'
const imgList = [
  banner,
  banner,
  banner
]
const iconList = [
	{
		src:icon1,
		text:'找顾问',
		path:'/counselor'
	},
	{
		src:icon2,
		text:'全部课程',
		path:'/courseList'
	},
	{
		src:icon3,
		text:'成功案例'
	},
	{
		src:icon4,
		text:'为您定制'
	},
	{src:icon5,
		text:'学习法'
	},
	{
		src:icon6,
		text:'就近学习'
	}
]
export default {
  name: 'HomeHeader',
  data () {
  	return {
  		demo04_list: imgList,
  		loop:true,
			icon:iconList
  	}
  },
  components:{
  	// GroupTitle,
  	SwiperItem,
  	Swiper
  },
  mounted(){
  	// let self = this;
  	// self.icon.forEach((item,index) => {
  	// 	item.pathABC = '/home'
  	// })
  	// console.log(self.icon)
  },
  methods:{
  	jumpPath (item) {
  		console.log(item)
  		if(item.path){
  			this.$router.push(item.path)
  		} else{
  			console.log('没有path关键字')
  		}
  	}
  }
}
</script>

<style lang='less' scoped>
	#homeheader{
		background:#ffffff;
		.swiper-demo-img{
			.img {
				display:block;
				width:100%;
			}
		}
		.icons{
			width:100%;
			.icon-wrapper{
				width:33%;
				height: 0;
				padding-bottom:27%;
		    display: inline-block;
		    // border: 1px solid red;
		    .img{
			    width: 45%;
			    display: block;
			    margin: auto auto;
			    padding: 10px;
		    }
		    p{
		    	text-align: center;
    	    font-size: 12px;
		    }
			}
		}
	}
</style>
