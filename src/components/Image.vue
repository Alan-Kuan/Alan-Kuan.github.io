<script setup lang="ts">
defineProps<{
  src: string,
  alt: string,
}>();

const onload = 'this.removeAttribute("blur-2")';
</script>

<template>
  <img
    blur-2
    :src
    :alt
    :onload
  />
</template>

<style scoped>
img {
  transition: filter 0.5s;
}
</style>