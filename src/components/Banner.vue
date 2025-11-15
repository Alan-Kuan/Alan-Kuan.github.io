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
      w-95% xl:w-300
      lg:h-100
      mx-auto
      rounded-3
      object-cover
    "
    :style="`object-position: ${pos ?? 'center'}`"
  />
</template>