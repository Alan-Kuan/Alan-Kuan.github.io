<script setup lang="ts">
import Image from '@/components/Image.vue';

defineProps<{
  src: string,
  alt: string,
  title?: string,
}>();
</script>

<template>
  <div
    relative
    flex flex-col items-center
    md:w-90% lg:w-75% mx-auto margin-content
  >
    <Image rounded-md :src :alt :title />
    <figcaption
      v-if="title"
      mt-2 px-2
      lt-md:text-sm
    >
      {{title}}
    </figcaption>
  </div>
</template>