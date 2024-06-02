<script setup lang="ts">
import ArticleAttr from '@/components/article/ArticleAttr.vue';
import type { Article } from '@/types.ts';

defineProps<Article>();
</script>

<template>
  <div
    px-8 py-5
    rounded-md
    bg="page-light dark:page-dark"
    drop-shadow
  >
    <div
      font-medium
      text="
        xl
        hover:article_card-link-light
        dark:hover:article_card-link-dark
      "
    >
      <a :href="`/articles/${slug}`">
        {{ title }}
      </a>
    </div>
    <div mt-1>
      <ArticleAttr :date="date" :tags="tags" />
    </div>
    <p mt-2>{{ excerpt }}</p>
  </div>
</template>