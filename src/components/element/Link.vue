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
      text-light-text-link dark:text-dark-text-link
      hover:brightness-120
    "
  >
    <slot />
  </a>
</template>

<style scoped>
a[target="_blank"]::after {
  content: '';
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  margin-left: 0.125rem;
  vertical-align: sub;
  background: #d77b00;
  mask-image: url(/open-in-new.svg);
  mask-size: contain;
}

.dark a[target="_blank"]::after {
  background: #eab18a;
}
</style>