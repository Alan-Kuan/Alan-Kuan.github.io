<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue';

const state = reactive({
  show: false,
  src: '',
  alt: '',
  title: '',
});

function handleClose() {
  state.show = false;

  // re-enable scrolling
  document.getElementsByTagName('body')[0].removeAttribute('style');
}

function onEscKeyDown(event) {
  if (event.key === 'Escape' && state.show) {
    handleClose();
  }
}

function onImgClicked(event) {
  const el = event.target;
  state.src = el.src;
  state.alt = el.alt;
  state.title = el.title;
  state.show = true;

  // disable scrolling
  document.getElementsByTagName('body')[0].style = 'overflow: hidden';
}

onMounted(() => {
  // add click handler to all post images
  for (const img of document.getElementsByClassName('post-img')) {
    img.addEventListener('click', onImgClicked);
  }

  document.addEventListener('keydown', onEscKeyDown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', onEscKeyDown);
});
</script>

<template>
  <div
    v-show="state.show"
    fixed top-0 left-0 w-full h-full z-15
    flex justify-center items-center
    bg="black opacity-30"
    backdrop-blur
    @click="handleClose()"
  >
    <!-- image -->
    <img
      w="100% lg:auto"
      h="lg:80%"
      :src="state.src"
      :alt="state.alt"
    />
    <!-- description -->
    <div
      v-if="state.title"
      absolute bottom-0
      flex justify-center items-center
      w-full min-h-20
      pa-3
      bg="black opacity-50"
      text-white
      @click.stop
    >
      {{ state.title }}
    </div>
  </div>
</template>