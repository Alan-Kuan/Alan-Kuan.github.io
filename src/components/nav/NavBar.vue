<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { motion, AnimatePresence } from 'motion-v';

import NavList from '@/components/nav/NavList.vue';
import DarkLightToggle from '@/components/nav/DarkLightToggle.vue';

import { links } from "@/content/nav_links";

const props = defineProps<{
  route_prefix: string,
  post_title?: string,
}>();

const curr_idx = props.route_prefix === '/' ?
  links.findIndex(link => link.route === '/') :
  links.findIndex(link => link.route.startsWith(props.route_prefix));

const below_post_title = ref(false);
let observer: IntersectionObserver;

onMounted(() => {
  const content = document.getElementById('base-content')!;

  observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      below_post_title.value = !entry.isIntersecting;
    }
  }, { root: content });

  document.querySelectorAll('#post-banner')
    .forEach(banner => observer.observe(banner));
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <nav
    :class="[
      'relative z-10',
      'grid grid-cols-[auto_auto_1fr_auto] items-center',
      'w-full h-[var(--navbar-height)]',
      'px-2 md:px-5',
      'bg-bg-top',
      'md:text-lg text-text-light',
      'lt-md:transition-all lt-md:duration-300',
      { 'lt-md:h-0 lt-md:opacity-0': below_post_title }
    ]"
  >
    <!-- Logo -->
    <a href="/">
      <img
        src="/favicon.svg"
        alt="logo"
        class="
          w-8 md:w-12
          dark:saturate-70
          logo
        "
      />
    </a>
    <!-- Nav List -->
    <div class="ml-4 flex">
      <NavList :curr_idx :links client:idle />
      <div v-if="post_title" class="lt-md:hidden">｜</div>
    </div>
    <!-- Post Title -->
    <AnimatePresence>
      <motion.div
        v-if="post_title && below_post_title"
        :initial="{ y: -10, opacity: 0 }"
        :animate="{ y: 0, opacity: 1 }"
        :exit="{ y: -10, opacity: 0 }"
        class="ml-3 truncate lt-md:hidden"
      >
        {{ post_title }}
      </motion.div>
    </AnimatePresence>
    <!-- Buttons -->
    <div class="ml-auto flex md:pr-10">
      <DarkLightToggle client:idle />
    </div>
  </nav>
</template>

<style scoped>
  .logo {
    filter: drop-shadow(0 1px rgba(255, 255, 255, 0.5))
      drop-shadow(0 -1px rgba(255, 255, 255, 0.5))
      drop-shadow(1px 0 rgba(255, 255, 255, 0.5))
      drop-shadow(-1px 0 rgba(255, 255, 255, 0.5));
  }
  .logo:hover {
    filter: drop-shadow(2px 0 2px rgba(255, 255, 255, 0.5))
      drop-shadow(-2px 0 2px rgba(255, 255, 255, 0.5))
      drop-shadow(0 2px 2px rgba(255, 255, 255, 0.5))
      drop-shadow(0 -2px 2px rgba(255, 255, 255, 0.5));
  }
</style>