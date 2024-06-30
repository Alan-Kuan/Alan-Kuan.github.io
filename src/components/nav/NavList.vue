<script setup lang="ts">
import { ref, onMounted } from 'vue';

import type { Link } from '@/types.ts';

const props = defineProps<{
  curr_idx: number,
  links: Link[],
}>();

const link_refs = ref([]);
var link_widths = [];

const width = ref(null);
const transform = ref(null);

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
  width.value = null;
  transform.value = null;
}
</script>

<template>
  <div
    v-for="link, idx in links"
    relative
    flex="~ col" items-center
  >
    <a
      ref="link_refs"
      :href="link.route"
      @mouseover="onMouseOverLink(idx)"
      @mouseleave="onMouseLeaveLink"
      mx-3 px-2 py-0.5
      bg="hover:nav-highlight"
      text-xl
      rounded
    >
      {{ link.text }}
    </a>
    <!-- current route indicator -->
    <div
      v-if="idx === curr_idx"
      :style="{ width, transform }"
      absolute bottom--2
      class="w-[calc(100%-1.5rem)]" h-1
      bg="nav-indicator-light dark:nav-indicator-dark"
      rounded
      transition-shape duration-500
    />
  </div>
</template>