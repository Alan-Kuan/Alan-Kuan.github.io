<script setup lang="ts">
const props = defineProps<{
  user: string;
  repo: string;
}>();

const repo_url = `https://github.com/${props.user}/${props.repo}`;
const img_url = `https://github-readme-stats-alan-kuan.vercel.app/api/pin/?username=${props.user}&repo=${props.repo}&hide_border=true`;
const dark_img_url = `${img_url}&theme=noctis_minimus`;
</script>

<template>
  <a :href="repo_url" target="_blank" class="relative group">
    <div
      class="
        absolute
        w-full h-full
        rounded-md
        bg-gray-300
        opacity-0
        group-hover:opacity-10
      "
    />
    <img
      :src="img_url"
      :alt="repo"
      class="dark:hidden card"
    />
    <img
      :src="dark_img_url"
      :alt="repo"
      class="hidden dark:inline-block card"
    />
  </a>
</template>

<style scoped>
.card {
  @apply mb-0!;
  @apply rounded-md;
}
</style>