<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      appid: 68470,
      sign: 'f73d20910c094dd1a5631fd6d3c5e2a5'
    }
  },
  mounted () {
    let self = this;
    // self.testApiGet();
    self.testApiPost();
  },
  methods:{
    increment(){
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    },
    testApiGet () {
      let self = this;
      self.$axios.get('http://route.showapi.com/1502-1', {
        params: {
          showapi_appid: self.appid,
          showapi_sign: self.sign,
          mobile: '18537072262'
        }
      })
      .then((res) => {
        console.log("成功", res)
      })
      .catch((error) => {
        console.log("失败", error)
      })
    },
    testApiPost () {
      let self = this;
      self.$axios({
        url: 'http://route.showapi.com/1502-1',
        method: 'post',
        data: {
          showapi_appid: self.appid,
          showapi_sign: self.sign,
        mobile: '18537072262'
        },
        transformRequest: [function (data) {
          // Do whatever you want to transform the data
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      // self.$axios.post('http://route.showapi.com/1502-1', {
      //   showapi_appid: self.appid,
      //   showapi_sign: self.sign,
      //   mobile: '18537072262'
      // },{
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   }
      // })
      // .then((res) => {
      //   console.log("成功", res)
      // })
      // .catch((error) => {
      //   console.log("失败", error)
      // })
    },
  },
  computed:{
    count(){
      return this.$store.state.count
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
