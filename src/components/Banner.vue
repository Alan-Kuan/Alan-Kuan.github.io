<script setup lang="ts">
import LazyImage from '@/components/LazyImage.vue';

defineProps<{
  url: string,
  pos?: string,
}>();
</script>

<template>
  <LazyImage
    :src="url"
    alt="Banner"
    class="
      rounded-3
      object-cover
    "
    :style="{ 'object-position': pos ?? 'center' }"
  />
</template>