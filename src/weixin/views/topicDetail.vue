<template>
    <div class="box box-ver">
        <nav-path :current="'XXX坐席'">
            <a href="javascript:;" @click="$router.push('./')">XX大学</a>
            &gt;
        </nav-path>
        <div class="box box-ver topic-detail">
            <div class="box banner topic-item box-ver" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495298744871&di=4e64a4d714992005e68cf647a95de613&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F578855a8e41e1.jpg)" >
                <div class="box box-ac">
                    <div class="box-f1"></div>
                    <a class="link" href="http://www.baidu.com">中国地质大学招生系统</a>
                </div>
                <div class="box-f1"></div>
                <div class="box-pc box title tx-c">
                    我是中国地质大学地质系主任， 想问地质专业的任何问题，请来问我吧！
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
                <p :class="showDesc?'ell-3':''" class="topic-desc box">中国地质大学的前身是1952年由北京大学、清华大 学、天津大学中国地质大学的前身是1952年由北京大学、清华大 学、天津大学和唐山铁道学院等院校的地质系(科)合并组 建的北京地</p>
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
                            <div class="box box-ac">
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
        

        <div class="foot-bar box box-fh box-ac">
            <div class="box box-f1 box-fh box-ac box-pc foot-item">
                <div class="icon-share"></div>
                <div class="txt">分享</div>
            </div>
            <div class="box box-f1 box-fh box-ac box-pc foot-item">
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

export default {
  components: {
    'nav-path': require('../components/path.vue')
  },
  data () {
    return {
      showDesc: true,
      comments: [1]
    }
  },
  methods: {
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
        //position:fixed;
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
    // .icon-hot{
    //     @include bg-image('../img/icon-hot');
    // }
    .icon-new{
        @include bg-image('../img/icon-new');
    }
    
    .tab-item{
        margin:0 .3rem;
        font-size:.28rem;
        .txt{
            margin-left:.1rem;
        }
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
</style>
