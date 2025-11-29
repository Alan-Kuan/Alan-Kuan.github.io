<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue';

const expanded = ref(false);
const theme = ref('');

const indicator = useTemplateRef('indicator');

function choose(chosen_theme: str) {
  // ensure the animation is played after some mode is chosen
  indicator.value.classList.add('chosen');
  theme.value = chosen_theme;

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
      ref="indicator"
      @click="expanded = true"
      @blur="expanded = false"
      class="
        relative
        pa-2
        rounded-full
        text-3xl
        @hover:bg-nav-highlight
      "
    >
      <div
        v-if="theme === 'light'"
        id="sun"
        class="i-mdi-white-balance-sunny"
      />
      <div v-else-if="theme === 'dark'">
        <div
          id="star-1"
          class="
            i-tabler-star-filled
            absolute top-2 right-3
            text-[8px]
          "
        />
        <div
          id="star-2"
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
        <div
          id="blink"
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
        'bg-page-light',
        'rounded-full',
        'text-text-dark text-3xl',
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

.chosen #sun { animation: spin-enter 0.5s forwards; }

.chosen #star-1 { animation: drop-in-1 0.3s forwards; }

.chosen #star-2 { animation: drop-in-2 0.2s forwards; }

.chosen #blink { animation: spin-grow 0.5s forwards; }

@keyframes spin-enter {
  0% { @apply rotate--90deg; }
  100% { @apply rotate-0deg; }
}

@keyframes drop-in-1 {
  0% { @apply opacity-0 top-0; }
  100% { @apply opacity-100 top-2; }
}

@keyframes drop-in-2 {
  0% { @apply opacity-0 top-2; }
  100% { @apply opacity-100 top-4; }
}

@keyframes spin-grow {
  0% { @apply scale-50% rotate--90deg; }
  100% { @apply scale-100% rotate-0deg; }
}
</style>