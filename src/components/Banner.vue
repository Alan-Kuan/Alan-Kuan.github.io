<script setup lang="ts">
import Image from '@/components/Image.vue';

defineProps<{
  url: string,
  pos?: string,
}>();
</script>

<template>
  <Image
    w-300 h-100
    mx-auto
    rounded-3
    object-cover
    :style="`object-position: ${pos ?? 'center'}`"
    :src="url"
    alt="Banner"
  />
</template>