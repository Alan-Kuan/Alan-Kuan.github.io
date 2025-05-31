<script setup lang="ts">
import { ref } from 'vue';

import Outline from '@/components/post/Outline.vue';

import type { MarkdownHeading } from 'astro';

defineProps<{
  headings: MarkdownHeading[],
}>();

const show = ref(false);
</script>

<template>
  <!-- Side Bar Toggle -->
  <button
    @click="show = !show"
    fixed md:hidden top="24" z="10"
    pa="2"
    bg="profile_card-link-light dark:profile_card-link-dark"
    text="text-light dark:text-dark"
    rounded="50%"
    shadow
    active:brightness-140
  >
    <div i-mdi-format-list-bulleted />
  </button>
  <!-- Side Bar -->
  <aside
    fixed md:sticky top="28" z="10"
    w="lt-md:90vw"
    max-h="[calc(100vh-7rem-var(--footer-height))]"
    mt="8"
    px="md:4"
    bg="body-light dark:body-dark"
    overflow-auto

    lt-md:shadow-lg
    lt-md:rounded-lg
    lt-md:transition-transform lt-md:duration-500
    lt-md:translate-x="[-100vw]"
    :class="{ 'show': show }"
  >
    <Outline
      v-if="headings.length > 0"
      :headings
    />
  </aside>
</template>

<style lang="scss" scoped>
// lt-md
@media (max-width: 767.9px) {
  aside.show { transform: none; }
}
</style>