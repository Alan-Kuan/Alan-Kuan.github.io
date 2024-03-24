<script setup lang="ts">
defineProps<{
  src: string,
  alt: string,
  w?: string,
  h?: string,
  min_w?: string,
  min_h?: string,
  rounded?: boolean,
}>();
</script>

<template>
  <div
    relative
    :min-w="min_w" :min-h="min_h"
  >
    <img
      :src="src"
      :alt="alt"
      absolute z-1
      :w="w" :h="h"
      :rounded="rounded ? 'xl' : false"
    />
    <!-- skeleton -->
    <div
      flex justify-center items-center
      :w="w" :h="h"
      :min-w="min_w" :min-h="min_h"
      :rounded="rounded ? 'xl' : false"
      bg-gray-200
      animate-pulse
    >
      <div i-mdi-image text="6xl gray-400"></div>
    </div>
  </div>
</template>