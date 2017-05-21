<template>
  <div class="register">
    <path-nav :current="'注册账号'">
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
        <input type="password" placeholder="请输入您的账号密码" v-model="password">
      </div>
      <div class="box">
        <input type="password" placeholder="请再次输入您的账号密码" v-model="password2">
      </div>
      <div class="error" v-show="isSubmit">{{error}}</div>
      <!-- 注册按钮 -->
      <a href="javascript:void(0);" class="regBtn" @click="register">注&nbsp;&nbsp;册</a>
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
    register() {
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

<style scoped lang="scss">
@import '../css/color.scss';
@import '../css/mixins.scss';

  .register {
    .logo {
      text-align: center;
      img.logo {
        width: 3.6rem;
        height: 3.6rem;
        margin-top: 1.7rem;
      }
    }
    //input部分
  .form {
    padding: 1rem 0 0;
    input {
      width: 100%;
      height:0.82rem;
      line-height:0.82rem;
      padding-left: 0.28rem;
      font-size: 0.3rem;

      &.yanzheng {
        width: auto;
        border: none;
      }
    }
    .yanzhengBtn {
      @include btn(2.1rem, 0.6rem, 0.28rem, 4px);
      margin:0.12rem 0.3rem 0 0.3rem;
      color: #fff;
      background-color: $theme-color;
    }
    .error {
      line-height: 0.6rem;
      padding-left: 0.3rem;
      background-color: $error-bg;
      color:$error-red;
      font-size: 0.26rem;
    }
    .regBtn {
      @include btn(pxToRem(500),pxToRem(80),0.36rem,pxToRem(80));
      display: block;
      position: absolute;
      bottom: 0.7rem;
      left: 50%;
      transform: translateX(-50%);

      &:hover {
        color: #fff;
        background-color: $theme-color;
      }
    }
   }
   .box {
    border-bottom: 1px solid $border-color;
    &:first-child {
      border-top: 1px solid $border-color;
    }
   }
  }
</style>
