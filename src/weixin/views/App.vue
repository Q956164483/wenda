<template>
  <div class="root h-p100">
    <!-- header用于开发时模拟页面高度，手机上打开时请删掉 -->
    <!--<header style="height:130px;background:#eee;position:fixed;top:0;width: 100%;z-index: 999;"></header>-->
    <div class="container h-p100">
      <router-view></router-view>
    </div>
    <div v-if="$store.state.isloading" class="loading animated bounce">loading...</div>
  </div>
</template>
<script type="text/javascript">
import '../font/common/style.css'
import '../css/common.scss'
import '../css/mint-ui.scss'

export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
  .loading{
    font-size:1rem;
    position:fixed;
    bottom:20%;
    left:30%;
    z-index:99999;
    background-color:rgba(0,0,0,.5);
  }
</style>
