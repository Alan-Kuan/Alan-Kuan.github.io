<script setup lang="ts">
defineProps<{
  avatar_urls: {
    [key: string]: string,
  }
}>();
</script>

<template>
  <img
    v-for="(url, mode) in avatar_urls"
    :src="url"
    :alt="`My avatar in ${mode} style`"
    :class="[
      { 'dark:hidden': mode === 'light' },
      { 'hidden! dark:flex!': mode === 'dark' },
      'lt-md:max-w-40', 'lt-md:max-h-40',
      'w-full', 'h-auto',
      'sm:w-50', 'sm:h-50',
      'rounded-xl',
    ]"
  />
</template>