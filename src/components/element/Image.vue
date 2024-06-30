<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    width?: string,
    height?: string,
    ske_width?: string,
    ske_height?: string,
    src: string,
    alt: string,
    caption?: string,
    margin?: boolean,
    rounded?: string,
  }>(), {
    ske_width: '100%',
    ske_height: '100%',
    margin: true,
    rounded: 'md',
  }
);

const img_style = props.width && props.height ? `'width: ${props.width}; height: ${props.height}'` :
  props.width ? `'width: ${props.width}'` :
  props.height ? `'height: ${props.height}'` :
  'null';
const blur_removal = 'this.removeAttribute("blur-2")';
const ske_removal = `this.parentElement.nextElementSibling.remove(); this.parentElement.style = ${img_style}`
</script>

<template>
  <div
    relative
    flex flex-col items-center
    :class="{ 'content-margin': margin }"
  >
    <div :style="{ width: ske_width, height: ske_height }">
      <img
        :class="`rounded-${rounded}`"
        w-full blur-2
        line-height-12 text-center
        :src :alt
        decoding="async" loading="lazy"
        :onload="`${ske_removal}; ${blur_removal}`"
        :onerror="blur_removal"
      />
    </div>
    <!-- skeleton -->
    <div
      :style="{ width: ske_width, height: ske_height }"
      :class="`rounded-${rounded}`"
      absolute top-0 z--1
      flex justify-center items-center
      bg-gray-200
      animate-pulse
    >
      <div i-mdi-image text="6xl gray-400"></div>
    </div>
    <!-- caption -->
    <div v-if="caption" mt-2 text="center sm">
      {{ caption }}
    </div>
  </div>
</template>