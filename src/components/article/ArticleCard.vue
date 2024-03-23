<script setup lang="ts">
defineProps<{
  title: string,
  excerpt: string,
}>();
</script>

<template>
  <div
    class="
      my-5 px-8 py-5
      rounded-md
      bg-page-light dark:bg-page-dark
      drop-shadow hover:drop-shadow-lg
      cursor-pointer
    "
  >
    <div class="text-xl font-bold">{{ title }}</div>
    <p class="pt-2">{{ excerpt }}</p>
  </div>
</template>