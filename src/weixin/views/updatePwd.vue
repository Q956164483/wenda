<template>
  <div class="register update">
    <path-nav :current="'修改密码'">
      <a href="javascript:void(0);" @click="$router.push('/')">首页</a>
      &gt;  
      <a href="javascript:void(0);" @click="$router.push('/userinfo')">个人信息</a>
      &gt;
    </path-nav>
    <div class="form">
      <div class="box">
        <input type="password" placeholder="请输入旧密码" v-model="oldPassword">
      </div>
      <div class="box">
        <input type="password" placeholder="请输入新密码" v-model="password">
      </div>
      <div class="box">
        <input type="password" placeholder="请再次输入新密码" v-model="password2">
      </div>
      <div class="error" v-show="isSubmit">{{error}}</div>
      <!-- 修改密码 -->
      <a href="javascript:void(0);" class="regBtn update" @click="update">确&nbsp;&nbsp;定</a>
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
      oldPassword: '',
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
    update() {
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
<style scoped lang="scss">
  .update {
    .form {
      padding: 0;
      .box:first-child {
        border-top: none;
      }
      a.update {
        top: 4.86rem;
      }
    }
  }
</style>
