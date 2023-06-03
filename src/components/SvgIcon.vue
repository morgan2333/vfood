<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'sm',
  },
});

const iconName = computed(() => `#${props.name}`);
const svgClass = computed(() => {
  if (props.name) {
    return `svg-icon ${props.name}`;
  }
  return 'svg-icon';
});
</script>
<template>
  <svg
    class="icon"
    :class="{
      svgClass,
      sm: size === 'sm',
      middle: size === 'middle',
      lg: size === 'lg',
      xl: size === 'xl',
      logo: size === 'logo',
    }"
  >
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>

<style scoped lang="scss">
.svg-icon {
  fill: currentcolor;
  vertical-align: middle;
}

.icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  fill: currentcolor;
  display: inline-block;

  &.sm {
    width: 14px;
    height: 14px;
  }

  &.middle {
    width: 18px;
    height: 18px;
  }

  &.lg {
    width: 22px;
    height: 22px;
  }

  &.loading {
    animation: loading 1.5s linear infinite;
  }

  &.logo {
    height: 30px;
    width: 110px;
  }

  &.xl {
    height: 30px;
    width: 30px;
  }
}
</style>
