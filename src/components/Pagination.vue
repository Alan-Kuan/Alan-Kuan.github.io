<script setup lang="ts">
import { motion } from 'motion-v';
import { computed, ref } from 'vue';

const props = defineProps<{
  prefix: string,
  curr_page: number,
  last_page: number,
  prev_page_url?: string,
  next_page_url?: string,
}>();

// show at most 5 page links (2 previous pages, current page and 2 next pages)
const pages = computed(() => Array.from({ length: 5 }, (_, k) => k + props.curr_page - 2));
const highlighted_page = ref(props.curr_page);
</script>

<template>
  <div class="flex justify-center items-center">
    <!-- Previous -->
    <a
      :href="prev_page_url"
      :class="[
        'mr-1',
        { 'invisible': !prev_page_url },
      ]"
    >
      <div class="i-mdi-menu-left arrow-btn" />
    </a>

    <!-- Page Links -->
    <template
      v-for="page in pages"
      :key="page"
    >
      <!-- Placeholder -->
      <div
        v-if="page <= 0 || page > last_page"
        class="w-9 mx-1"
      />
      <!-- Current Page -->
      <div
        v-else-if="page == curr_page"
        class="page-link"
      >
        {{page}}
        <!-- Indicator -->
        <motion.div
          v-if="page === highlighted_page"
          layout-id="page-indicator"
          class="indicator"
        />
      </div>
      <!-- Other Pages -->
      <a
        v-else
        :href="`${prefix}/${page}`"
        @mouseenter="highlighted_page = page"
        @mouseleave="highlighted_page = curr_page"
        class="page-link"
      >
        {{page}}
        <!-- Indicator -->
        <motion.div
          v-if="page === highlighted_page"
          layout-id="page-indicator"
          class="indicator"
        />
      </a>
    </template>

    <!-- Next -->
    <a
      :href="next_page_url"
      :class="[
        'ml-1',
        { 'invisible': !next_page_url },
      ]"
    >
      <div class="i-mdi-menu-right arrow-btn" />
    </a>
  </div>
</template>

<style scoped>
.page-link {
  @apply relative;
  @apply w-9 h-9 mx-1;
  @apply grid place-items-center;
  @apply text-lg;
}

.indicator {
  @apply absolute inset-0;
  @apply w-9 h-9;
  @apply rounded-full border-2 border-indicator-catchy;
}

.arrow-btn {
  @apply text-4xl;
  @apply transition-transform duration-200;
  @apply hover:scale-120%;
  @apply active:scale-80%;
}
</style>