<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { motion } from 'motion-v';
import { ref } from 'vue';

import type { NavLink } from '@/types/content';
import { show_nav_menu } from '@/stores/NavMenuStore';

const props = defineProps<{
  curr_idx: number,
  links: NavLink[],
}>();

const $show_nav_menu = useStore(show_nav_menu);
const highlighted_idx = ref(props.curr_idx);
</script>

<template>
  <div
    :class="[
      'flex justify-center',
      'transition-all duration-500',
      { 'lt-md:opacity-0 lt-md:invisible': $show_nav_menu }
    ]"
  >
    <div
      v-for="link, idx in links"
      @mouseenter="highlighted_idx = idx"
      @mouseleave="highlighted_idx = curr_idx"
      :class="[
        'relative',
        'mx-3',
        'flex flex-col items-center',
        { 'lt-md:hidden': idx !== highlighted_idx },
      ]"
    >
      <a
        :href="link.route"
        class="
          px-2 py-0.5
          hover:bg-#ffffff55
          text-lg md:text-xl
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
          absolute bottom--2
          w-full h-1
          bg-indicator-info
          rounded-sm
        "
      />
    </div>
  </div>
</template>