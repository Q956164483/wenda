<template>
  <div class="root">
    <!-- header用于开发时模拟页面高度，手机上打开时请删掉 -->
    <!--<header style="height:130px;background:#eee;position:fixed;top:0;width: 100%;z-index: 999;"></header>-->
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/javascript">
import '../font/common/style.css'
import '../font/user/style.css'
import '../font/icon/iconfont.css'
import '../css/common.scss'
import '../css/mint-ui.scss'

export default {}
</script>

<style scoped>
/*用于开发时模拟页面高度，手机上打开时请删掉*/
  .container {margin-top:130px;}
</style>
