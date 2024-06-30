<script setup lang="ts">
defineProps<{
  height: string,
  src: string,
  alt: string,
  caption?: string,
}>();
</script>

<template>
  <div relative content-margin>
    <img
      :style="{ height, padding: '0.5rem' }"
      rounded-md
      :src :alt
      decoding="async" loading="lazy"
      onload="this.nextElementSibling.remove(); this.style = '';"
    />
    <!-- skeleton -->
    <div
      :style="{ height }"
      w-full
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