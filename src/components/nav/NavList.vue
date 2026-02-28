<script setup lang="ts">
import { motion } from 'motion-v';
import { ref } from 'vue';

import type { NavLink } from '@/types/content';

const props = defineProps<{
  curr_idx: number,
  links: NavLink[],
}>();

const highlighted_idx = ref(props.curr_idx);
</script>

<template>
  <div
    :class="[
      'flex justify-center',
      'transition-all duration-500',
    ]"
  >
    <div
      v-for="link, idx in links"
      @mouseenter="highlighted_idx = idx"
      @mouseleave="highlighted_idx = curr_idx"
      :class="[
        'relative',
        'mx-1 md:mx-3',
        'flex flex-col items-center',
      ]"
    >
      <a
        :href="link.route"
        class="
          px-1
          hover:bg-#ffffff55
          rounded-sm
        "
      >
        {{ link.text }}
      </a>
      <!-- current route indicator -->
      <motion.div
        v-if="idx === highlighted_idx"
        layout-id="route-indicator"
        class="
          absolute bottom--1 md:bottom--1.5
          w-full h-0.75
          bg-indicator-info
          rounded-sm
        "
      />
    </div>
  </div>
</template>