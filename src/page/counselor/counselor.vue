<template>
  <div>
    <coun-header></coun-header>
    <coun-center></coun-center>
  </div>
</template>

<script>
import CounHeader from './components/CounHeader'
import CounCenter from './components/CounCenter'
export default {
  name: 'Counselor',
  data (){
  	return {

  	}
  },
  components:{
    CounHeader,
    CounCenter
  }
}
</script>

<style lang='less' scoped>

</style>
