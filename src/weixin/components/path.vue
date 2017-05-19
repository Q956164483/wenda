<template>
  <div class="path">
      <i class="comicon-17 icon1-return" @click="$router.go(-1)"></i>
      <a href="javascript:void(0);" @click="$router.push('/')">首页</a>
      &gt;
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

