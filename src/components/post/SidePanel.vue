<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

import type { MarkdownHeading } from 'astro';

defineProps<{
  headings: MarkdownHeading[],
}>();

const show = ref(false);
const li_padding = [
  'pl-4',
  'pl-8',
  'pl-12',
  'pl-16',
  'pl-20',
  'pl-24',
];

const visible_section = ref<Set<string>>(new Set());
let observer: IntersectionObserver;

onMounted(() => {
  const content = document.getElementById('base-content')!;

  observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      // heading is the first child of a section (done by remark-sectionize)
      const heading_id = entry.target.children[0].id;
      if (entry.isIntersecting) {
        visible_section.value.add(heading_id);
      } else {
        visible_section.value.delete(heading_id);
      }
    }
  }, { root: content });

  document.querySelectorAll('section')
    .forEach(section => observer.observe(section));
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <!-- Side Panel Toggle -->
  <button
    @click="show = !show"
    @blur="show = false"
    :class="[
      'md:hidden',
      'fixed z-5',
      'top-1/2 translate-y--1/2',
      'w-5 h-10',
      'bg-bg-top',
      'text-text-light',
      'rounded-e-full',
      'active:brightness-140',
    ]"
  >
    <div class="i-mdi-chevron-right" />
  </button>
  <!-- Side Panel -->
  <aside
    :class="[
      'sticky top-8',
      'overflow-auto',

      'md:max-h-[calc(100vh-8*var(--spacing)-var(--navbar-height)-var(--footer-height))]',

      'lt-md:fixed lt-md:top-0 lt-md:z-16',
      'lt-md:w-80% lt-md:h-full',
      'lt-md:pa-4 lt-md:pt-[calc(4*var(--spacing)+var(--navbar-height))]',
      'lt-md:bg-bg-card',
      'lt-md:text-xl',
      'lt-md:transition-translate lt-md:duration-500',
      'lt-md:translate-x--100%',
      { 'lt-md:translate-x-0!': show },
    ]"
  >
    <!-- Outline -->
    <ul
      class="
        mb-4
        rounded-lg
      "
    >
      <a
        v-for="heading in headings"
        :href="`#${heading.slug}`"
        :class="[
          'block',
          visible_section.has(heading.slug) ?
            [
              'bg-indicator-info/20',
              'border-l-2 border-l-indicator-info',
            ] :
            [
              'border-l-1',
              'hover:bg-indicator-info/10',
            ],
          'text-text-link',
          'hover:underline',
        ]"
      >
        <li
          :class="[
            li_padding[heading.depth - 1],
            'pr-2 lt-md:py-2',
            'break-all',
          ]"
        >
          {{heading.text}}
        </li>
      </a>
    </ul>
  </aside>
  <!-- Overlay -->
  <div
    v-if="show"
    class="
      fixed top-0 left-0 w-full h-full z-15
      bg-black/30
      backdrop-blur-sm
    "
  />
</template>