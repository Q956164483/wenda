<template>
    <header class="box box-ac header">
        <div class="icon-user" @click="checkLogin('./userList')">
            <div v-if="hasNews" class="news"></div>
        </div>
        <form class="box box-f1 box-ac" action="javascript:return true;" >
            <div class="icon-search"></div>
            <input id="search" type="search" class="box box-f1" placeholder="请输入您要搜索的话题" />
        </form>
        <div class="icon-user-list " @click="checkLogin('./userList')">
        </div>
    </header>
</template>
<script>
export default {
  data() {
    return {
      isLogin: false,
      hasNews: true
    }
  },
  methods: {
    checkLogin(router) {
      var self = this
      if (!self.isLogin) {
        self.$router.push('./login')
      } else {
        self.$router.push(router)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    @import '../css/color.scss';
    @import '../css/mixins.scss';

    .header{
        height:pxToRem(110);
        padding-left:pxToRem(20);
        padding-right:pxToRem(20);
        @include border-1px($border-color);
        form{
            margin-left:pxToRem(30);
            margin-right:pxToRem(30);
            padding-right:pxToRem(30);
            padding-left:pxToRem(30);
            border-radius:pxToRem(66);
            border:pxToRem(2) solid $theme-color;
            height:pxToRem(66);
            overflow:hidden;
            .icon-search{
                @include bg-image('../img/icon-search');
                @include bg-size(cover);
                width:pxToRem(48);
                height:pxToRem(48);
            }
            #search{
                margin-left:pxToRem(10);
                font-size:pxToRem(30);
            }
        }
    }

   .icon-user,.icon-user-list{
        width: pxToRem(58);
        height: pxToRem(58);
        @include bg-size(cover);
   }
   
   .icon-user{
       .news{
           position:absolute;
           width:pxToRem(10);
           height:pxToRem(10);
           border-radius:50%;
           background-color: #e60012;
           right:pxToRem(-5);
           top:pxToRem(-5);
       }
       position:relative;
       @include bg-image('../img/icon-user');
   }
   .icon-user-list{
       @include bg-image('../img/icon-user-list');
   }
</style>

