<template>
  <div class="main">
    <div class="g-header">
    	<img class="h-bg-img" :src="headerObj.bgImg" alt="">
			<div class="h-title-box">
				<img class="h-bg-img" :src="headerObj.tlLogo" alt="">
				<span>{{headerObj.name}}</span>
				<span>{{headerObj.telphone | hidePartPhone}}</span>
			</div>
    </div>
    <div class="g-grid">
    	<grid :show-vertical-dividers="true" :show-lr-borders="true">
    		<template v-for="item in gridList">
    			<grid-item @click.native="jumpDetailPage(item)">
				    <span class="grid-center">{{item.title}}</span>
				    <span class="grid-center s-grid-value">{{item.value}}</span>
				  </grid-item>
    		</template>
			</grid>
    </div>
    <div class="g-cell">
    	<group>
	      <cell title="我的教材" is-link>
	        <span class="iconfont grayicon" slot="icon" width="20">&#xe664;</span>
	      </cell>
	      <cell title="我的收藏" is-link>
	        <span class="iconfont grayicon" slot="icon" width="20">&#xe66e;</span>
	      </cell>
	    </group>
	    <group>
	      <cell title="帮助与反馈" is-link>
	        <span class="iconfont grayicon" slot="icon" width="20">&#xe60b;</span>
	      </cell>
	      <cell title="设置" is-link>
	        <span class="iconfont grayicon" slot="icon" width="20">&#xe651;</span>
	      </cell>
	    </group>
    </div>
  </div>
</template>

<script>
import backgroundImg from '../../../static/image/bg_img.png' 
import titleImg from '../../../static/image/head_logo.jpg' 
import { Grid, GridItem, Group, Cell } from 'vux'
export default {
	components: {
    Grid, GridItem, Group, Cell
  },
	data () {
		return {
			headerObj: { //头部信息
				bgImg: backgroundImg, //背景图片
				tlLogo: titleImg, //头像
				name: 'Shinphy',
				telphone: '18537072262'
			},
			gridList: [
				{
					id: 1,
					title: '钱包',
					value: '10000.00'
				},{
					id: 2,
					title: '订单',
					value: '1'
				},{
					id: 3,
					title: '优惠券',
					value: '2'
				}
			]
		}
	},
	mounted (){
    let self = this;
  },
	methods: {
		jumpDetailPage (item) {
			let self = this;
			if(item.id == 2){
				self.$router.go('/myIndentCenter')
			}
			console.log(item)
		},
	},
	filters: {
		hidePartPhone: (value) => { //格式化state字段
		  let sub = value.substr(3, 4);
		  let rep = value.replace(sub, "****")
		  return rep
		}
	}
}
</script>

<style scoped>
	.g-header {
		position: relative;
	}
	.h-bg-img {
		display: block;
		width: 100%;
	}
	.h-title-box{
		position: absolute;
		top:10%;
		left:37.5%;
		width:25%;
		text-align: center;
	}
	.h-title-box .h-bg-img {
		border-radius: 50%;
		margin-bottom: .5rem;
	}
	.h-title-box span {
		display: block;
		height: 1.5rem;
		color: #fff;
	}
	.grid-center{
		display: block;
		text-align: center;
		font-size: 14px;
		color: #999;
		height:1.5rem;
		line-height: 1.5rem;
	}
	.s-grid-value {
		color: #000;
	}
	.grayicon{
		display:block;
		margin-right:1rem;
	}
</style>
