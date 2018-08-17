<template>
  <div>
    课程
  </div>
</template>

<script>
import {text} from '@/util/feishion'
export default {
	data () {
		return {
			num1: 1,
			num2: 2,
			num3: 3,
			num4: 4,
			num5: 5,
		}
	},
	mounted (){
    let self = this;
    console.log("我身上有" + self.num1 + "个亿")
    console.log("我身上有" + self.num2 + "个亿")
    console.log("我身上有" + self.num3 + "个亿")
    console.log("我身上有" + self.num4 + "个亿")
    console.log("我身上有" + self.num5 + "个亿")
  },
  methods: {
		
  }
}
</script>

<style scoped>
</style>
