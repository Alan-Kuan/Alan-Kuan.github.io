<script setup lang="ts">
import { motion } from 'motion-v';
import { onMounted, ref } from 'vue';

const theme = ref('');
const choice_made = ref(false);
const expanded = ref(false);

function choose(chosen_theme: string) {
  theme.value = chosen_theme;
  // ensure the animation is played after some mode is chosen
  choice_made.value = true;

  if (chosen_theme === 'system') {
    localStorage.removeItem('theme');
    document.documentElement.classList.toggle(
      'dark',
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  } else {
    localStorage.setItem('theme', chosen_theme);
    document.documentElement.classList.toggle('dark', chosen_theme === 'dark');
  }
}

onMounted(() => {
  const theme_saved = localStorage.getItem('theme');
  theme.value = theme_saved === null ?
    'system' : theme_saved;
});
</script>

<template>
  <div class="relative">
    <!-- Indicator -->
    <button
      @click="expanded = true"
      @blur="expanded = false"
      class="
        relative
        pa-2
        rounded-full
        text-3xl
        @hover:bg-#ffffff55
      "
    >
      <motion.div
        v-if="theme === 'light'"
        :initial="choice_made ? {} : false"
        :animate="{ rotate: '90deg' }"
        :transition="{ duration: 0.5 }"
        class="i-mdi-white-balance-sunny"
      />
      <div v-else-if="theme === 'dark'">
        <motion.div
          :initial="choice_made ? { opacity: 0, y: '-0.5rem' } : false"
          :animate="{ opacity: 100, y: 0 }"
          :transition="{ duration: 0.5 }"
          class="
            i-tabler-star-filled
            absolute top-2 right-3
            text-[8px]
          "
        />
        <motion.div
          :initial="choice_made ? { opacity: 0, y: '-1rem' } : false"
          :animate="{ opacity: 100, y: 0 }"
          :transition="{ duration: 0.4 }"
          class="
            i-tabler-star-filled
            absolute top-4 right-1
            text-[9px]
          "
        />
        <div class="i-tabler-moon" />
      </div>
      <div v-else-if="theme === 'system'">
        <div class="i-mdi-monitor" />
        <motion.div
          :initial="choice_made ? { scale: 0.5, rotate: '-90deg' } : false"
          :animate="{ scale: 1, rotate: '0deg' }"
          :transition="{ duration: 0.5 }"
          class="
            i-mdi-star-four-points-small
            absolute top-1.2
          "
        />
      </div>
    </button>
    <!-- Menu -->
    <div
      :class="[
        'absolute top-0 z-10',
        'grid justify-center',
        'bg-bg-card',
        'rounded-full',
        'text-text-normal text-3xl',
        'shadow-lg',
        'transition-all duration-300',
        { 'opacity-0 invisible': !expanded },
      ]"
    >
      <button @click="() => choose('light')" class="btn">
        <div class="i-mdi-white-balance-sunny" />
      </button>
      <button @click="() => choose('dark')" class="btn relative">
        <div
          class="
            i-tabler-star-filled
            absolute top-2 right-3
            text-[8px]
          "
        />
        <div
          class="
            i-tabler-star-filled
            absolute top-4 right-1
            text-[9px]
          "
        />
        <div class="i-tabler-moon" />
      </button>
      <button @click="() => choose('system')" class="btn relative">
        <div class="i-mdi-monitor" />
        <div
          class="
            i-mdi-star-four-points-small
            absolute top-1.2
          "
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.btn {
  @apply
    pa-2
    rounded-full
    @hover:bg-#ccc/50;
}
</style>