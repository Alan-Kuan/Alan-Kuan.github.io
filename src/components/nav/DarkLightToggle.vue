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
      class="indicator-btn"
    >
      <div v-if="theme === 'light'" class="icon-wrapper">
        <motion.div
          :initial="choice_made ? {} : false"
          :animate="{ rotate: '90deg' }"
          :transition="{ duration: 0.5 }"
          class="i-mdi-white-balance-sunny"
        />
      </div>
      <div v-else-if="theme === 'dark'" class="icon-wrapper">
        <motion.div
          :initial="choice_made ? { opacity: 0, y: '-0.5rem' } : false"
          :animate="{ opacity: 100, y: 0 }"
          :transition="{ duration: 0.5 }"
          class="icon-star-1"
        />
        <motion.div
          :initial="choice_made ? { opacity: 0, y: '-1rem' } : false"
          :animate="{ opacity: 100, y: 0 }"
          :transition="{ duration: 0.4 }"
          class="icon-star-2"
        />
        <div class="i-tabler-moon" />
      </div>
      <div v-else-if="theme === 'system'" class="icon-wrapper">
        <div class="i-mdi-monitor" />
        <motion.div
          :initial="choice_made ? { scale: 0.5, rotate: '-90deg' } : false"
          :animate="{ scale: 1, rotate: '0deg' }"
          :transition="{ duration: 0.5 }"
          class="icon-spark"
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
        'shadow-lg',
        'transition-all duration-300',
        { 'opacity-0 invisible': !expanded },
      ]"
    >
      <button @click="() => choose('light')" class="menu-btn">
        <div class="icon-wrapper">
          <div class="i-mdi-white-balance-sunny" />
        </div>
      </button>
      <button @click="() => choose('dark')" class="menu-btn">
        <div class="icon-wrapper">
          <div class="icon-star-1" />
          <div class="icon-star-2" />
          <div class="i-tabler-moon" />
        </div>
      </button>
      <button @click="() => choose('system')" class="menu-btn">
        <div class="icon-wrapper">
          <div class="i-mdi-monitor" />
          <div class="icon-spark" />
        </div>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
%btn {
  @apply
    flex justify-center items-center
    w-9.2 h-9.2 md:w-11.5 md:h-11.5
    pa-1.6 md:pa-2
    rounded-full;
}
.indicator-btn {
  @extend %btn;
  @apply
    @hover:bg-#ffffff55;
}
.menu-btn {
  @extend %btn;
  @apply
    text-text-normal
    @hover:bg-#ccc/50;
}

.icon-wrapper {
  @apply
    relative
    pa-2
    text-3xl
    lt-md:scale-80;
}

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

.icon-spark {
  @apply
    i-mdi-star-four-points-small
    absolute top-1.2;
}
</style>