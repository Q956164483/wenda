<template>
    <div class="box box-ver" >
        <nav-path :current="'XXX坐席'">
            <a href="javascript:;" @click="$router.push('./')">XX大学</a>
            &gt;
        </nav-path>
        <div class="box box-ver topic-detail">
            <div class="box banner topic-item box-ver" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495298744871&di=4e64a4d714992005e68cf647a95de613&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F578855a8e41e1.jpg)" >
                <div class="box box-ac">
                    <div class="create-user box box-ac box-f1">
                        <div class="icon-head"></div>
                        <div class="name ellipsis box-f1">{{topicDetail.userName}}</div>
                    </div>
                    <a class="link" :href="$store.state.hostZS+'?sCode='+topicDetail.sCode">{{topicDetail.schoolName}}招生系统</a>
                </div>
                <div class="box-f1"></div>
                <div class="box-pc box title tx-c">
                    {{topicDetail.title}}
                </div>
                <div class="box box-ac">
                    <div class="box-f1"></div>
                    <div class="box box-ac collect">
                        <div class="box-f1"></div>
                        <div class="icon-collect"></div>
                        <div class="num">订阅</div>
                    </div>
                </div>
            </div>
            <div class="content box box-ver">
                <p :class="showDesc?'ell-3':''" class="topic-desc box">
                    {{topicDetail.content}}
                </p>
                <div @click="showDesc = false" v-if="showDesc"  class="icon-arrow-bot"></div>
                <div class="box">
                    <div class="box-f1 date">2015-05-20</div>
                    <div class="box college">
                        <a :href="'http://www.baidu.com'">院系</a>
                        <a :href="'http://www.baidu.com'">专业</a>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="comments box box-ver">
            <div v-if="comments.length == 0" class="box box-pc box-ac tx-c comments-empty">
                问题征集中,赶快向XXX提问吧
            </div>
            <div v-if="comments.length > 0" class="box box-ver comments-list">
                <div class="tab box box-ac box-pc">
                    <div class="tab-item act box box-f1 box-fh box-ac box-pc">
                        <div class="box-f1"></div>
                        <div class="icon-hot"></div>
                        <div class="txt">热门</div>
                    </div>
                    <div class="tab-item box box-f1 box-fh box-ac box-pc">
                        <div class="icon-new"></div>
                        <div class="txt">最新</div>
                        <div class="box-f1"></div>
                    </div>
                </div>
                <p class="desc-total">共83个提问·<span class="tc-main-act">80</span>个回复</p>
                <div class="comments-item">
                    <div class="box box-ver item">
                        <div class="box box-ac">
                            <div class="icon-user"></div>
                            <div class="box box-ver box-f1">
                                <div class="nickname box">
                                    <div>XXX</div>
                                    <div class="tag">题主</div>
                                    <div class="tag tag-new">news</div>
                                </div>
                                <div class="time">2015-05-06</div>
                            </div>
                            <div @click="showReply()" class="box box-ac">
                                <div class="icon-comment"></div>
                                <div class="num">6</div>
                            </div>
                        </div>
                        <div class="txt">您好！我想了解一下具有什么样的知识水平可以报名？</div>
                    </div>
                    <div class="box box-ver item">
                        <div class="box box-ac">
                            <div class="icon-user box">
                                <div class="vip box box-ac box-pc">V</div>
                            </div>
                            <div class="box box-ver box-f1">
                                <div class="nickname box">
                                    <div>XXX</div>
                                    <div class="tag">题主</div>
                                    <div class="tag tag-new">news</div>
                                </div>
                                <div class="time">2015-05-06</div>
                            </div>
                            <div class="box box-ac">
                                <div class="icon-zan"></div>
                                <div class="num">6</div>
                            </div>
                        </div>
                        <div class="txt">您好！我想了解一下具有什么样的知识水平可以报名？</div>
                    </div>
                </div>
            </div>
        </div>
        <div @click="showCommentFlag = false" v-if="showCommentFlag" class="comment-input-bg box box-fh box-ver">
            <div class="box-f1"></div>
            <div @click="$event.stopPropagation()" class="comment-area box box-ver">
                <div class="comment-input box box-ver">
                    <textarea v-model="commentWord" class="box box-f1" maxlength="140" placeholder="新颖、大胆、专业、有趣的问题，更有机会获得回复 哦!赶快提问吧！"></textarea>
                    <div class="box">
                        <div class="box-f1"></div>
                        <div class="tips"><span v-text="commentWord.length"></span>/140</div>
                    </div>
                </div>
                <div class="box">
                    <div @click="showCommentFlag = false" class="icon-close"></div>
                    <div class="box-f1"></div>
                    <div @click="saveQAdata()" class="icon-sure"></div>
                </div>
            </div>
        </div>
        <div class="foot-bar box box-fh box-ac">
            <div class="box box-f1 box-fh box-ac box-pc foot-item">
                <div class="icon-share"></div>
                <div class="txt">分享</div>
            </div>
            <div @click="showComment()" class="box box-f1 box-fh box-ac box-pc foot-item">
                <div class="icon-ask"></div>
                <div class="txt">我要提问</div>
            </div>
            <div class="box box-f1 box-fh box-ac box-pc foot-item">
                <div class="icon-zan"></div>
                <div class="txt">2633</div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  components: {
    'nav-path': require('../components/path.vue')
  },
  data () {
    return {
      showDesc: true,
      showCommentFlag: false,
      comments: [],
      commentWord: '', // 评论内容
      topicDetail: {}, // 话题详情
      curPage: 1,
      topicId: this.$route.query.topicId
    }
  },
  mounted () {
    Toast({
      message: '获取详情错误',
      duration: 500000000
    })
    var self = this
    self.getTopicDetail(self.topicId)
    self.getQuestionAnswerList(self.topicId)
  },
  methods: {
    showComment () {
      this.showCommentFlag = true
    },
    showReply () {
      this.$router.push('./commentsList')
    },
    getTopicDetail (topicId) {
      var self = this
      var state = self.$store.state
      var url = state.host + state.baseUrl + '/topic/getTopicDetail?topicId=' + topicId + '&userId=' + state.userId
      self.$http.get(url)
        .then(res => {
          var data = res.data.data
          if (!data || data.length === 0) {
            console.log('没有详情')
          } else {
            console.log('详情来了>>>>', data)
            self.topicDetail = data
          }
        }, err => {
          Toast({
            message: '获取详情错误',
            duration: 5000
          })
          console.log('请求出错了>>>>', err)
        })
    },
    getQuestionAnswerList (topicId) {
      var self = this
      var state = self.$store.state
      var url = state.host + state.baseUrl + '/questionAnswer/findQuestionAnswerList?topicId=' + topicId + '&userId=' + state.userId + '&curPage=' + self.curPage + '&pageSize=5'
      self.$http.get(url)
        .then(res => {
          var data = res.data.data
          if (!data || data.length === 0) {
            console.log('没有回复')
          } else {
            console.log('回复列表>>>>', data)
            self.comments = data
          }
        }, err => {
          console.log('请求出错了>>>>', err)
        })
    },
    saveQAdata (pid) {
      var self = this
      var state = self.$store.state
      if (self.commentWord.length === 0) {
        console.log('评论太短了')
      }
      console.log(self.topicDetail)
      var url = state.host + state.baseUrl + '/questionAnswer/saveQAdata?topicId=' + self.topicId + '&targetUserId=' + state.userId + '&targetUserNickName=' + state.userName + '&content=' + self.commentWord + '&creatorId=' + self.topicDetail.creatorId + '&creator=' + self.topicDetail.userName
      self.$http.get(url)
      .then(res => {
        var data = res.data
        console.log(res)
        if (data.code !== '000000') {
          Toast({
            message: '评论失败',
            position: 'bottom',
            duration: 3000
          })
        } else {
          Toast({
            message: '评论成功',
            position: 'bottom',
            duration: 3000
          })
        }
      }, err => {
        Toast({
          message: '评论失败',
          position: 'bottom',
          duration: 3000
        })
        console.log('请求出错了>>>>', err)
      })
    }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../css/color.scss';
    @import '../css/mixins.scss';
    .path{
        position:fixed;
        top:1.1rem !important;
        z-index:20;
    }
    .topic-detail{
        padding-top:1.8rem;
        padding-left:.2rem;
        padding-right:.2rem;
        border-bottom:.01rem solid $border-color;  
        .content{
          color:#666;
          padding:.1rem;
          .college{
              a{
                  font-weight:400;
                  line-height:.36rem;
                  display:block;
                  margin-left:.2rem;
                  border-bottom:.01rem solid $theme-color;
              }
          }
        }
    }
    
    .banner{
        margin:.1rem 0;
        padding:.2rem;
        height:4.8rem;
        background-color: #EEE;
        color:#FFF;
        @include bg-size(cover); 
        .create-user{
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
        }
        .link{
            //text-decoration: underline;
            font-size:.32rem;
            font-weight:400;
            line-height:.42rem;
            display:block;
            border-bottom:.01rem solid $theme-color;
        }
        .title{
            font-size:.36rem;
            line-height:.5rem;
            padding-bottom:.2rem;
        }
        .collect{
            .icon-collect,.icon-collect-act{
                @include bg-size(cover);
                width:.34rem;
                height:.32rem;
            }
            .icon-collect{
                @include bg-image('../img/icon-collect');
            }
            .icon-collect-act{
                @include bg-image('../img/icon-collect-act');
            }
            .num{
                margin-left:.2rem;
            }
        }
        
    }
    .ell-3{
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .topic-desc{
        //padding:.1rem;
        font-size:.28rem;
        text-indent: .6rem;
        margin-bottom:.2rem;
    }
    .comments{
        padding:.3rem;
        padding-bottom:1rem;
    }
    .comments-empty{
        height:1.9rem;
        background-color:#f9f9f9;
    }
    .comments-list{
        .desc-total{
            font-size:.28rem;
            margin-top:.2rem;
        }
    }
    .comments-item{
        background-color:#f9f9f9;
        color:#666;
        margin-top:.1rem;
        .item{
            padding:.2rem;
            border-bottom:.01rem dashed #e5e5e5;
            &:last-child{
                border:none
            }
            .icon-user{
                @include bg-size(cover);
                width:.72rem;
                height:.72rem;
                background-color:#ddd;
                border-radius:50%;
                margin-right:.2rem;
                .vip{
                    position:absolute;
                    bottom:0;
                    right:0;
                    font-size:.14rem;
                    background-color:$theme-color;
                    width:.2rem;
                    height:.2rem;
                    border-radius:50%;
                    border:.02rem solid #FFF;
                    color:#FFF;
                }
            }
            .nickname{
                font-size:.26rem;
                .tag{
                    font-size:.22rem;
                    padding-left:.1rem;
                    padding-right:.1rem;
                    border:.02rem solid #ff0000;
                    background-color:#ff0000;
                    color:#FFF;
                    margin-left:.2rem;
                }
                .tag-new{
                    background-color:#FFF;
                    color:#ff0000;
                }
            }
            .time{
                color:#999;
                font-size:.24rem;
            }
            .txt{
                padding-top:.2rem;
                font-size:.24rem;
            }
        }
        .icon-comment,.icon-zan{
            margin-right:.1rem;
            width:.34rem;
            height:.34rem;
            @include bg-size(cover);
        }
        .icon-comment{
            @include bg-image('../img/icon-comment');
        }
    }
    .icon-arrow-bot,.icon-share,.icon-ask,.icon-zan{
        @include bg-size(cover);
        width:.44rem;
        height:.44rem;
    }
    .icon-hot,.icon-hot-act,.icon-new,.icon-new-act{
        width:.58rem;
        height:.38rem;
        @include bg-size(cover);
    }
    .tab-item{
        margin:0 .3rem;
        font-size:.28rem;
        .txt{
            margin-left:.1rem;
        }
    }
    // .icon-hot{
    //     @include bg-image('../img/icon-hot');
    // }
    .icon-new{
        @include bg-image('../img/icon-new');
    }
    .tab-item.act{
        .icon-hot{
            @include bg-image('../img/icon-hot-act');
        }
        // .icon-new{
        //     @include bg-image('../img/icon-new-act');
        // }
        color:$theme-color;
    }
    
    
    .icon-arrow-bot{
        margin: .1rem auto;
        width: .30rem;
        height: .16rem;
        @include bg-image('../img/icon-arrow-bot');
    }
    .icon-share{
        @include bg-image('../img/icon-share');
    }
    .icon-ask{
        @include bg-image('../img/icon-ask');
    }
    .icon-zan{
        @include bg-image('../img/icon-zan');
    }
    .foot-bar{
        position:fixed;
        bottom:0;
        width:100%;
        height:1rem;
        background-color: #f9f9f9;
        .foot-item{
            border-right:.02rem solid #e5e5e5;
            //height:.5rem;
            &:last-child{
                border:none;
            }
        }
        .txt{
            margin-left:.22rem;
        }
    }
    /*评论输入框*/
    .comment-input-bg{
        position:fixed;
        z-index:1100;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background-color: $mask-bg;
        .comment-area{
            background-color:#FFF;
            padding:.3rem;
            padding-top:.1rem;
            .comment-input{
                padding:.2rem;
                border:.01rem solid $border-color;
                border-radius:.2rem;
                textarea{
                  height:1.37rem;
                  font-size:.28rem;
                }
                .tips{
                    color:#686868;
                    font-size:.24rem;
                }
            }
            .icon-close,.icon-sure{
                margin-top:.2rem;
                width:.52rem;
                height:.52rem;
                @include bg-size(cover);
            }
            .icon-close{
                @include bg-image('../img/icon-close');
            }
            .icon-sure{
                @include bg-image('../img/icon-sure');
            }
        }
    }
</style>
