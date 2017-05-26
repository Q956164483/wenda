<template>
    <div class="box box-ac header">
        <div class="icon-user" @click="checkLogin('./userInfo')">
            <div v-if="hasNews" class="news"></div>
        </div>
        <form class="box box-f1 box-ac" action="javascript: return true;" >
            <div class="icon-search"></div>
            <input v-model="searchWord" id="search"  type="search" class="box box-f1"  placeholder="请输入您要搜索的话题" />
        </form>
        <div class="icon-user-list " @click="checkLogin('./userList')">
        </div>
        <div @click="searchWord=''" :class="searchWord.length>0 ? '':'hide'" class="search-container box-ver">
            <div @click="$event.stopPropagation()" class="box box-ver">
                <div v-if="searchList.length>0" class="search-list box box-ver">
                    <div v-for="(item, index) in searchList" @click="goTopicDetail(item)" class="search-item box box-ac">
                        <div class="icon-search"></div>
                        <div class="text box-f1 ellipsis">{{item.title}}</div>
                    </div>
                </div>
                <div v-if="searchList.length===0" class="search-none box box-ac">
                    <div class="box box-f1 box-pc">抱歉！没有搜索到您要找的话题。</div>
                    <div @click="checkLogin('./topicCreate')" class="topic-create box box-ac box-pc">创建话题</div>
                </div>
                <div class="search-history">
                    <div class="box box-ac">
                        <div class="icon-history"></div>
                        <div>历史搜索记录</div>
                    </div>
                    <div class="list box box-ver">
                        <div class="history-item">风刀霜剑</div>
                        <div class="history-item">风刀霜剑</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      hasNews: true,
      searchWord: '',
      searchList: []
    }
  },
  methods: {
    checkLogin(router) {
      var self = this
      var state = self.$store.state
      if (!state.isLogin) {
        self.$router.push('/login')
      } else {
        self.$router.go({path: router})
        // self.$router.push(router)
      }
    },
    goTopicDetail (item) {
      var self = this
      self.searchWord = ''
      self.checkLogin('/topicDetail/' + item.id)
      // self.checkLogin('/topicDetail?topicId=' + item.id)
    }
  },
  watch: {
    searchWord() {
      var self = this
      var state = self.$store.state
      if (self.searchWord.length === 0) return false
      var url = state.host + state.baseUrl + '/topic/findTopicList?sCode=' + state.sCode + '&departmentId=' + state.departmentId + '&majorId' + state.majorId + '&title=' + this.searchWord + '&curPage=1&pageSize=5'
      this.$http({
        method: 'get',
        url: url
      }).then(res => {
        var data = res.data.data.data
        if (!data || data.length === 0) {
        } else {
          console.log('searchList>>>>>', data)
          self.searchList = data
        }
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    @import '../css/color.scss';
    @import '../css/mixins.scss';
    .search-container{
        position:fixed !important;
        background-color:rgba(0,0,0,.3);
        z-index:1001;
        width:100%;
        top:1.1rem;
        left:0;
        height:-webkit-calc(100% - 1.1rem); 
        height: calc(100% - 1.1rem);
        .search-list{
            padding-left:1.2rem;
            background-color:#FFF;
            padding-top:.25rem;
            padding-bottom:.25rem;
            .search-item{
                height:.52rem;
                .icon-search{
                    @include bg-image('../img/icon-search1');
                    @include bg-size(cover);
                    width:.3rem;
                    height:.3rem;
                    margin-right:.2rem;
                }
            }
        }
        .search-none{
            padding:.3rem;
            font-size:.28rem;
            color:#686868;
            background-color:#FFF;
            .topic-create{
                width:1.37rem;
                height:.5rem;
                background-color:#f19149;
                border-radius:.1rem;
                color:#FFF;
            }
        }
        .search-history{
            background-color:#FFF;
            padding:.25rem;
            color:$theme-color;
            border-top:.01rem solid $border-color;
            .icon-history{
                width:.26rem;
                height:.26rem;
                margin-right:.1rem;
                @include bg-image('../img/icon-history');
                @include bg-size(cover);
            }
            .list{
                color:#666;
                padding-left:.3rem;
                .history-item{
                    font-size:.24rem;
                    padding-top:.1rem;
                }
            }
        }
    }
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

