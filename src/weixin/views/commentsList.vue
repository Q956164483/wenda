<template>
    <div class="box box-ver">
        <nav-path :current="'XXX坐席'">
            <a href="javascript:;" @click="$router.push('./')">XX大学</a>
            &gt;
        </nav-path> 
        <div class="comments box box-ver box-fh">
            <div class="box">
                <div class="box-f1"></div>
                <div @click="$router.go(-1)" class="back-topic box box-ac box-pc">进入原话题</div>
            </div>
            <div class="box box-ver item question">
                <div class="box box-ac">
                    <div class="icon-user"></div>
                    <div class="box box-ver box-f1">
                        <div class="nickname box">
                            <div>XXX</div>
                        </div>
                    </div>
                    <div class="box box-ac">
                        <div class="icon-comment"></div>
                        <div class="num">6</div>
                    </div>
                    <div class="box box-ac">
                        <div class="icon-zan"></div>
                        <div class="num">6</div>
                    </div>
                </div>
                <div class="txt">您好！我想了解一下具有什么样的知识水平可以报名？</div>
            </div>
            <div class="box order box-ac">
                <div class="box-f1"></div>
                <div class="box box-ac">
                    <div class="icon-order"></div>
                    <div >排序</div>
                </div>
            </div>
            <div v-if="comments.length > 0" class="box box-ver comments-list">
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
                            <div class="box box-ac">
                                <div class="icon-zan"></div>
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
                    <div class="icon-sure"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { Toast } from 'mint-ui'
export default {
  components: {
    'nav-path': require('../components/path.vue')
  },
  data () {
    return {
      showDesc: true,
      showCommentFlag: false,
      comments: [1],
      commentWord: ''
    }
  },
  methods: {
    showComment () {
      this.showCommentFlag = true
    }
    // getComments () {
    //   var self = this
    //   var state = self.$store.state
    //   var url = state.host + state.baseUrl + '/questionAnswer/findQuestionAnswerList?topicId=' + topicId + '&userId=' + state.userId + '&curPage=' + self.curPage + '&pageSize=5'
    //   self.$http.get(url)
    //     .then(res => {
    //       var data = res.data.data
    //       if (!data || data.length === 0) {
    //         Toast({
    //           message: '暂无评论',
    //           duration: 5000
    //         })
    //       } else {
    //         console.log('回复列表>>>>', data)
    //         self.comments = data
    //       }
    //     }, err => {
    //       console.log('请求出错了>>>>', err)
    //     })
    // }
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
    .comments{
      position:fixed;
      top:1.81rem !important;
      z-index:20;
    }
    .ell-3{
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .back-topic{
        margin-top:.2rem;
        width:2rem;
        height:.5rem;
        color:$theme-color;
        border:.01rem dashed $theme-color;
        margin-right:.4rem;
        border-radius:.1rem;
    }
    .comments-list{
        .desc-total{
            font-size:.28rem;
            margin-top:.2rem;
        }
    }
    .comments-item{
        //background-color:#f9f9f9;
        color:#666;
        margin-top:.1rem;
    }
    
    .item{
        padding:.2rem;
        margin-left:.2rem;
        margin-right:.2rem;
        border-top:.01rem dashed $border-color;
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
        .icon-comment,.icon-zan{
            margin-left:.15rem;
            margin-right:.1rem;
            width:.34rem;
            height:.34rem;
            @include bg-size(cover);
        }
        .icon-comment{
            @include bg-image('../img/icon-comment');
        }
    }
    .question{
      border:none;
      border-bottom:.01rem solid $border-color;
      padding-left:.4rem;
      padding-right:.4rem;
      padding-top:0;
      margin:0;
    }
    .order{
        color:#666;
        height:.70rem;
        padding-right:.4rem;
    }
    .icon-order{
        width:.48rem;
        height:.48rem;
        margin-right:.2rem;
        @include bg-size(cover);
        @include bg-image('../img/icon-order');
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
    
    .icon-arrow-bot{
        margin: .1rem auto;
        width: .30rem;
        height: .16rem;
        @include bg-image('../img/icon-arrow-bot');
    }
    .icon-zan{
        @include bg-image('../img/icon-zan');
    }
</style>
