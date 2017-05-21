<template>
  <div class="path">
      <i class="comicon-17 icon1-return" @click="$router.go(-1)"></i>
      <slot></slot>
      <span>{{current}}</span>
  </div>
</template>

<script>
  import '../css/path.scss'
  export default {
    props: ['current']
  }
</script>

