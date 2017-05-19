import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }
    // ,
    // {
    //   path: '/userinfo',
    //   component: Userinfo
    // },
    // {
    //   path: '/register',
    //   component: Register
    // },
    // {
    //   path: '/forgetPwd',
    //   component: ForgetPwd
    // }
  ]
})
