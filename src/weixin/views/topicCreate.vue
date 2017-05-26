<template>
  <div class="topcreate">
    <div class="introduce card">
      <div class="text">
        针对话题的自我简介：
      </div>
      <textarea v-model="title" maxlength="40" name="" id="" placeholder="如：我是中国地质大学研究生招办客服，如何报考我校？请问我吧！">
       </textarea>
      <div class="counter">{{title.length}}/40</div>
    </div>
    <div class="describe card">
      <div class="text">
        话题详细描述：
      </div>
      <textarea v-model="content" maxlength="300" name="" id="" placeholder="请输入话题描述">
      </textarea>
      <div class="counter">{{content.length}}/300</div>
    </div>
    <div class="img card clear">
      <div v-if="images.length>0" v-for="(item,index) in images" :style="{backgroundImage: 'url(' + item + ')'}" class="photo-item">
      </div>
      <label v-if="images.length===0" for="checkPhoto" class="photo-item fl">
          <div class="uploadImg"></div>
          <input @change="getFile($event)"  id="checkPhoto" type="file" multiple="multiple" accept="image/*"/>
      </label>
      <div v-if="images.length===0" class="decs fl">
        <p class="text">添加话题图片</p>
        <p class="sub">(建议尺寸:690*400px)</p>
      </div>
    </div>
    <!-- <select name="" id="" style="width:100%;height:50px;">
      <option value="">所属院系</option>
    </select> -->
    <div class="list clear">所属院系<img :src="arrow" alt="" class="arrow-right fr"></div>
    <div class="list clear">所属专业<img :src="arrow" alt="" class="arrow-right fr"></div>
    <div class="error" v-show="isSubmit">{{error}}</div>
    <div class="btns clear">
      <div @click="back()" class="btn cancel fl">取消</div>
      <div @click="saveTopic()" class="btn submit fr">提交</div>
    </div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'hello',
  data() {
    return {
      uploadImg: require('../img/upload.png'),
      arrow: require('../img/arrow-right.png'),
      images: [],
      error: ' ',
      isSubmit: true,
      file: '',
      title: '',
      content: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    getFile (event) {
      var self = this
      var ele = event.currentTarget
      self.file = ele.files[0]
      self.images.push(window.URL.createObjectURL(self.file))
    },
    saveTopic () {
      var self = this
      var state = self.$store.state
      var title = self.title
      var content = self.content
      var file = self.file
      if (title.length === 0) {
        self.error = '请填写标题'
        return
      }
      if (content.length === 0) {
        self.error = '请填写内容'
        return
      }
      if (file === '') {
        self.error = '请先上传图片'
        return
      }
      this.isSubmit = false
      // Indicator.open({
      //   text: 'loading...',
      //   spinnerType: 'snake'
      // })
      var formData = new FormData()
      formData.append('file', file)
      formData.append('title', title)
      formData.append('content', content)
      formData.append('sCode', state.sCode)
      formData.append('creatorId', state.userId)
      formData.append('creator', state.userName)
      this.$http.post(state.host + state.baseUrl + '/topic/saveTopic', formData, {
        progress(event) {
          let progress = parseFloat(event.loaded / event.total * 100) + '%'
          Toast({message: '图片上传中' + progress, duration: 100})
        }
      }).then(res => {
        var data = res.data
        if (data.code !== '000000') {
          Toast({message: '系统异常', duration: 3000})
        } else {
          Toast({message: '创建成功', duration: 3000})
        }
      }, err => {
        Toast({message: '创建失败', duration: 3000})
        console.log('err>>>', err)
      })
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
        position: relative;
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
        .counter {
          position: absolute;
          right: .3rem;
          bottom: .3rem;
          font-size: .28rem;
          color: #999;
        }
      }
      .photo-item{
          position:relative;
          width:1rem;
          height:1rem;
          @include bg-size(cover);
          #checkPhoto{
            opacity: 0
          }
          .uploadImg{
            width:100%;
            height:100%;
            @include bg-size(cover);
            @include bg-image('../img/upload')
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
          margin-left: .1rem;
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
        margin-top: .2rem;
        margin-bottom: -.2rem;
        // padding-left: .2rem;
        // background-color: $error-bg;
        color:$txt-color3;
        font-size: 0.3rem;
      }
      .btns {
        width: 4.9rem;
        margin: 0 auto;
        margin-top: .4rem;
        .btn {
          @include btn(1.8rem, .6rem, .3rem, $txt-color2)
          border-radius: 4px;
        }
        .btn.cancel {
          border-color: #999;
        }
        .btn.submit {
          color: $theme-color;
        }
      }
    }
    
</style>
