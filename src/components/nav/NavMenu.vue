<script setup lang="ts">
import { ref } from 'vue';

import type { Link } from '@/types/profile';

const props = defineProps<{
  curr_idx: number,
  links: Link[],
}>();

const show_menu = ref(false);
const transform = ref('translateY(-140px)');
const opacity = ref(0);

function onClick() {
  show_menu.value = !show_menu.value;

  if (show_menu.value) {
    opacity.value = 1;
    transform.value = null;
  } else {
    opacity.value = 0;
    transform.value = 'translateY(-140px)';
  }
}
</script>

<template>
  <!-- Title -->
  <div
    v-if="curr_idx > -1"
    class="
      md:hidden
      absolute top-6.5 left-0 right-0 mx-auto
      text-center text-lg
      transition-opacity duration-500
    "
    :style="{ opacity: 1 - opacity }"
  >
    <div class="inline-block">
      {{ links[curr_idx].text }}
      <div
        class="
          mt-1
          w-full h-1
          bg-nav-indicator-light dark:bg-nav-indicator-dark
          rounded-sm
        "
      />
    </div>
  </div>
  <!-- Button -->
  <button @click="onClick" class="md:hidden pa-2 text-3xl">
    <div class="i-mdi-hamburger-menu" />
  </button>
  <!-- Menu -->
  <div
    class="
      md:hidden
      fixed z--1 w-full top-20 left-0
      pb-2
      bg-nav-bar-light dark:bg-nav-bar-dark
      text-center text-lg
      transition-transform duration-1000
    "
    :style="{ transform }"
  >
    <div
      v-for="link, idx in links"
      class="
        pa-2
        transition-opacity duration-500
      "
      :style="{ opacity }"
    >
      <a :href="link.route" class="inline-block">
        {{ link.text }}
        <div
          v-if="idx === curr_idx"
          class="
            mt-1
            w-full h-1
            bg-nav-indicator-light dark:bg-nav-indicator-dark
            rounded-sm
          "
        />
      </a>
    </div>
  </div>
</template>