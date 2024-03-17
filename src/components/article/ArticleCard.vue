<script setup lang="ts">
defineProps<{
  title: string,
  excerpt: string,
}>();
</script>

<template>
  <div>
    <div class="text-xl font-bold">{{ title }}</div>
    <p class="pt-2">{{ excerpt }}</p>
  </div>
</template>