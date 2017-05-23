import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import topicList from '../views/topicList.vue'
import topicCreate from '../views/topicCreate.vue'
import topicDetail from '../views/topicDetail.vue'
import commentsList from '../views/commentsList.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import ForgetPwd from '../views/forgetPwd.vue'
import Updatepwd from '../views/updatePwd.vue'
import Userinfo from '../views/userinfo.vue'

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
          path: '/commentsList',
          component: commentsList
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
    },
    {
      path: '/forgetpwd',
      component: ForgetPwd
    },
    {
      path: '/updatepwd',
      component: Updatepwd
    },
    {
      path: '/userinfo',
      component: Userinfo
    }
  ]
})
