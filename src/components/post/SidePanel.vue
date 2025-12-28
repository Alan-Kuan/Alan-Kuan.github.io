<script setup lang="ts">
import { ref } from 'vue';

import type { MarkdownHeading } from 'astro';

defineProps<{
  headings: MarkdownHeading[],
}>();

const show = ref(false);
const li_padding = [
  '',
  'pl-4',
  'pl-8',
  'pl-12',
  'pl-16',
  'pl-20',
];
</script>

<template>
  <!-- Side Panel Toggle -->
  <button
    @click="show = !show"
    class="
      fixed md:hidden top-24 left-2 z-10
      pa-4
      bg-light-bg-top dark:bg-dark-bg-top
      text-dark-text-normal
      rounded-full
      shadow-2xl
      active:brightness-140
    "
  >
    <div class="i-mdi-format-list-bulleted" />
  </button>
  <!-- Side Panel -->
  <aside
    :class="[
      'fixed', 'top-38', 'z-10',
      'md:sticky', 'md:top-[calc(2rem+var(--navbar-height))]',
      'max-h-[calc(100vh-2rem-var(--navbar-height)-var(--footer-height))]',
      'overflow-auto',
      'lt-md:transition-translate', 'lt-md:duration-500',
      'lt-md:translate-x-[-100vw]',
      { 'lt-md:translate-x-4!': show },
    ]"
  >
    <!-- Outline -->
    <ul
      class="
        flex flex-col gap-1
        px-8 py-4
        bg-light-bg-side dark:bg-dark-bg-side
        rounded-lg
      "
    >
      <li
        v-for="heading in headings"
        :class="[
          li_padding[heading.depth - 1],
          'break-all',
        ]"
      >
        <a
          :href="`#${heading.slug}`"
          class="
            text-light-text-link dark:text-dark-text-link
            hover:brightness-120%
          "
        >
          {{heading.text}}
        </a>
      </li>
    </ul>
  </aside>
</template>