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

function onEscKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape' && state.show) {
    handleClose();
  }
}

function onImgClicked(event: MouseEvent) {
  const el = event.target as HTMLImageElement;
  state.src = el.src;
  state.alt = el.alt;
  state.title = el.title;
  state.show = true;

  // disable scrolling
  document.getElementsByTagName('body')[0].style = 'overflow: hidden';
}

onMounted(() => {
  // add click handler to all post images
  for (const img of document.querySelectorAll<HTMLImageElement>('.post-img')) {
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
    @click="handleClose()"
    class="
      fixed top-0 left-0 w-full h-full z-15
      flex justify-center items-center
      bg-black/30
      backdrop-blur-sm
    "
  >
    <!-- image -->
    <img
      :src="state.src"
      :alt="state.alt"
      class="
        w-100% lg:w-auto
        lg:h-80%
      "
    />
    <!-- description -->
    <div
      v-if="state.title"
      @click.stop
      class="
        absolute bottom-0
        flex justify-center items-center
        w-full min-h-20
        pa-3
        bg-black/50
        text-white
      "
    >
      {{ state.title }}
    </div>
  </div>
</template>