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
            <div class="box topic-item box-ver" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495298744871&di=4e64a4d714992005e68cf647a95de613&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F578855a8e41e1.jpg)" >
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
                    <div class="box box-ac box-f1 box-fh zan">
                        <div class="box-f1"></div>
                        <div class="icon-zan-act"></div>
                        <div class="num">2099</div>
                    </div>
                </div>
            </div>
            <div class="box topic-item box-ver" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495298744871&di=4e64a4d714992005e68cf647a95de613&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F578855a8e41e1.jpg)" >
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
                    <div class="box box-ac box-f1 box-fh zan">
                        <div class="box-f1"></div>
                        <div class="icon-zan-act"></div>
                        <div class="num">2099</div>
                    </div>
                </div>
            </div>
            <div class="box topic-item box-ver" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495298744871&di=4e64a4d714992005e68cf647a95de613&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F578855a8e41e1.jpg)" >
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
                    <div class="box box-ac box-f1 box-fh zan">
                        <div class="box-f1"></div>
                        <div class="icon-zan-act"></div>
                        <div class="num">2099</div>
                    </div>
                </div>
            </div>
            <div class="box topic-item box-ver" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495298744871&di=4e64a4d714992005e68cf647a95de613&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F578855a8e41e1.jpg)" >
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
                    <div class="box box-ac box-f1 box-fh zan">
                        <div class="box-f1"></div>
                        <div class="icon-zan-act"></div>
                        <div class="num">2099</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="topic-create box box-pc box-ac">
            <div class="icon-create-topic"></div>
            <div class="txt">我要创建话题</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'hello',
  components: {
    'v-header': require('../components/header.vue')
  },
  data () {
    return {
      actIndex: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../css/color.scss';
    @import '../css/mixins.scss';

    
</style>
