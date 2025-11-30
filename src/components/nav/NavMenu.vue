<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '@nanostores/vue';

import { show_nav_menu } from '@/stores/NavMenuStore';
import type { NavLink } from '@/types/content';

defineProps<{
  curr_idx: number,
  links: NavLink[],
}>();

const $show_menu = useStore(show_nav_menu);
const transform = ref('translateY(-140px)');

function onClick() {
  show_nav_menu.set(!show_nav_menu.get());

  if (show_nav_menu.get()) {
    transform.value = '';
  } else {
    transform.value = 'translateY(-140px)';
  }
}
</script>

<template>
  <!-- Button -->
  <button @click="onClick" class="md:hidden pa-2 text-3xl">
    <div class="i-mdi-hamburger-menu" />
  </button>
  <!-- Menu -->
  <div
    class="
      md:hidden
      fixed z--1 w-full top-15 left-0
      pb-2
      bg-nav-bar-light dark:bg-nav-bar-dark
      text-center text-lg
      transition-transform duration-700
    "
    :style="{ transform }"
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
          px-2
        "
      >
        {{ link.text }}
        <div
          v-if="idx === curr_idx"
          class="
            absolute left-0 bottom--2
            w-full h-1
            bg-nav-indicator-light dark:bg-nav-indicator-dark
            rounded-sm
          "
        />
      </a>
    </div>
  </div>
</template>