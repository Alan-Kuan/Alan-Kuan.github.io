<script setup lang="ts">
defineProps<{
  avatar_urls: {
    [key: string]: string,
  }
}>();
</script>

<template>
  <div>
    <img
      v-for="(url, mode) in avatar_urls"
      :src="url"
      :alt="`My avatar in ${mode} style`"
      :class="[
        { 'dark:hidden': mode === 'light' },
        { 'hidden! dark:flex!': mode === 'dark' },
        'w-full', 'h-auto',
        'rounded-xl',
      ]"
    />
  </div>
</template>