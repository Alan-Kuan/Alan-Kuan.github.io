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
      :src="img_url"
      :alt="repo"
      ske_height="112px"
      :margin="false"
      rounded="none"
      dark:hidden
    />
    <!-- dark -->
    <Image
      :src="`${img_url}&theme=noctis_minimus`"
      :alt="repo"
      ske_height="112px"
      :margin="false"
      rounded="none"
      hidden! dark:flex!
    />
  </a>
</template>