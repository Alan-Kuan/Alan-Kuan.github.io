<script setup lang="ts">
import PostAttr from '@/components/post/PostAttr.vue';
import type { Post } from '@/types.ts';

defineProps<Post>();
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
        class="banner_container"
        flex justify-center items-center
        min-w-48 max-w-48 min-h-36
        bg="article_card-img_bg-light dark:article_card-img_bg-dark"
        overflow-hidden
      >
        <img
          v-if="banner_url"
          w-full
          :src="banner_url"
        />
        <div
          v-else
          i-mdi-book-open-variant-outline
          text-5xl
        />
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
          <a :href="`/${collection}/${slug}`">
            {{ title }}
          </a>
        </div>
        <PostAttr mt-1 :date="date" :tags="tags" />
        <div mt-2 v-if="first_paragraph" v-html="first_paragraph" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner_container :deep(img) {
  max-width: 100%;
  max-height: 100%;
}
</style>