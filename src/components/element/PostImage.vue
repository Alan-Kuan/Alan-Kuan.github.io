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
    class="
      relative
      md:w-90% lg:w-75%
      margin-content
    "
  >
    <!-- NOTE: post-img is utilized by ImageViewer -->
    <Image
      :src :alt :title
      class="
        rounded-md
        cursor-pointer
        post-img
      "
    />
    <figcaption
      v-if="title"
      class="
        mt-2 px-2
        lt-md:text-sm
      "
    >
      {{title}}
    </figcaption>
  </div>
</template>