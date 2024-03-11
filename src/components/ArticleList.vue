<script setup>
import ArticleCard from './ArticleCard.vue';

defineProps({
  articles: Array
});
</script>

<template>
  <div class="px-8 py-3">
    <ArticleCard
      v-for="article in articles"
      class="
        my-5 px-8 py-5
        rounded-xl
        bg-#ffffff99
        drop-shadow hover:drop-shadow-lg
        cursor-pointer
      "
      :title="article.title"
      :excerpt="article.excerpt"
    />
  </div>
</template>