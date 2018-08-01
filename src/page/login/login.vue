<template>
  <div class="main">
  	<div class="g-logo-box">
  		<img :src="imgUrl" alt="">
  		<div class="h-title-box">
  			<span class="iconfont i-left" @click="closePage()">&#xe606;</span>
  			<span class="i-right" @click="jumpRegisterPage()">注册</span>
  		</div>
  	</div>
  	<div class="g-from-box">
			<template v-if="isTelPhoneShow">
				<group>
					<x-input
		      	class="h-ipt-sty"
		      	:show-clear="false"
		      	type="tel"
		      	is-type="china-mobile"
		      	placeholder="请输入手机号"
		      	v-model="telCallObj.telPhone">
		        <button slot="right" class="i-send-code">发送验证码</button>
		      </x-input>
		    </group>
		    <group>
		      <x-input
		      	class="h-ipt-sty h-code-sty"
		      	type="number"
		      	:max="4"
		      	placeholder="请输入验证码"
		      	v-model="telCallObj.telCode">
		      </x-input>
		    </group>
			</template>
		  <template v-else>
		  	<group>
		      <x-input
		      	class="h-ipt-sty h-code-sty"
		      	placeholder="请输入手机号"
		      	v-model="accountObj.account">
		      </x-input>
		    </group>
		    <group>
		      <x-input
		      	class="h-ipt-sty h-code-sty"
		      	placeholder="请输入密码"
		      	v-model="accountObj.password">
		      </x-input>
		    </group>
		  </template>
	    <x-button class="h-btn-sure" type="warn" @click.native="btnSure">确定</x-button>
	    <div class="h-jump-box">
	    	<template v-if="isTelPhoneShow">
	    		<span class="lf i-account-enter" @click="accountEnter">{{telCallObj.telFooter}}</span>
	    	</template>
	    	<template v-else>
	    		<span class="lf i-account-enter" @click="accountEnter">{{accountObj.accFooter}}</span>
	    	</template>
	    	<span class="rf i-find-pass" @click="findPassword">找回密码</span>
	    </div>
  	</div>
  </div>
</template>

<script>
import { Group, XInput, XButton } from 'vux'
export default {
	components: {
    Group, XInput, XButton
  },
	data () {
		return {
			isTelPhoneShow: false,
			imgUrl: 'static/image/note_logo.png', //图片路径
			telCallObj: {
				telPhone: '', //手机号码
				telCode: '', //验证码
				telFooter: '账号密码登录'
			},
			accountObj: {
				account: '', //账号
				password: '', //密码
				accFooter: '短信验证登录'
			}
		}
	},
	methods: {
		closePage () { //关闭按钮
			console.log("这是个关闭按钮")
		},
		jumpRegisterPage () { //注册按钮
			let self = this;
			self.$router.push({
				path:'/registerStatus/register'
			})
			console.log("这是个注册按钮")
		},
		accountEnter () { //账号密码登录
			let self = this;
			self.isTelPhoneShow = !self.isTelPhoneShow
			console.log("这是个账号密码登录按钮")
		},
		findPassword () { //找回密码
			let self = this;
			self.$router.push({
				path:'/registerStatus/forgetPass'
			})
			console.log("这是个找回密码按钮")
		},
		btnSure () { //确定登录
			let self = this;
			if (self.isTelPhoneShow) {
				console.log("这是个手机号确定登录按钮")
			} else {
				console.log("这是个账号密码确定登录按钮")
			}
		}
	}
}
</script>

<style scoped>
	.g-logo-box{
		position: relative;
	}
	.g-logo-box img{
		display: block;
		width:100%;
	}
	.g-logo-box .h-title-box{
		position: absolute;
		top: 0;
		left: 0;
		width:100%;
		text-align: center;
		padding:10px 15px;
		box-sizing: border-box;
	}
	.g-logo-box .h-title-box .i-left{
		float: left;
		font-size: 20px;
		width: 2rem;
    height: 2rem;
    line-height: 2rem;
	}
	.g-logo-box .h-title-box .i-right{
		float: right;
		color: #fff;
		width: 3rem;
    height: 2rem;
    line-height: 2rem;
	}
	.g-from-box{
		width: 85%;
		margin: 0 auto;
		border-radius: .15rem;
		margin-top: 2rem;
	}
	.g-from-box .h-ipt-sty{
		padding: 0;
		padding-left: .5rem;
    font-size: 1rem;
    border-left: 1px solid rgba(217, 217, 217, 0.5);
    box-sizing: border-box;
	}
	.g-from-box .h-code-sty{
		height: 3rem;
		padding-right: .5rem;
		border-right: 1px solid rgba(217, 217, 217, 0.5);
	}
	.g-from-box .h-ipt-sty .i-send-code{
    width: 6.5rem;
    height: 3rem;
    border: 0;
    border-radius: 0 3px 3px 0;
    background: #FF2D4B;
    color: #FFF;
    font-size: 1rem;
	}
	.h-btn-sure{
		margin: 1.5rem 0;
		height:3rem;
		line-height: 3rem;
		background: #FF2D4B;
		color:#fff;
		font-size: 1rem;
	}
	.h-jump-box{
		font-size: 0.8rem;
		color:#333;
	}
</style>
