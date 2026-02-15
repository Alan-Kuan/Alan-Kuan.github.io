<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { motion } from 'motion-v';

import { show_nav_menu } from '@/stores/NavMenuStore';
import type { NavLink } from '@/types/content';

defineProps<{
  curr_idx: number,
  links: NavLink[],
}>();

const $show_menu = useStore(show_nav_menu);
</script>

<template>
  <div>
    <!-- Button -->
    <button
      @click="show_nav_menu.set(!$show_menu)"
      @blur="show_nav_menu.set(false)"
      class="md:hidden pa-1.6 text-2xl"
    >
      <div class="i-mdi-hamburger-menu" />
    </button>
    <!-- Menu -->
    <!-- NOTE: z-index is relative to nav bar's -->
    <motion.div
      :initial="{ y: '-100%' }"
      :animate="{ y: $show_menu ? 0 : '-100%' }"
      :transition="{ duration: 0.7 }"
      class="
        md:hidden
        fixed z--1 w-full top-[var(--navbar-height)] left-0
        pb-2
        bg-bg-top
        text-center
      "
    >
      <div
        v-for="link, idx in links"
        :class="[
          'pa-2',
          'transition-all duration-300',
          { 'opacity-0 invisible': !$show_menu },
        ]"
      >
        <a
          :href="link.route"
          class="
            relative
            inline-block
            px-1
          "
        >
          {{ link.text }}
          <div
            v-if="idx === curr_idx"
            class="
              absolute left-0 bottom--1
              w-full h-0.75
              bg-indicator-info
              rounded-sm
            "
          />
        </a>
      </div>
    </motion.div>
  </div>
</template>