<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const show = ref(false);

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});

function onScroll() {
  const visible_height = document.documentElement.clientHeight;
  show.value = window.scrollY > visible_height;
}

function onClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <Transition>
    <button
      v-show="show"
      pa-4
      bg="profile_card-link-light dark:profile_card-link-dark"
      text="text-light dark:text-dark"
      rounded-50%
      shadow
      hover:brightness-120
      active:brightness-140
      @click="onClick"
    >
      <div i-mdi-arrow-up text-xl />
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