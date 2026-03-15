<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import type { MarkdownHeading } from 'astro';
import { ref, onMounted, onUnmounted } from 'vue';

import DarkLightToggle from '@/components/nav/DarkLightToggle.vue';
import { show_side_panel } from '@/stores/SidePanelStore';
import { is_dark } from '@/stores/ThemeStore';

defineProps<{
  headings: MarkdownHeading[],
}>();

const $show_side_panel = useStore(show_side_panel);
const $is_dark = useStore(is_dark);

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
  <!-- Side Panel -->
  <aside
    :class="[
      'sticky top-8',
      'overflow-auto',

      'md:max-h-[calc(100vh-8*var(--spacing)-var(--navbar-height)-var(--footer-height))]',

      'lt-md:fixed lt-md:top-0 lt-md:z-16',
      'lt-md:w-80% lt-md:h-full',
      'lt-md:pa-4',
      'lt-md:bg-bg-card',
      'lt-md:transition-translate lt-md:duration-500',
      'lt-md:translate-x--100%',
      { 'lt-md:translate-x-0!': $show_side_panel },
    ]"
  >
    <!-- Tool Bar -->
    <div
      class="
        md:hidden
        flex items-end
        mb-4
        border-b-1
      "
    >
      <DarkLightToggle class="mb-2" />
      <!-- Some Decorations -->
      <div class="i-mdi-pine-tree ml-auto mb--0.5 text-2xl" />
      <div
        :class="[
          'i-mdi-campfire',
          'ml-5 text-xs',
          'transition-opacity duration-500',
          { 'opacity-0': !$is_dark }
        ]"
      />
      <div
        :class="[
          'i-mdi-bird',
          'mb-2',
          'transition-opacity duration-500',
          { 'opacity-0': $is_dark },
        ]"
      />
      <div
        :class="[
          'i-tabler-tent',
          'mb--0.5',
          'text-xl',
          'transition-opacity duration-500',
          { 'opacity-0': !$is_dark }
        ]"
      />
      <div
        :class="[
          'i-tabler-canary',
          'ml-auto',
          'text-sm',
          'transition-opacity duration-500',
          { 'opacity-0': $is_dark },
        ]"
      />
      <div class="i-mdi-forest-outline ml-4 mr-2 text-xl" />
    </div>
    <!-- Outline -->
    <div class="mb-2 font-bold">
      本文內容
    </div>
    <ul
      class="
        mb-4
        rounded-lg
      "
    >
      <a
        v-for="heading in headings"
        :href="`#${heading.slug}`"
        @click="show_side_panel.set(false)"
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
            'lt-md:py-1',
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
    v-if="$show_side_panel"
    @click="show_side_panel.set(false)"
    class="
      fixed top-0 left-0 w-full h-full z-15
      bg-black/30
      backdrop-blur-sm
    "
  />
</template>