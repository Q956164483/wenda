<template>
  <div class="topcreate">
    <div class="introduce card">
      <div class="text">
        针对话题的自我简介：
      </div>
      <textarea name="" id="" placeholder="如：我是中国地质大学研究生招办客服，如何报考我校？请问我吧！">
      </textarea>
      <div class="counter">0/40</div>
    </div>
    <div class="describe card">
      <div class="text">
        话题详细描述：
      </div>
      <textarea name="" id="" placeholder="请输入话题描述">
      </textarea>
      <div class="counter">0/300</div>
    </div>
    <div class="img card">
      <img class="uploadImg" :src="uploadImg">
      <input type="file" value="上传" class="file">
      <div class="decs">
        <p class="text">添加话题图片</p>
        <p class="sub">(建议尺寸:690*400px)</p>
      </div>
    </div>
    <div class="list clear">所属院系<img :src="arrow" alt="" class="arrow-right fr"></div>
    <div class="list clear">所属专业<img :src="arrow" alt="" class="arrow-right fr"></div>
    <div class="error" v-show="isSubmit">{{error}}</div>
    <div class="btns clear">
      <div class="btn cancel fl">取消</div>
      <div class="btn submit fr">提交</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      uploadImg: require('../img/upload.png'),
      arrow: require('../img/arrow-right.png'),
      error: '错误信息',
      isSubmit: true
    }
  },
  created() {
    // let state = this.$store.state
    // let url = state.hostImg + state.baseUrl + '/topic/saveTopic?title=sas&content=111&file=12&sCode=1232&creatorId=2863&creator=amy'
    // this.$http.get(url).then((res) => {
    //   console.log(res.body)
    // })
// setTimeout(function() {
//   console.log(document.querySelector('input'))
// })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../css/color.scss';
    @import '../css/mixins.scss';
    
    * {
      padding: 0;
      margin: 0;
    }
    .topcreate {
      margin-top: 1.1rem !important;
      .card {
        padding: .2rem;
        border-bottom: 1px solid #DCDCDC;
        .text {
          margin-bottom: .12rem;
        }
        textarea {
          box-sizing:border-box;
          width: 100%;
          height: 1.5rem;
          padding: .2rem .3rem;
          border: 1px solid #DCDCDC;
          border-radius: .2rem;
          background-color: #FAFAFA;
          font-size: .26rem
        }
      }
      .img {
        .uploadImg {
          width: 1rem;
          height: 1rem;
        }
        .file {
          display: none;
        }
        .decs {
          display: inline-block;
          vertical-align: super;
          margin-left: .06rem;
          .text {
            margin-bottom: .24rem;
          }
          .sub {
            margin-top: -.1rem;
            color: #666;
            font-size: 0.24rem;
          }
        }
      }
      .list {
        margin: 0 .2rem;
        padding: .2rem 0;
        border-bottom: 1px solid #DCDCDC;
        .arrow-right {
          margin-top: .08rem;
        }
      }
      .error {
        text-align: center;
        line-height: 1rem;
        // padding-left: .2rem;
        // background-color: $error-bg;
        color:$txt-color3;
        font-size: 0.3rem;
      }
      .btns {
        width: 4.9rem;
        margin: 0 auto;
        .btn {
          @include btn(1.8rem, .6rem, .3rem, $txt-color2)
        }
      }
    }
    
</style>
