<script setup lang="ts">
import { FastAverageColor } from 'fast-average-color';
import { ref, onMounted } from 'vue';

import PostAttr from '@/components/post/PostAttr.vue';
import type { Post } from '@/types.ts';

const props = defineProps<Post>();

const bg_color = ref('#cccccc');

onMounted(async () => {
  if (!props.banner_url) return;
  const fac = new FastAverageColor();
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = props.banner_url;
  const color = await fac.getColorAsync(img, { algorithm: 'dominant' });
  bg_color.value = color.hex;
});
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
        :style="`background: ${bg_color}`"
        flex justify-center items-center
        min-w-48 max-w-48 min-h-36
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
      <div pa-5>
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
        <PostAttr mt-1 :date :tags />
        <div
          v-if="excerpt"
          h-18
          mt-2
          overflow-hidden
        >
          {{ excerpt }}
        </div>
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