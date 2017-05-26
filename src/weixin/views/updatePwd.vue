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
import {Indicator, Toast} from 'mint-ui'

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
      error: '错误提示',
      id: this.$store.state.userId
      // 测试用id
      // nameCorrect: true,
      // passCorrect: true,
      // isShowOther: false,
      // isShowMain: false
    }
  },
  methods: {
    update() {
      let state = this.$store.state
      // 前端判断用户名密码
      if (this.password === '' || this.password2 === '' || this.oldPassword === '') {
        this.error = '密码不能为空'
        this.isSubmit = true
      }
      if (this.isSubmit === true) {
        return
      }
      Indicator.open({
        text: 'loading...',
        spinnerType: 'snake'
      })
      let that = this
      let url = state.host + state.baseUrl + '/user/updatePassword?id=' + that.id + '&password=' + that.password + '&oldPassword=' + that.oldPassword
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
