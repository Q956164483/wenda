import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './vuex/store'
import 'mint-ui/lib/style.css'
import { setDPR, remChange } from './utils/remChange'
// 可以在页面单个组件引入
// import MintUI from 'mint-ui'
// Vue.use(MintUI)

setDPR()
remChange()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

