<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useStore } from '@nanostores/vue';

import { show_viewer, zoomed_img } from '@/stores/ImageViewerStore';

const $show_viewer = useStore(show_viewer);
const $zoomed_img = useStore(zoomed_img);

function handleClose() {
  show_viewer.set(false);
  zoomed_img.set({ src: '', alt: '' });
}

function onEscKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape' && show_viewer.get()) {
    handleClose();
  }
}

onMounted(() => {
  document.addEventListener('keydown', onEscKeyDown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', onEscKeyDown);
});
</script>

<template>
  <Transition>
    <div
      v-if="$show_viewer"
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
        :src="$zoomed_img.src"
        :alt="$zoomed_img.alt"
        class="
          w-100% lg:w-auto
          lg:h-80%
          cursor-zoom-out
        "
      />
      <!-- description -->
      <div
        v-if="$zoomed_img.title"
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
        {{ $zoomed_img.title }}
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.v-enter-active, .v-leave-active {
  /* Note: add this so that the overlay waits the image */
  transition-duration: 0.3s;

  img {
    transition: all 0.3s ease;
  }
}

.v-enter-from, .v-leave-to {
  img {
    opacity: 0.3;
    transform: scale(70%);
  }
}
</style>