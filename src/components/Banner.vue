<script setup lang="ts">
import Image from '@/components/Image.vue';

defineProps<{
  url: string,
  pos?: string,
}>();
</script>

<template>
  <Image
    :src="url"
    alt="Banner"
    class="
      rounded-3
      object-cover
    "
    :style="{ 'object-position': pos ?? 'center' }"
  />
</template>