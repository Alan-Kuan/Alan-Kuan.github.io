<script setup lang="ts">
defineProps<{
  src: string,
  alt: string,
  caption?: string,
}>();
</script>

<template>
  <div my-4>
    <img
      rounded-md
      :src :alt
      decoding="async" loading="lazy"
    />
    <div v-if="caption" mt-2 text="center sm">
      {{ caption }}
    </div>
  </div>
</template>