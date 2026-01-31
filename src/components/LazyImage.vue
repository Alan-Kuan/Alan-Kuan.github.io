<script setup lang="ts">
import { decode } from 'blurhash';
import { computed, onMounted, ref, useTemplateRef } from 'vue';

import type { ImgAttr } from '@/types/image';

const props = defineProps<{
  src: string,
  img_attr?: ImgAttr,
  alt: string,
  title?: string,
  obj_pos?: string,
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

const aspect_ratio = props.img_attr?.aspect_ratio;
const width = computed(() => {
  if (!aspect_ratio) return 0;
  return aspect_ratio > 1 ? 500 : Math.round(500 * aspect_ratio);
});
const height = computed(() => {
  if (!aspect_ratio) return 0;
  return aspect_ratio > 1 ? Math.round(500 / aspect_ratio) : 500;
});

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
  if (canvas.value && props.img_attr) {
    const pixels = decode(props.img_attr.blurhash, width.value, height.value);
    const ctx = canvas.value.getContext('2d');

    if (ctx) {
      const img_data = ctx.createImageData(width.value, height.value);
      img_data.data.set(pixels);
      ctx.putImageData(img_data, 0, 0);
    }
  }
});
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Skeleton (BlurHash) -->
    <canvas
      v-if="img_attr"
      ref="canvas"
      :width :height
      :class="[
        'absolute inset-0',
        'w-full h-full object-cover',
        { 'opacity-0': !is_loading },
        'transition-opacity duration-500',
      ]"
    />
    <!-- Skeleton (Animation) -->
    <div
      v-else
      :class="[
        'absolute inset-0',
        'bg-bg-card',
        'brightness-110',
        is_loading ? 'animate-pulse' : 'opacity-0',
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
      :style="obj_pos && { 'object-position': obj_pos }"
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