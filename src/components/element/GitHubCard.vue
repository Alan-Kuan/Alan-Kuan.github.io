<script setup lang="ts">
import Image from '@/components/element/Image.vue';

const props = defineProps<{
  user: string,
  repo: string,
}>();

const repo_url = `https://github.com/${props.user}/${props.repo}`;
const img_url = `https://github-readme-stats-alan-kuan.vercel.app/api/pin/?username=${props.user}&repo=${props.repo}&hide_border=true`;
</script>

<template>
  <a :href="repo_url" target="_blank">
    <!-- light -->
    <Image
      height="112px"
      :src="img_url"
      :alt="repo"
      dark:hidden
      mb-none
      rounded-none
    />
    <!-- dark -->
    <Image
      height="112px"
      :src="`${img_url}&theme=noctis_minimus`"
      :alt="repo"
      hidden! dark:flex!
      mb-none
      rounded-none
    />
  </a>
</template>