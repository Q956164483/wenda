<template>
  <div class="box box-ver h-p100">
    <v-header></v-header>
    <transition name="back">
      <router-view></router-view>
    </transition>
  </div>
    
</template>
<script>
export default {
  components: {
    'v-header': require('../components/header.vue')
  }
}
</script>
<style lang="scss" scoped>
    @import '../css/color.scss';
    @import '../css/mixins.scss';
</style>

