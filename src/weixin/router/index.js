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
          component: topicList,
          meta: {
            pageTitle: '招办问答首页'
          }
          // meta: {
          //   keepAlive: true // 需要被缓存
          // }
        },
        {
          path: '/topicDetail/:topicId',
          component: topicDetail,
          meta: {
            pageTitle: '坐席详情'
          }
        },
        {
          path: '/commentsList',
          component: commentsList,
          meta: {
            pageTitle: '评论列表'
          }
        },
        {
          path: '/topicCreate',
          component: topicCreate,
          meta: {
            pageTitle: '创建话题'
          }
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      meta: {
        pageTitle: '登录'
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        pageTitle: '注册'
      }
    },
    {
      path: '/forgetpwd',
      component: ForgetPwd,
      meta: {
        pageTitle: '忘记密码'
      }
    },
    {
      path: '/updatepwd',
      component: Updatepwd,
      meta: {
        pageTitle: '修改密码'
      }
    },
    {
      path: '/userinfo',
      component: Userinfo,
      meta: {
        pageTitle: '个人信息'
      }
    }
  ]
})
