<script setup lang="ts">
import Image from '@/components/Image.vue';

defineProps<{
  avatar_urls: {
    [key: string]: string,
  }
}>();
</script>

<template>
  <Image
    v-for="(url, mode) in avatar_urls"
    :class="[
      { 'dark:hidden': mode === 'light' },
      { 'hidden! dark:flex!': mode === 'dark' },
      'lt-md:max-w-40', 'lt-md:max-h-40',
      'w-full', 'h-auto',
      'sm:w-50', 'sm:h-50',
      'rounded-xl',
    ]"
    :src="url"
    :alt="`My avatar in ${mode} style`"
  />
</template>