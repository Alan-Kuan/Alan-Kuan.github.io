<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  src: string,
  alt: string,
  title?: string,
}>();

// Set `img_src` on mounted in case that the class list is
// modified before Vue is mounted, which causes hydration
// class mismatch error.
const img_src = ref(null);
onMounted(() => img_src.value = props.src);
</script>

<template>
  <img
    :src="img_src" :alt :title
    loading="lazy"
    onload="this.classList.remove('blur-2')"
    onerror="this.classList.remove('text-transparent', 'blur-2')"
    class="
      blur-2
      text-transparent
      transition-filter duration-500
    "
  />
</template>