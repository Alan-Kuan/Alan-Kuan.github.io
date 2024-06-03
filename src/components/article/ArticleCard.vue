<script setup lang="ts">
import ArticleAttr from '@/components/article/ArticleAttr.vue';
import type { Article } from '@/types.ts';

defineProps<Article>();
</script>

<template>
  <div
    max-h-100
    overflow-hidden
    rounded-md
    bg="page-light dark:page-dark"
    drop-shadow
  >
    <div flex>
      <div
        class="first_img_container"
        flex justify-center items-center
        min-w-48 max-w-48 min-h-36
        bg="article_card-img_bg-light dark:article_card-img_bg-dark"
        overflow-hidden
      >
        <div v-if="first_img" v-html="first_img" />
        <div v-else i-mdi-book-open-variant-outline text-5xl></div>
      </div>
      <div px-5 py-5>
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
        <ArticleAttr mt-1 :date="date" :tags="tags" />
        <div mt-2 v-if="first_paragraph" v-html="first_paragraph" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.first_img_container >>> img {
  max-width: 100%;
  max-height: 100%;
}
</style>