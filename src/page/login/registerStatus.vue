<template>
  <div class="main g-site">
  	<my-header v-on:backWay="backWay" :headObj="headObj" :rightObj="rightObj"></my-header>
  	<div class="g-from-box container_top">
			<group>
				<x-input
	      	class="h-ipt-sty"
	      	:show-clear="false"
	      	type="tel"
	      	:is-type="chinaMobile"
	      	placeholder="请输入手机号"
	      	v-model="telCallObj.telPhone"
	      	ref="mobile">
	        <button slot="right" class="i-send-code" :class="{'i-send-theme':isCodeShow}" :disabled="!isCodeShow" @click="sendVerCode">发送验证码</button>
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
	    <group class="g-group-top">
				<x-input
		      	class="h-ipt-sty h-code-sty"
		      	:placeholder="telCallObj.pwPlace"
		      	v-model="telCallObj.password">
		      </x-input>
	    </group>
	    <group>
	      <x-input
		      	class="h-ipt-sty h-code-sty"
		      	placeholder="请输入再次密码"
		      	v-model="telCallObj.verifyPassword">
		      </x-input>
	    </group>
	    <span class="h-account-enter">为保证安全，密码需包含数字与字母，长度不少于6位</span>
	    <x-button class="h-btn-sure" type="warn" @click.native="btnSure">确定</x-button>
	    <template v-if="isRegisterShow">
	    	<span class="h-account-enter">点击-确定，即表示您同意<span class="i-specification" @click="specification">《法律声明及隐私政策》</span></span>
	    </template>
  	</div>
  </div>
</template>

<script>
import MyHeader from '../../components/my-header'
import { Group, XInput, XButton } from 'vux'
export default {
	components: {
    MyHeader, Group, XInput, XButton
  },
	data () {
		return {
			status: '',
			isRegisterShow: true,
			isCodeShow: false,
			headObj:{
        title: '注册',
        isBack: true,
      },
      rightObj:{
        isMore: false,
      },
      telPhone:'', //手机号码
      telCallObj: {
				telPhone: '', //手机号码
				telCode: '', //验证码
				password: '', //密码
				verifyPassword: '', //确认密码
				pwPlace: '请输入密码', //密码提示语
			},
		}
	},
	mounted () {
    let self = this;
    self.status = self.$route.params.id;
    if (self.status == 'register') {
    	console.log("这是从注册页面进来的")
			self.isRegisterShow = true;
			self.headObj.title = '注册'
			self.telCallObj.pwPlace = '请输入密码'
    } else if (self.status == 'forgetPass') {
    	console.log("这是从找回密码页面进来的")
    	self.headObj.title = '找回密码'
			self.isRegisterShow = false
			self.telCallObj.pwPlace = '请输入新密码'
    }
    console.log(self.isRegisterShow);
  },
	methods: {
		backWay () {
			let self = this;
			self.$router.push('/')
			console.log("返回")
		},
		btnSure () { //确定按钮
			let self = this;
			if (self.isRegisterShow) {
				console.log("这是个注册确定按钮")
			} else {
				console.log("这是个忘记密码确定按钮")
			}
		},
		specification () {
			let self = this;
			self.$vux.toast.text('法律声明及隐私政策功能暂未开发')
			console.log("这是法律说明书文档")
		},
		chinaMobile (val) {
			let self = this;
			let reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
			if (reg.test(val)) {
				self.isCodeShow = true
				return {
	        valid: true
	      }
			} else {
				self.isCodeShow = false
				return {
	        valid: false,
	        msg: '请输入正确的手机号码'
	      }
			}
		},
		sendVerCode () {
			this.isCodeShow = false
			console.log(12313132131321)
		},
	}
}
</script>

<style scoped>
	.g-from-box{
		width: 85%;
		margin: 0 auto;
		border-radius: .15rem;
		margin-top: 46px;
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
    background: #CCC;
    color: #FFF;
    font-size: 1rem;
	}
	.g-from-box .h-ipt-sty .i-send-theme{
		background: #FF2D4B;
	}
	.g-from-box .h-account-enter{
		display: block;
		margin: .5rem 0;
		font-size: .6rem;
		color: #999;
	}
	.h-btn-sure{
		margin: 1.5rem 0 .8rem;
		height:3rem;
		line-height: 3rem;
		background: #FF2D4B;
		color:#fff;
		font-size: 1rem;
	}
	.i-specification{
		color: #FF2D4B;
	}
</style>
