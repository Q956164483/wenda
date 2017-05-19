<template>
  <div class="login">
    <path-nav :current="'登录'">
      <a href="javascript:void(0);" @click="$router.push('/userinfo')">个人信息</a>
      &gt;
    </path-nav>
    <div class="logo">
      <img :src="logoSrc" class="logo">
    </div>
    <div class="form">
      <div class="user">
        <input type="text" placeholder="请输入您的账号、手机号或邮箱号" v-model="username"  autocomplete="off">
        <div v-show="isSubmit">
          <span class="correct" v-if="nameCorrect">账号输入正确</span>
          <span class="error" v-else>账号输入有误</span>
        </div>
      </div>
      <div class="password">
        <input type="password" placeholder="请输入您的账号密码" v-model="password" autocomplete="off">
        <div v-show="isSubmit">
          <span class="correct" v-if="passCorrect">密码输入正确</span>
          <span class="error" v-else>密码输入有误</span>
        </div>
      </div>
      <div class="other clear">
        <a href="javascript:void(0);" class="register" @click="$router.push('/register')">注册账号</a>
        <a href="javascript:void(0);" class="forgetPwd" @click="$router.push('/forgetPwd')">忘记密码？</a>
      </div>
      <a href="javascript:void(0);" class="loginBtn">登&nbsp;&nbsp;录</a>
    </div>
  </div>
</template>

<script type="text/javascript">
import pathNav from '../components/path.vue'
import '../css/login.scss'

export default {
  components: {
    pathNav
  },
  data() {
    return {
      logoSrc: require('../img/logo.png'),
      username: '',
      password: '',
      isSubmit: false,
      nameCorrect: true,
      passCorrect: true
    }
  }
}
</script>
