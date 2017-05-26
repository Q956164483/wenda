<template>
  <div class="userinfo" :class="{notLogined: !isLogined}">
    <path-nav :current="'个人信息'">
    <a href="javascript:void(0);" @click="$router.push('/')">首页</a>
      &gt;  
    </path-nav>
    <div class="main">
      <a v-for="list in lists" class="list clear" :class="list.name" @click="$router.push('/' + list.url)">
        <div class="iconimg fl">
          <img class="icon" :src="list.icon"></i>
        </div>
        <div class="text fl">
          {{list.title}}
          <span class="dot" v-if="list.hasNew"></span>
        </div>
        <img :src="arrow" class="arrow fr">
        <div class="avatar fr" v-if="list.hasImg">
          <img :src="list.imgSrc" >
        </div>
      </a>
    </div>
    <!-- 按钮 -->
    <a href="javascript:void(0);" class="regBtn exit" @click="exit">退出登录</a>
  </div>
</template>

<script>
  import pathNav from '../components/path.vue'
  import { MessageBox } from 'mint-ui'

  export default {
    components: {
      pathNav,
      MessageBox
    },
    data() {
      return {
        isLogined: true,
        isWeixinLogin: false,
        arrow: require('../img/arrow-right.png'),
        lists: [
          {
            title: '用户昵称',
            name: 'username',
            icon: require('../img/user.png'),
            url: 'userdetail',
            hasImg: true,
            imgSrc: ''
          },
          {
            title: '我的消息',
            name: 'msg',
            icon: require('../img/message.png'),
            url: 'mymsg',
            hasNew: true
          },
          {
            title: '已订阅话题',
            name: 'subscribe',
            icon: require('../img/book.png'),
            url: 'mysubscribe'
          },
          {
            title: '我的提问记录',
            name: 'asklist',
            icon: require('../img/record.png'),
            url: 'asklist'
          },
          {
            title: '我的坐席',
            name: 'seat',
            icon: require('../img/seat.png'),
            url: 'myseat'
          },
          {
            title: '我的好友',
            name: 'friend',
            icon: require('../img/friend.png'),
            url: 'friend'
          },
          {
            title: '关于',
            name: 'about',
            icon: require('../img/about.png'),
            url: 'about'
          },
          {
            title: '修改密码',
            name: 'updatepwd',
            icon: require('../img/lock.png'),
            url: 'updatepwd'
          }
        ]
      }
    },
    methods: {
      exit() {
        this.$store.commit('SET_USERID', '')
        this.$store.commit('SET_NICKNAME', '')
        this.$store.commit('SET_SCODE', '')
        this.$store.commit('SET_ISLOGIN', false)
        this.$router.push('/login')
      }
    },
    created() {
      // 加载时获取哪些列表有红点
      this.lists[1].hasNew = true
    }
  }
</script>

<style scoped lang="scss" src="../css/userinfo.scss"></style>
