<template>
    <div class="box box-ver">
        <nav-path :current="'XXX坐席'">
            <a href="javascript:void(0);" @click="$router.push('/userinfo')">XX大学</a>
            &gt;
            
        </nav-path>
        <div class="box box-ver topic-list">
            <div class="box banner topic-item box-ver" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495298744871&di=4e64a4d714992005e68cf647a95de613&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F578855a8e41e1.jpg)" >
                <div class="box box-ac">
                    <div class="box-f1"></div>
                    <a class="link" href="http://www">中国地质大学招生系统</a>
                </div>
                <div class="box-f1"></div>
                <div class="box-pc box title tx-c">
                    我是中国地质大学地质系主任， 想问地质专业的任何问题，请来问我吧！
                </div>
                <div class="box box-ac">
                    <div class="box-f1"></div>
                    <div class="box box-ac collect">
                        <div class="box-f1"></div>
                        <div class="icon-collect-act"></div>
                        <div class="num">订阅</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
  name: 'hello',
  components: {
    'nav-path': require('../components/path.vue')
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
    .path{
        //position:fixed;
        top:1.1rem !important;
    }
    .topic-list{
        margin-top:1.8rem;
        padding-bottom:1rem;
    }
    .banner{
        margin:.1rem .2rem;
        padding:.2rem;
        height:4.8rem;
        background-color: #EEE;
        color:#FFF;
        @include bg-size(cover); 
        .link{
            text-decoration: underline;
            font-size:.32rem;
            font-weight:700;
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
    
</style>
