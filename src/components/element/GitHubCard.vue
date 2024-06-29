<script setup lang="ts">
const props = defineProps<{
  user: string,
  repo: string,
}>();

const repo_url = `https://github.com/${props.user}/${props.repo}`;
const img_url = `https://github-readme-stats-alan-kuan.vercel.app/api/pin/?username=${props.user}&repo=${props.repo}&hide_border=true`;
</script>

<template>
  <a :href="repo_url" target="_blank">
    <img class="light-ver" :src="img_url" :alt="repo" />
    <img class="dark-ver" :src="`${img_url}&theme=noctis_minimus`" :alt="repo" />
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