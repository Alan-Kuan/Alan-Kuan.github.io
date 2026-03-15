<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { motion } from 'motion-v';
import { ref } from 'vue';

import { is_dark } from '@/stores/ThemeStore';

const $is_dark = useStore(is_dark);
const btn_clicked = ref(false);
let chosen_theme: string | null = null;

function toggleTheme() {
  // ensure the animation is played after the button is clicked
  btn_clicked.value = true;
  is_dark.set(!is_dark.get());

  const should_be_dark = is_dark.get();
  const media_query = window.matchMedia('(prefers-color-scheme: dark)');

  document.documentElement.classList.toggle('dark', should_be_dark);

  if (chosen_theme === null) {
    chosen_theme = should_be_dark ? 'dark' : 'light';
    localStorage.setItem('theme', chosen_theme);
  } else {
    const system_prefers_dark = media_query.matches;
    if ((should_be_dark && system_prefers_dark) || (!should_be_dark && !system_prefers_dark)) {
      chosen_theme = null;
      localStorage.removeItem('theme');
    } else {
      chosen_theme = should_be_dark ? 'dark' : 'light';
      localStorage.setItem('theme', chosen_theme);
    }
  }
}
</script>

<template>
  <button
    @click="toggleTheme"
    class="
      relative
      w-11.5 h-11.5
      pa-2
      text-3xl
      rounded-full
      lt-md:zoom-80
      @hover:bg-#ffffff55
    "
  >
    <template v-if="$is_dark">
      <motion.div
        :initial="btn_clicked ? { opacity: 0, y: '-0.5rem' } : false"
        :animate="{ opacity: 100, y: 0 }"
        :transition="{ duration: 0.5 }"
        class="icon-star-1"
      />
      <motion.div
        :initial="btn_clicked ? { opacity: 0, y: '-1rem' } : false"
        :animate="{ opacity: 100, y: 0 }"
        :transition="{ duration: 0.4 }"
        class="icon-star-2"
      />
      <div class="i-tabler-moon" />
    </template>
    <template v-else>
      <motion.div
        :initial="btn_clicked ? {} : false"
        :animate="{ rotate: '90deg' }"
        :transition="{ duration: 0.5 }"
        class="i-mdi-white-balance-sunny"
      />
    </template>
  </button>
</template>

<style scoped>
.icon-star-1 {
  @apply
    i-tabler-star-filled
    absolute top-2 right-3
    text-[8px];
}

.icon-star-2 {
  @apply
    i-tabler-star-filled
    absolute top-4 right-1
    text-[9px];
}
</style>