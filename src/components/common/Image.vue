<script setup lang="ts">
defineProps<{
  src: string,
  alt: string,
  w?: string,
  h?: string,
  min_w?: string,
  min_h?: string,
  rounded?: boolean,
}>();
</script>

<template>
  <div :class="`
    relative
    min-w-${min_w} min-h-${min_h}
  `">
    <img
      :class="`
        absolute z-1
        w-${w} h-${h}
        ${ rounded ? 'rounded-xl' : '' }
      `"
      :src="src"
      :alt="alt"
    />
    <!-- skeleton -->
    <div
      :class="`
        w-${w} h-${h}
        min-w-${min_w} min-h-${min_h}
        flex justify-center items-center
        bg-gray-200
        ${ rounded ? 'rounded-xl' : '' }
        animate-pulse
      `"
    >
      <div class="i-mdi-image text-6xl text-gray-400"></div>
    </div>
  </div>
</template>