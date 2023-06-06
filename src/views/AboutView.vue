<template>
  <div class="about">
    <h1>This is an about page{{ $t('hello') }} <SvgIcon name="logo" size="middle"></SvgIcon></h1>
  </div>
</template>
<script setup>
import { getBrandList } from '@/api/list';

getBrandList();
</script>
<style scoped>
@media (width >= 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
