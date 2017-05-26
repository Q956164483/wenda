<template>
  <div class="login">
    <path-nav :current="'登录'">
      <a href="javascript:void(0);" @click="$router.push('/')">首页</a>
      &gt;  
      <a href="javascript:void(0);" @click="$router.push('/userinfo')">个人信息</a>
      &gt;
    </path-nav>
    <div class="logo">
      <img :src="logoSrc" class="logo">
    </div>
    <div class="form">
      <div class="user clear">
        <input type="text" placeholder="请输入您的账号、手机号或邮箱号" v-model="username"  autocomplete="off" class="fl">
        <div v-show="isSubmit" class="warn fr">
          <span class="correct" v-if="nameCorrect">账号输入正确</span>
          <span class="error" v-else>账号输入有误</span>
        </div>
      </div>
      <div class="password clear">
        <input type="password" placeholder="请输入您的账号密码" v-model="password" autocomplete="off" class="fl">
        <div v-show="isSubmit" class="warn fr">
          <span class="correct" v-if="passCorrect">密码输入正确</span>
          <span class="error" v-else>密码输入有误</span>
        </div>
      </div>
      <div class="otherOpt clear">
        <a href="javascript:void(0);" class="register fl" @click="$router.push('/register')">注册账号</a>
        <a href="javascript:void(0);" class="forgetPwd fr" @click="$router.push('/forgetpwd')">忘记密码？</a>
      </div>
      <!-- 登录按钮 -->
      <a href="javascript:void(0);" class="loginBtn" @click="login">登&nbsp;&nbsp;录</a>

      <div class="otherLogin" @click="openOther">
        <img :src="iconArrow" class="arrow-up">
        <div class="text">其他账号登录</div>
      </div>
    </div>
    <!-- 其他登录 -->
    <div class="otherWrap" v-show="isShowOther">
      <div class="otherBg" @click="closeMain"></div>
      <transition name="slide">
        <div class="otherContent" v-show="isShowMain">
          <i class="comicon-28"></i>
          <div class="text">其他账号登录</div>
          <div class="main clear">
            <div class="weixin fl">
              <img :src="iconWeixin" class="icon-weixin" @click="loginWeixin">
              <p>微信</p>
            </div>
            <div class="qq fr">
              <img :src="iconQQ" class="icon-qq" @click="loginQQ">
              <p>QQ</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script type="text/javascript">
import pathNav from '../components/path.vue'
import {Indicator, Toast} from 'mint-ui'

export default {
  components: {
    pathNav
  },
  data() {
    return {
      logoSrc: require('../img/logo.png'),
      iconArrow: require('../img/arrow-up.png'),
      iconWeixin: require('../img/weixin.png'),
      iconQQ: require('../img/qq.png'),
      username: '',
      password: '',
      isSubmit: false,
      nameCorrect: true,
      passCorrect: true,
      isShowOther: false,
      isShowMain: false
    }
  },
  methods: {
    openOther() {
      this.isShowOther = true
      this.isShowMain = true
    },
    closeMain() {
      this.isShowMain = false
      // 外层延迟一点关闭，否则看不到leave动画
      setTimeout(this.closeOther, 200)
    },
    closeOther() {
      this.isShowOther = false
    },
    login() {
      let state = this.$store.state
      // 前端判断用户名密码
      if (this.username === '') {
        this.error = '账号不能为空'
        this.nameCorrect = false
        this.isSubmit = true
      } else {
        this.nameCorrect = true
        this.isSubmit = false
      }
      if (this.password === '') {
        this.error = '密码不能为空'
        this.passCorrect = false
        this.isSubmit = true
      } else {
        this.passCorrect = true
        this.isSubmit = false
      }
      if (this.isSubmit === true) {
        return
      }
      Indicator.open({
        text: 'loading...',
        spinnerType: 'snake'
      })
      let that = this
      let url = state.host + state.baseUrl + '/user/login?account=' + that.username + '&password=' + that.password
      this.$http.get(url).then((res) => {
        let data = res.body
        Indicator.close()
        if (data.code === '000000') {
          this.$store.commit('SET_USERID', data.data.id)
          this.$store.commit('SET_NICKNAME', data.data.nickName)
          this.$store.commit('SET_SCODE', data.data.sCode)
          this.$store.commit('SET_ISLOGIN', true)
          this.$router.push('/userinfo')
        } else {
          Toast({
            message: data.message,
            position: 'middle',
            duration: 5000
          })
        }
      })
      // this.$http.post(url, {account: that.username, password: that.password}).then((res) => {
      //   Indicator.open({
      //     text: 'loading...',
      //     spinnerType: 'snake'
      //   })
      //   console.log(res.body)
      // })
      // 根据反馈改nameCorrect，passCorrect

      // close loading，最后isSubmit显示；跳转注册后页面 || 留在当前
    },
    loginWeixin() {
      // 授权
    },
    loginQQ() {
      // 第三方sdk
    }
  }
}
</script>

<style src="../css/login.scss" lang="scss" scoped></style>

