<template>
    <div v-infinite-scroll="loadMore"
         infinite-scroll-distance="100" 
         class="box box-ver">
        <div class="box box-ac tab">
            <div @click="getSchoolList()" :class="actTabIndex==0?'act':''" class="tab-item box box-f1 box-fh box-ac box-pc">
                <div>高校</div>
                <div class="arrow icon-arrow-bot icon-arrow-top-act"></div>
            </div>
            <div @click="getDepartmentList()" :class="actTabIndex==1?'act':''" class="tab-item box box-f1 box-fh box-ac box-pc">
                <div>院系</div>
                <div class="arrow icon-arrow-bot icon-arrow-top-act"></div>
            </div>
            <div @click="getMajorList()" :class="actTabIndex==2?'act':''" class="tab-item box box-f1 box-fh box-ac box-pc">
                <div>专业</div>
                <div class="arrow icon-arrow-bot icon-arrow-top-act"></div>
            </div>
        </div>
        <div v-if="actTabIndex === 0" @click="actTabIndex = -1" class="tab-list-container">
            <div @click="$event.stopPropagation()" class="tab-list box box-ver">
                <div :class="item.code==$store.state.sCode?'act':''" v-for="(item,index) in schoolList" @click="getTopicList(item.code)" class="list-item box box-ac">{{item.name}}</div>
            </div>
        </div>
        <div v-if="actTabIndex === 1" @click="actTabIndex = -1" class="tab-list-container">
            <div @click="$event.stopPropagation()" class="tab-list box box-ver">
                <div :class="item.id==$store.state.departmentId?'act':''" v-for="(item,index) in departmentList" @click="getTopicList(item.id)" class="list-item box box-ac">{{item.name}}</div>
            </div>
        </div>
        <div v-if="actTabIndex === 2" @click="actTabIndex = -1" class="tab-list-container">
            <div @click="$event.stopPropagation()" class="tab-list box box-ver">
                <div :class="item.id==$store.state.majorId?'act':''" v-for="(item,index) in majorList" @click="getTopicList(item.id)" class="list-item box box-ac">{{item.name}}</div>
            </div>
        </div>
        <div class="box box-ver topic-list">
            <div v-for="item in topicList" @click="goTopicDetail(item)" :style="{'background-image':'url('+$store.state.hostImg + item.imgUrl+')'}"  class="box topic-item box-ver" >
                <div class="create-user box box-ac">
                    <div class="icon-head"></div>
                    <div class="name ellipsis box-f1">{{item.userName}}</div>
                </div>
                <div class="box-f1"></div>
                <div class="box-pc box title tx-c">
                    {{item.title}}
                </div>
                <div class="box box-ac">
                    <div class="create-college box box-ac box-f1 box-fh">
                        <div :style="{'background-image':'url('+$store.state.hostImg + item.schoolLogo+')'}" class="icon-head" ></div>
                        <div class="name ellipsis box-f1">{{item.departmentName}}</div>
                    </div>
                    <div v-text="showStatus(item.status)" class="box box-ac box-pc box-f1 box-fh status">
                    </div>
                    <div class="box box-ac box-f1 box-fh collect">
                        <div class="box-f1"></div>
                        <div class="icon-collect-act"></div>
                        <div class="num">{{item.subscribeNum}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="$store.state.userInfo.isTopicAdmin == 1" @click="checkLogin('./topicCreate')" class="topic-create box box-pc box-ac">
            <div class="icon-create-topic"></div>
            <div class="txt">我要创建话题</div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Vue from 'vue'
import { InfiniteScroll, Toast } from 'mint-ui'
Vue.use(InfiniteScroll)
export default {
  name: 'hello',
  components: {
    'v-header': require('../components/header.vue')
  },
  mounted () {
    this.getTopicList()
  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'GET_SCODE',
      'GET_DEPARTMENTID',
      'GET_MAJORID' // 商家简略信息
    ])
  },
  data () {
    return {
      actTabIndex: -1,
      schoolList: [],
      departmentList: [],
      topicList: [],
      showTabListFlag: false,
      curPage: 1,
      ArrStatus: ['待审核', '进行中...', '此话题已关闭']
    }
  },
  methods: {
    loadMore () {
      this.curPage++
      this.getTopicList()
    },
    checkLogin(router) {
      var self = this
      var state = self.$store.state
      if (!state.isLogin) {
        self.$router.push('./login')
      } else {
        self.$router.push(router)
      }
    },
    goTopicDetail (item) {
      var self = this
      self.checkLogin('./topicDetail?topicId=' + item.id)
    },
    getSchoolList () {
      var self = this
      var state = self.$store.state
      if (self.actTabIndex === 0) {
        self.actTabIndex = -1
        return false
      }
      this.$http.get(state.host + state.baseUrl + '/common/findSchoolList')
        .then(res => {
          console.log(res)
          var data = res.data.data
          if (!data || data.length === 0) {
            console.log('未找到学校')
          } else {
            console.log('suc>>>>', data)
            self.schoolList = data
            self.schoolList.unshift({
              name: '全部',
              code: ''
            })
            self.actTabIndex = 0
          }
        }, err => {
          console.log(err)
        })
    },
    getDepartmentList () {
      var self = this
      var state = self.$store.state
      if (self.actTabIndex === 1) {
        self.actTabIndex = -1
        return false
      }
      if (!self.$store.sCode) {
        Toast({message: '请先选择高校', position: 'top', duration: 1000})
        return false
      }
      this.$http.get(state.host + state.baseUrl + '/common/findDepartmentList?sCode=' + state.sCode)
        .then(res => {
          console.log(res)
          var data = res.data.data
          if (!data || data.length === 0) {
            console.log('未找到院系')
          } else {
            console.log('suc>>>>', data)
            self.departmentList = data
            self.departmentList.unshift({
              name: '全部',
              id: ''
            })
            self.actTabIndex = 1
          }
        }, err => {
          console.log(err)
        })
    },
    getMajorList () {
      var self = this
      var state = self.$store.state
      if (self.actTabIndex === 2) {
        self.actTabIndex = -1
        return false
      }
      if (!self.$store.sCode) {
        Toast({message: '请先选择高校', position: 'top', duration: 1000})
        return false
      }
      if (!self.$store.departmentId) {
        Toast({message: '请先选择院系', position: 'top', duration: 1000})
        return false
      }
      this.$http.get(state.host + state.baseUrl + '/common/findMajorList?departId=' + state.departmentId)
        .then(res => {
          console.log(res)
          var data = res.data.data
          if (!data || data.length === 0) {
            console.log('未找到院系')
          } else {
            console.log('suc>>>>', data)
            // this.CHANGE_SUBCONDATA(state.subConData.concat(res.data.data))
            self.majorList = data
            self.majorList.unshift({
              name: '全部',
              id: ''
            })
            self.actTabIndex = 2
          }
        }, err => {
          console.log(err)
        })
    },
    showStatus (status) {
      return this.ArrStatus[status]
    },
    getTopicList (code) {
      var self = this
      var actTabIndex = self.actTabIndex
      var state = self.$store.state
      self.actTabIndex = -1
      console.log(self.actTabIndex)
      if (actTabIndex === 0) {
        self.$store.commit('SET_SCODE', code)
        self.$store.commit('SET_DEPARTMENTID', '')
        self.$store.commit('SET_MAJORID', '')
      } else if (actTabIndex === 1) {
        self.$store.commit('SET_DEPARTMENTID', code)
        self.$store.commit('SET_MAJORID', code)
      } else if (actTabIndex === 2) {
        self.$store.commit('SET_MAJORID', code)
      }
      var url = state.host + state.baseUrl + '/topic/findTopicList?sCode=' + state.sCode + '&departmentId=' + state.departmentId + '&majorId' + state.majorId + '&curPage=' + self.curPage + '&pageSize=5'
      this.$http({
        method: 'get',
        url: url
      }).then(res => {
        var data = res.data.data.data
        console.log('findTopicList>>>>', res)
        if (!data || data.length === 0) {
        } else {
          if (self.curPage === 1) self.topicList = []
          self.topicList = self.topicList.concat(data)
        }
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../css/color.scss';
    @import '../css/mixins.scss';
    .arrow{
        width: .30rem;
        height: .16rem;
        @include bg-size(cover);
        margin-left:pxToRem(30);
    }
    .icon-arrow-bot{
        @include bg-image('../img/icon-arrow-bot');
    }
    .tab{
        height:.72rem;
        position:fixed !important;
        top:1.11rem;
        width:100%;
        background-color:$theme-bg;
        z-index:10;
        @include border-1px($border-color);
        .tab-item{
            border-right:2px solid $theme-color;
            &:last-child{
                border:0;
            }
            &.act{
                color:$theme-color;
                .icon-arrow-bot{
                    @include bg-image('../img/icon-arrow-top-act');
                }
            }
        }
    }
    .tab-list-container{
        position:fixed;
        z-index:20;
        top:1.85rem; 
        width:100%;
        height:calc(100% - 1.11rem - .74rem);
        background-color:rgba(0,0,0,.3);
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        .tab-list{
            padding-left:.1rem;
            padding-right:.1rem;
            background-color:#FFF;
            .list-item{
                &.act{
                    color:$theme-color;
                }
                height:.7rem;
                padding-left:.27rem;
                padding-right:.27rem;
                border-bottom:.01rem solid $border-color;
                color:#666;
            }
        }
    }
    .topic-list{
        margin-top:1.84rem;
        // padding-bottom:1.1rem;
        height:100%;
        overflow-y:scroll;
    }
    .topic-item{
        margin:.1rem .2rem;
        padding:.2rem;
        height:4.8rem;
        background-color: #EEE;
        color:#FFF;
        @include bg-size(cover); 
        .title{
            font-size:.36rem;
            line-height:.5rem;
            padding-bottom:.2rem;
        }
        .create-college,.create-user{
            .icon-head{
                background-color:#ddd;
                width:.54rem;
                height:.54rem;
                border:.01rem solid #ddd;
                border-radius:50%;
            }
            .name{
                margin-left:.2rem;
                font-size:.26rem;
            }
            &.create-college .icon-head{
                border:none;
                width:.70rem;
                height:.70rem;
            }
            &.create-college .name{
                font-size:.3rem;
            }
            
        }
        .collect{
            .icon-collect-act{
                @include bg-image('../img/icon-collect-act');
                @include bg-size(cover);
                width:.34rem;
                height:.32rem;
            }
            .num{
                margin-left:.2rem;
            }
        }
        
    }
    .topic-create{
        position:fixed;
        bottom:0;
        width:100%;
        height:1rem;
        background-color: #f9f9f9;
        color:$theme-color;
        .txt{
            margin-left:.22rem;
        }
    }
    .icon-create-topic{
        @include bg-image('../img/icon-create-topic');
        @include bg-size(cover);
        width:.48rem;
        height:.48rem;
    }
</style>
