<script setup lang="ts">
import Image from '@/components/Image.vue';

const props = defineProps<{
  user: string,
  repo: string,
}>();

const repo_url = `https://github.com/${props.user}/${props.repo}`;
const img_url = `https://github-readme-stats-alan-kuan.vercel.app/api/pin/?username=${props.user}&repo=${props.repo}&hide_border=true`;
const dark_img_url = `${img_url}&theme=noctis_minimus`;
</script>

<template>
  <a :href="repo_url" target="_blank">
    <Image
      :src="img_url"
      :alt="repo"
      class="dark:hidden"
    />
    <Image
      :src="dark_img_url"
      :alt="repo"
      class="hidden! dark:flex!"
    />
  </a>
</template>