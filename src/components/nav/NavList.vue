<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Link } from '@/types.ts';

defineProps<{
  links: Link[],
}>();

const route = ref('');

onMounted(() => {
  route.value = window.location.pathname;
});
</script>

<template>
  <div
    v-for="link in links"
    class="relative flex flex-col items-center"
  >
    <a
      class="
      mx-3 px-2 py-0.5
      text-xl text-#ffeecd hover:bg-#9e775f
      font-medium
      rounded
      "
      :href="link.route"
    >
      {{ link.text }}
    </a>
    <!-- current route indicator -->
    <div
      v-if="link.route === route"
      class="absolute bottom--2 w-80% h-1 bg-#85c0da rounded"
    >
    </div>
  </div>
</template>