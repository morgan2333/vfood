<template>
  <div class="about">
    <h1>This is an about page{{ $t('hello') }} <SvgIcon name="logo" size="middle"></SvgIcon></h1>
    <button @click="changeTheme">切换主题</button>
    <div class="box"></div>
    <div class="box2"></div>
    <div class="w-32 h-32 bg-blue-500"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { getBrandList } from '@/api/list';

const currentColor = ref<string>('');
function changeTheme() {
  currentColor.value = currentColor.value === '' ? 'green' : '';
  document.documentElement.setAttribute('theme-color', currentColor.value);
}
getBrandList();
</script>
<style scoped lang="scss">
@media (width >= 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.box {
  background-color: var(--td-brand-color-5);
  width: 100px;
  height: 100px;
}

.box2 {
  background-color: $globalInjectColor;
  width: 100px;
  height: 100px;
}
</style>
