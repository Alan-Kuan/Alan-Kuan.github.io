<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from '@nanostores/vue';

import type { NavLink } from '@/types/content';
import { show_nav_menu } from '@/stores/NavMenuStore';

const props = defineProps<{
  curr_idx: number,
  links: NavLink[],
}>();

const link_refs = ref<HTMLAnchorElement[]>([]);
var link_widths: number[] = [];
const $show_nav_menu = useStore(show_nav_menu);

const width = ref('');
const transform = ref('');

onMounted(() => {
  link_refs.value.forEach((link_ele, i) => {
    link_widths[i] = link_ele.clientWidth;
  });
});

function onMouseOverLink(target_idx: number) {
  const dir = target_idx < props.curr_idx ? -1 : 1;
  let offset = 0;

  for (let i = props.curr_idx; i != target_idx; i += dir) {
    // 24 is the margin (mx-3 -> 3 * 2 * 0.25 * 16 = 24)
    offset += dir * (0.5 * (link_widths[i] + link_widths[i + dir]) + 24);
  }

  width.value = `${link_widths[target_idx]}px`;
  transform.value = `translateX(${offset}px)`;
}

function onMouseLeaveLink() {
  width.value = '';
  transform.value = '';
}
</script>

<template>
  <div
    :class="[
      'flex', 'justify-center',
      'transition-opacity', 'duration-500',
      { 'lt-md:opacity-0 lt-md:invisible': $show_nav_menu }
    ]"
  >
    <div
      v-for="link, idx in links"
      class="
        relative
        flex flex-col items-center
      "
    >
      <a
        ref="link_refs"
        :href="link.route"
        @mouseover="onMouseOverLink(idx)"
        @mouseleave="onMouseLeaveLink"
        :class="[
          'mx-3', 'px-2', 'py-0.5',
          'hover:bg-nav-highlight',
          'text-xl',
          'rounded-sm',
          { 'lt-md:hidden': idx !== curr_idx }
        ]"
      >
        {{ link.text }}
      </a>
      <!-- current route indicator -->
      <div
        v-if="idx === curr_idx"
        class="
          absolute bottom--2
          w-[calc(100%-1.5rem)] h-1
          bg-nav-indicator-light dark:bg-nav-indicator-dark
          rounded-sm
          transition-shape duration-500
        "
        :style="{ width, transform }"
      />
    </div>
  </div>
</template>