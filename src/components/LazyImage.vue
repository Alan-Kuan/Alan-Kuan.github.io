<script setup lang="ts">
import { decode } from 'blurhash';
import { onMounted, ref, useTemplateRef } from 'vue';

const props = defineProps<{
  src: string,
  blurhash?: string,
  width: number,
  height: number,
  alt: string,
  title?: string,
}>();

const canvas = useTemplateRef<HTMLCanvasElement>('canvas');
const img = useTemplateRef<HTMLImageElement>('img');
const is_loading = ref(true);
const is_error = ref(false);

function onLoad() {
  is_loading.value = false;
}

function onError() {
  is_loading.value = false;
  is_error.value = true;
}

onMounted(() => {
  // the image has been loaded before hydration
  if (img.value?.complete) {
    if (img.value.naturalWidth == 0) {
      onError();
    } else {
      onLoad();
    }
    return;
  }

  // decode the blurhash
  if (canvas.value && props.blurhash) {
    const pixels = decode(props.blurhash, props.width, props.height);
    const ctx = canvas.value.getContext('2d');
    if (ctx) {
      const img_data = ctx.createImageData(props.width, props.height);
      img_data.data.set(pixels);
      ctx.putImageData(img_data, 0, 0);
    }
  }
});
</script>

<template>
  <div
    class="relative overflow-hidden"
    :style="`width: ${width}px; height: ${height}px;`"
  >
    <!-- Skeleton (BlurHash) -->
    <canvas
      v-if="blurhash"
      ref="canvas"
      :width :height
      :class="[
        'absolute inset-0',
        { 'opacity-0': !is_loading },
        'transition-opacity duration-500',
      ]"
    />
    <!-- Image -->
    <img
      ref="img"
      :src
      :alt :title
      loading="lazy"
      @load="onLoad"
      @error="onError"
      :class="[
        'w-full h-full object-cover',
        { 'pa-2': is_error },
      ]"
    />
    <!-- Placeholder (Reveal on Error) -->
    <div
      :class="[
        'absolute inset-0 z--1',
        'flex justify-center items-center',
        'bg-gray-300 dark:bg-gray-500',
        { 'invisible opacity-0': !is_error },
        'transition-opacity duration-500',
      ]"
    >
      <div class="i-mdi-image-remove text-8xl" />
    </div>
  </div>
</template>