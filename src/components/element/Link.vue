<script setup lang="ts">
const props = defineProps<{
  href: string,
}>();

const target = props.href.startsWith('/') ? '_self' : '_blank';
</script>

<template>
  <a
    :href :target
    class="
      text-text-link
      hover:brightness-120
    "
  >
    <slot />
  </a>
</template>

<style scoped>
a[target="_blank"]::after {
  content: '';
  @apply inline-block;
  @apply ml-0.5;
  @apply text-xs;
  @apply align-sub;
  @apply bg-text-link;
  @apply i-mdi-open-in-new;
}
</style>