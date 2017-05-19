import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './vuex/store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { setDPR, remChange } from './utils/remChange'

setDPR()
remChange()
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

