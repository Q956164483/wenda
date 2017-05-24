<template>
  <div class="register">
    <path-nav :current="'忘记密码'">
      <a href="javascript:void(0);" @click="$router.push('/')">首页</a>
      &gt;  
      <a href="javascript:void(0);" @click="$router.push('/userinfo')">个人信息</a>
      &gt;
    </path-nav>
    <div class="logo">
      <img :src="logoSrc" class="logo">
    </div>
    <div class="form">
      <div class="box">
        <input type="text" placeholder="请输入您的手机号或邮箱号" v-model="username">
      </div>
      <div class="box">
        <input type="text" placeholder="请输入您的验证码" v-model="yanzheng" class="box box-f1 yanzheng">
        <span class="yanzhengBtn">获取验证码</span>
      </div>
      <div class="box">
        <input type="password" placeholder="请输入您的新密码" v-model="password">
      </div>
      <div class="box">
        <input type="password" placeholder="请再次输入您的新密码" v-model="password2">
      </div>
      <div class="error" v-show="isSubmit">{{error}}</div>
      <!-- 找回密码 -->
      <a href="javascript:void(0);" class="regBtn retrieve" @click="retrieve">确&nbsp;&nbsp;定</a>
    </div>
  </div>
</template>

<script>
import pathNav from '../components/path.vue'
import {Indicator} from 'mint-ui'

export default {
  components: {
    pathNav
  },
  data() {
    return {
      logoSrc: require('../img/logo.png'),
      username: '',
      yanzheng: '',
      password: '',
      password2: '',
      isSubmit: false,
      error: '错误提示'
      // nameCorrect: true,
      // passCorrect: true,
      // isShowOther: false,
      // isShowMain: false
    }
  },
  methods: {
    retrieve() {
      // 前端判断用户名密码

      // 传去后台，开启loading
      Indicator.open({
        text: 'loading...',
        spinnerType: 'snake'
      })
      // 根据反馈改nameCorrect，passCorrect

      // close loading，最后isSubmit显示；跳转注册后页面 || 留在当前
    }
  }
}
</script>

<style src="../css/register.scss" lang="scss" scoped></style>
