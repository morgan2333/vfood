<template>
  <div class="about">
    <h1>This is an about page{{ $t('hello') }}</h1>
  </div>
</template>

<style scoped>
@media (width >= 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
