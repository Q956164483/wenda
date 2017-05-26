import Vue from 'vue'
import VueResource from 'vue-resource'
import ajax from './utils/ajax'
import App from './views/App.vue'
import router from './router'
import store from './vuex/store'
import 'mint-ui/lib/style.css'
import './css/animate.scss'
import {remChange, setDPR} from './utils/remChange'

setDPR()
remChange()
Vue.use(VueResource)
Vue.use(ajax)

router.beforeEach(function (to, from, next) {
  store.commit('SET_ISLOADING', true)
  console.log(to.meta.pageTitle)
  document.title = to.meta.pageTitle ? to.meta.pageTitle : '招办问答'
  // if (to.meta.pageTitle !== undefined) document.title = to.meta.pageTitle
  next()
})
router.afterEach(function (to) {
  store.commit('SET_ISLOADING', false)
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

