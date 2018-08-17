<template>
	<div>
    <div class='g-year' v-if="moduleShow">
      <span class="s-title-label">{{screen.title}}</span>
      <span class="s-content-label">
        <flexbox wrap="wrap" :gutter="0">
          <template v-for="item of screen.data">
            <flexbox-item :span="1/4">
              <div class="t-flex-btn" :class="{'normBgRedColor': item.IsChecked}" @click="selectChange(item)">{{item.name}}</div>
            </flexbox-item>
          </template>
        </flexbox>
      </span>
    </div>
    <div class="g-state" v-else>
      <flexbox wrap="wrap" :gutter="0">
        <template v-for="item of screen.data">
          <flexbox-item :span="1/5">
            <div class="t-flex-btn" :class="{'normBgRedColor': item.IsChecked}" @click="selectChange(item)">{{item.name}}</div>
          </flexbox-item>
        </template>
      </flexbox>
    </div>
	</div>
</template>
<script>
import { Flexbox, FlexboxItem} from 'vux'
export default {
  components: {
    Flexbox, FlexboxItem
  },
  props:{
    screen: Object,
    moduleShow: Boolean,
  },
  data(){
    return {
    }
  },
  mounted (){
    let self = this;
  },
  methods: {
    backWay (){
      let self = this;
      if(self.headObj.isBack){
        self.$emit('backWay','点击返回')
      }
    },
    finish(){
      let self = this;
      if(self.rightObj.isMore){
        self.$emit('finish','点击完成')
      }
    },
    selectChange (item) {
      let self = this;
      item.IsChecked = !item.IsChecked
    }
  },
}
</script>
<style scoped>
.g-year{
  display: flex;
}
.g-state{
  padding: 0 1rem 0;
}
.s-title-label{
  width: 20%;
  text-align: center;
  padding: .2rem 0;
  padding-right: .5rem;
  box-sizing: border-box;
  font-size: .7rem;
  color: #999;
}
.s-content-label{
  width: 80%;
}
.t-flex-btn{
  text-align: center;
  padding: .2rem 0;
  background-color: #eaeaea;
  border-radius: .5rem;
  width:90%;
  margin-bottom: .5rem;
  font-size: .7rem;
}
.normBgRedColor{
  color: #fff;
}
</style>