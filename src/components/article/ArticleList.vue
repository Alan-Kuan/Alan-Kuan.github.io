<script setup lang="ts">
import ArticleCard from '@/components/article/ArticleCard.vue';
import type { Article } from '@/types.ts';

defineProps<{
  articles: Article[],
}>();
</script>

<template>
  <div px-8 py-3>
    <ArticleCard
      my-5
      v-for="article in articles"
      v-bind="article"
    />
  </div>
</template>