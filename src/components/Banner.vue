<script setup lang="ts">
defineProps<{
  url: string,
  pos?: string,
}>();
</script>

<template>
  <img
    w-300 h-100
    mx-auto
    rounded-3
    object-cover
    :style="`object-position: ${pos ?? 'center'}`"
    :src="url"
    alt="Banner"
  />
</template>