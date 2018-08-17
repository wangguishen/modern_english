<template>
  <div id='home'>
  	<home-header></home-header>
  	<home-center></home-center>
  	<home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './component/HomeHeader'
import HomeCenter from './component/HomeCenter'
import HomeFooter from './component/HomeFooter'
export default {
  name: 'Home',
  data (){
  	return {

  	}
  },
  components:{
  	HomeHeader,
  	HomeCenter,
  	HomeFooter
  }
}
</script>

<style lang='less' scoped>
	#home{
		background: #a2918e26;
	}
</style>
