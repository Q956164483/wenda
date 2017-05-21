<template>
    <div class="box box-ver">
        <div class="box box-ac tab">
            <div :class="actIndex==0?'act':''" class="tab-item box box-f1 box-fh box-ac box-pc">
                <div>高校</div>
                <div class="arrow icon-arrow-bot icon-arrow-top-act"></div>
            </div>
            <div :class="actIndex==1?'act':''" class="tab-item box box-f1 box-fh box-ac box-pc">
                <div>院系</div>
                <div class="arrow icon-arrow-bot icon-arrow-top-act"></div>
            </div>
            <div :class="actIndex==2?'act':''" class="tab-item box box-f1 box-fh box-ac box-pc">
                <div>专业</div>
                <div class="arrow icon-arrow-bot icon-arrow-top-act"></div>
            </div>
        </div>
        <div class="box box-ver topic-list">
            <div v-for="item in topicList" @click="openDetail(item)" class="box topic-item box-ver" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495298744871&di=4e64a4d714992005e68cf647a95de613&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F578855a8e41e1.jpg)" >
                <div class="create-user box box-ac">
                    <div class="icon-head"></div>
                    <div class="name ellipsis box-f1">巴拉巴拉</div>
                </div>
                <div class="box-f1"></div>
                <div class="box-pc box title tx-c">
                    我是中国地质大学地质系主任， 想问地质专业的任何问题，请来问我吧！
                </div>
                <div class="box box-ac">
                    <div class="create-college box box-ac box-f1 box-fh">
                        <div class="icon-head"></div>
                        <div class="name ellipsis box-f1">巴拉巴拉巴拉巴拉巴拉巴拉</div>
                    </div>
                    <div class="box box-ac box-pc box-f1 box-fh status">
                        进行中...
                    </div>
                    <div class="box box-ac box-f1 box-fh collect">
                        <div class="box-f1"></div>
                        <div class="icon-collect-act"></div>
                        <div class="num">2099</div>
                    </div>
                </div>
            </div>
        </div>

        <div @click="$router.push('../topicCreate')" class="topic-create box box-pc box-ac">
            <div class="icon-create-topic"></div>
            <div class="txt">我要创建话题</div>
        </div>
    </div>
</template>

<script>

// import { InfiniteScroll } from 'mint-ui'

export default {
  name: 'hello',
  components: {
    'v-header': require('../components/header.vue')
  },
//   mounted () {
//     this.use(InfiniteScroll)
//   },
  data () {
    return {
      actIndex: 0,
      topicList: [0, 1, 1, 1, 1, 1]
    }
  },
  methods: {
    loadMore () {
      this.topicList.push(0)
    },
    openDetail (item) {
      // alert('111')
      this.$router.push('../topicDetail')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../css/color.scss';
    @import '../css/mixins.scss';
    .arrow{
        width: pxToRem(30);
        height: pxToRem(16);
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
        z-index:1000;
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
    .topic-list{
        margin-top:1.84rem;
        padding-bottom:1.1rem;
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
                @include bg-image('../img/icon-zan-act');
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
        width:.48rem;
        height:.48rem;
    }
</style>
