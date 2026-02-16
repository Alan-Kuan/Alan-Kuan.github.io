<script setup lang="ts">
import { motion } from 'motion-v';
import { onMounted, onUnmounted, ref } from 'vue';

let ticking = false;
let last_scroll_top = 0;
const show_top = ref(false);
const show_bottom = ref(false);

function onScroll(e: Event) {
  if (ticking) return;

  setTimeout(() => {
    const content = e.target as HTMLDivElement;
    const curr_scroll_top = content.scrollTop;
    show_top.value = curr_scroll_top < last_scroll_top &&
      curr_scroll_top > 0;
    show_bottom.value = curr_scroll_top > content.clientHeight;
    last_scroll_top = curr_scroll_top;
    ticking = false;
  }, 20);

  ticking = true;
}

function onClick() {
  const content = document.getElementById('base-content')!;
  content.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  const content = document.getElementById('base-content')!;
  content.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  const content = document.getElementById('base-content')!;
  content.removeEventListener('scroll', onScroll);
});
</script>

<template>
  <!-- For Narrow Screen -->
  <motion.button
    :initial="{ y: -100 }"
    :animate="{ y: show_top ? 0 : -100 }"
    @click="onClick"
    class="
      md:hidden
      fixed left-1/2 -translate-x-1/2
      top-[calc(var(--navbar-height)+var(--spacing))]
      flex items-center
      pa-1
      bg-bg-card
      rounded-full
      shadow-lg
      active:brightness-120
    "
  >
    <div class="pa-1 icon">
      <div class="i-mdi-arrow-up" />
    </div>
    <div class="mx-1">Back to top</div>
  </motion.button>

  <!-- For Wide Screen -->
  <motion.button
    :initial="{ y: 100 }"
    :animate="{ y: show_bottom ? 0 : 100 }"
    @click="onClick"
    class="
      lt-md:hidden
      fixed bottom-8 right-4 z-10
      pa-4
      shadow-lg
      hover:brightness-120
      active:brightness-140
      icon
    "
  >
    <div class="i-mdi-arrow-up text-xl" />
  </motion.button>
</template>

<style scoped>
.icon {
  @apply
    bg-bg-top
    text-text-light
    rounded-50%;
}
</style>