<template>
    <div class="box box-ac header">
        <div class="icon-user" @click="checkLogin('./userList')">
            <div v-if="hasNews" class="news"></div>
        </div>
        <form class="box box-f1 box-ac" action="javascript:return true;" >
            <div class="icon-search"></div>
            <input id="search" type="search" class="box box-f1" placeholder="请输入您要搜索的话题" />
        </form>
        <div class="icon-user-list " @click="checkLogin('./userList')">
        </div>
    </div>
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
        position:fixed !important;
        background-color:$theme-bg;
        z-index:1000;
        width:100%;
        top:0;
        height:1.1rem;
        padding-left:.2rem;
        padding-right:.2rem;;
        @include border-1px($border-color);
        form{
            margin-left:.3rem;
            margin-right:.3rem;
            padding-right:.28rem;
            padding-left:.28rem;
            border-radius:.66rem;
            border:.02rem solid $theme-color;
            height:.66rem;
            overflow:hidden;
            .icon-search{
                @include bg-image('../img/icon-search');
                @include bg-size(cover);
                width:.48rem;
                height:.48rem;
            }
            #search{
                margin-left:.1rem;
                font-size:.3rem;
            }
        }
    }

   .icon-user,.icon-user-list{
        width: .58rem;
        height: .58rem;
        @include bg-size(cover);
   }
   
   .icon-user{
       .news{
           position:absolute;
           width:.1rem;
           height:.1rem;
           border-radius:50%;
           background-color: #e60012;
           right:-.05rem;
           top:-.05rem;
       }
       position:relative;
       @include bg-image('../img/icon-user');
   }
   .icon-user-list{
       @include bg-image('../img/icon-user-list');
   }
</style>

