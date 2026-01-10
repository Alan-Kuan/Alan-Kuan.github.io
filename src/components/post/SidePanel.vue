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
    class="
      md:hidden
      fixed z-5
      top-[calc(4*var(--spacing)+var(--navbar-height))] left-2
      pa-4
      bg-bg-top
      text-text-light
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
      'sticky top-8',
      'max-h-[calc(100vh-8*var(--spacing)-var(--navbar-height)-var(--footer-height))]',
      'overflow-auto',
      'lt-md:fixed lt-md:top-38 lt-md:z-5',
      'lt-md:pa-4',
      'lt-md:bg-bg-card',
      'lt-md:rounded-lg',
      'lt-md:shadow-md',
      'lt-md:transition-translate lt-md:duration-500',
      'lt-md:translate-x-[-100vw]',
      { 'lt-md:translate-x-4!': show },
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
            'break-all',
          ]"
        >
          {{heading.text}}
        </li>
      </a>
    </ul>
  </aside>
</template>