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
    <Image
      class="light-ver"
      height="112px"
      :src="img_url"
      :alt="repo"
      my-none
      rounded-none
    />
    <Image
      class="dark-ver"
      height="112px"
      :src="`${img_url}&theme=noctis_minimus`"
      :alt="repo"
      my-none
      rounded-none
    />
  </a>
</template>

<style lang="scss" scoped>
.dark-ver {
  display: none;
}

.dark {
  .light-ver {
    display: none;
  }
  .dark-ver {
    display: block;
  }
}
</style>