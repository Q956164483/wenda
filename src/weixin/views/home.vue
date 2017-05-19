<template>
  <div class="box box-ver">
    <v-header></v-header>
    <router-view></router-view>
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

