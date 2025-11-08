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
    md:w-90% lg:w-75% margin-content
  >
    <!-- NOTE: post-img is utilized by ImageViewer -->
    <Image
      rounded-md
      cursor-pointer
      class="post-img"
      :src :alt :title
    />
    <figcaption
      v-if="title"
      mt-2 px-2
      lt-md:text-sm
    >
      {{title}}
    </figcaption>
  </div>
</template>