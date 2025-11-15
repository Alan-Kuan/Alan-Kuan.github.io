<script setup lang="ts">
defineProps<{
  src: string,
  alt: string,
}>();
</script>

<template>
  <img
    :src :alt
    onload="this.classList.remove('blur-2')"
    class="blur-2"
  />
</template>

<style scoped>
img {
  transition: filter 0.5s;
}
</style>