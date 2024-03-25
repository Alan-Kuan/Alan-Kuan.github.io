<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import type { Link } from '@/types.ts';

const props = defineProps<{
  links: Link[],
}>();

const route = ref('');
var curr_idx = -1;

const link_refs = ref([]);
var link_widths = [];

const indicator_style = reactive({
  width: null,
  transform: null
});

onMounted(() => {
  route.value = window.location.pathname;

  for (let i = 0; i < props.links.length; i++) {
    if (props.links[i].route === route.value) {
      curr_idx = i;
      break;
    }
  }

  for (let i = 0; i < link_refs.value.length; i++) {
    link_widths[i] = link_refs.value[i].clientWidth;
  }

  indicator_style.width = `${link_widths[curr_idx] * 0.8}px`;
});

function onMouseOverLink(target_idx: number) {
  let trans = 0;

  if (target_idx < curr_idx) {
    for (let i = curr_idx; i > target_idx; i--) {
      trans -= 0.5 * link_widths[i] + 0.5 * link_widths[i - 1];
    }
  } else {
    for (let i = curr_idx; i < target_idx; i++) {
      trans += 0.5 * link_widths[i] + 0.5 * link_widths[i + 1];
    }
  }

  indicator_style.width = `${link_widths[target_idx] * 0.8}px`;
  indicator_style.transform = `translateX(${trans}px)`;
}

function onMouseLeaveLink() {
  indicator_style.width = `${link_widths[curr_idx] * 0.8}px`;
  indicator_style.transform = `translateX(0px)`;
}
</script>

<template>
  <div
    v-for="link, idx in links"
    ref="link_refs"
    relative flex="~ col" items-center
  >
    <a
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
      v-if="link.route === route"
      :style="indicator_style"
      absolute bottom--2
      h-1
      bg="nav-indicator-light dark:nav-indicator-dark"
      rounded
      transition-all duration-500
    >
    </div>
  </div>
</template>