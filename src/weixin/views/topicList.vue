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
        <div class="box box-f1 box-ver">
            <div class="box topic-item">

            </div>
            <div class="box topic-item">
                
            </div>
            <div class="box topic-item">
                
            </div>
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
        height:pxToRem(72);
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
    .topic-item{
        margin:pxToRem(10) pxToRem(20);
        height:pxToRem(480);
        background-color: #999;
    }
</style>
