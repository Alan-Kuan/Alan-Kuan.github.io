<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: string,
    height?: string,
    src: string,
    alt: string,
    caption?: string,
  }>(), {
    width: '100%',
    height: '100%',
  }
);
</script>

<template>
  <div
    relative
    content-margin
    flex flex-col items-center
  >
    <img
      :style="{ width, height, padding: '0.5rem' }"
      rounded-md
      :src :alt
      decoding="async" loading="lazy"
      onload="this.nextElementSibling.remove(); this.removeAttribute('style');"
    />
    <!-- skeleton -->
    <div
      :style="{ width, height }"
      absolute top-1 z--1
      flex justify-center items-center
      bg-gray-200
      rounded-md
      animate-pulse
    >
      <div i-mdi-image text="6xl gray-400"></div>
    </div>
    <!-- caption -->
    <div v-if="caption" mt-2 text="center sm">
      {{ caption }}
    </div>
  </div>
</template>