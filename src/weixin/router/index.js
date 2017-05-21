import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import topicList from '../views/topicList.vue'
import topicCreate from '../views/topicCreate.vue'
import topicDetail from '../views/topicDetail.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: topicList
        },
        {
          path: '/topicDetail',
          component: topicDetail
        },
        {
          path: '/topicCreate',
          component: topicCreate
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
    // ,
    // {
    //   path: '/userinfo',
    //   component: Userinfo
    // },
    // {
    //   path: '/forgetPwd',
    //   component: ForgetPwd
    // }
  ]
})
