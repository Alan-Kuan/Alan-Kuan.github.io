<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const show = ref(false);

function onScroll() {
  const visible_height = document.documentElement.clientHeight;
  const content = document.getElementById('base-content')!;
  show.value = content.scrollTop > visible_height;
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
  <Transition>
    <button
      v-show="show"
      @click="onClick"
      class="
        pa-3 md:pa-4
        bg-bg-top
        text-text-light
        rounded-50%
        shadow-lg
        hover:brightness-120
        active:brightness-140
      "
    >
      <div class="i-mdi-arrow-up text-xl" />
    </button>
  </Transition>
</template>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: transform 0.25s ease;
}

.v-enter-from, .v-leave-to {
  transform: translateY(100px);
}
</style>