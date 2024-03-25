<script setup lang="ts">
defineProps<{
  title: string,
  excerpt: string,
}>();
</script>

<template>
  <div
    my-5
    px-8 py-5
    rounded-md
    bg="page-light dark:page-dark"
    drop-shadow="~ hover:lg"
    cursor-pointer
  >
    <div text-xl font-medium>{{ title }}</div>
    <p pt-2>{{ excerpt }}</p>
  </div>
</template>