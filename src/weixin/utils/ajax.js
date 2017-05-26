import { Toast } from 'mint-ui'
export default {
    ajax (params = {}) {
      // let reqData = {
      //   url: this.$store.state.
      // }
      return Vue.$http({ params })
               .then(res => {
               return res.data
             }, err => {
               Toast({
                  message: 'error',
                  duration: 5000
                })
                console.log('请求出错了>>>>', err)
             })
    }
}