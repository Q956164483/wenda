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
        <span class="yanzhengBtn" @click="getCode">获取验证码</span>
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
import {Indicator, Toast} from 'mint-ui'

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
      isSend: false,
      count: 120,
      error: '错误提示'
      // nameCorrect: true,
      // passCorrect: true,
      // isShowOther: false,
      // isShowMain: false
    }
  },
  methods: {
    countdown() {
      let that = this
      this.isSend = true
      let counting = setInterval(function() {
        that.count--
        if (that.count <= 0) {
          that.isSend = false
          clearInterval(counting)
          that.count = 120
        }
      }, 1000)
    },
    getCode() {
      if (this.isSend === true) {
        return
      }
      let state = this.$store.state
      let that = this
      let accountType = 1
      // 加个不可点击
      if (this.username === '') {
        this.error = '手机号或邮箱不能为空'
        this.isSubmit = true
        return
      }
      this.countdown()
      if (this.username.indexOf('@') !== -1) {
        accountType = 2
      }
      console.log(accountType)
      if (accountType === 1) {
        let url = state.host + state.baseUrl + '/common/sendMobileValidCode?mobile=' + that.username + '&codeType=101'
        this.$http.get(url).then((res) => {
          console.log(res.body)
        })
        // let url = 'http://slwsfs.imwork.net/weixin/api/common/sendMobileValidCode'
        // console.log({mobile: that.username, codeType: 100})
        // this.$http.post(url, {mobile: that.username, codeType: 100}).then((res) => {
        //   console.log(res.body)
        // })
      } else if (accountType === 2) {
        let url = state.host + state.baseUrl + '/common/sendEmailValidCode?email=' + that.username + '&codeType=101'
        this.$http.get(url).then((res) => {
          console.log(res.body)
        })
        // let url = state.host + state.baseUrl + '/common/sendEmailValidCode'
        // this.$http.post(url, {email: that.username, codeType: 100}).then((res) => {
        //   console.log(res.body)
        // })
      }
    },
    retrieve() {
      let state = this.$store.state
      let that = this
      let accountType = 1
      // 前端判断用户名密码
      if (this.username === '') {
        this.error = '账号不能为空'
        this.isSubmit = true
      } else if (this.yanzheng === '') {
        this.error = '验证码不能为空'
        this.isSubmit = true
      } else if (this.password === '' || this.password2 === '') {
        this.error = '密码不能为空'
        this.isSubmit = true
      } else if (this.password !== this.password2) {
        this.error = '两次密码不一致'
        this.isSubmit = true
      } else {
        this.isSubmit = false
      }
      if (this.isSubmit === true) {
        return
      }
      if (this.username.indexOf('@') !== -1) {
        accountType = 2
      }
      Indicator.open({
        text: 'loading...',
        spinnerType: 'snake'
      })
      let url = state.host + state.baseUrl + '/user/resetPassword?account=' + that.username + '&validCode=' + that.yanzheng + '&password=' + that.password + '&accountType=' + accountType
      this.$http.get(url).then((res) => {
        let data = res.body
        Indicator.close()
        if (data.code === '000000') {
          this.$router.push('/login')
        } else {
          Toast({
            message: data.message,
            position: 'middle',
            duration: 5000
          })
        }
        console.log(res.body)
      })
      // this.$http.post(url, {account: that.username, validCode: that.yanzheng, password: that.password, accountType: that.accountType}).then((res) => {
      //   Indicator.open({
      //     text: 'loading...',
      //     spinnerType: 'snake'
      //   })
      //   console.log(res.body)
      // })
      // 根据反馈改nameCorrect，passCorrect

      // close loading，最后isSubmit显示；跳转注册后页面 || 留在当前
    }
  }
}
</script>

<style src="../css/register.scss" lang="scss" scoped></style>
