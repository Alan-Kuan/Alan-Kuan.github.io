<script setup lang="ts">
import { ref, onMounted } from 'vue';

const light_mode = ref(true);

function onClick() {
  light_mode.value = !light_mode.value;
  if (light_mode.value) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
  localStorage.setItem('light_mode', light_mode.value);
}

onMounted(() => {
  const light_mode_saved = localStorage.getItem('light_mode');
  if (light_mode_saved !== undefined) {
    light_mode.value = light_mode_saved === 'true';
  }
  if (light_mode.value) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
});
</script>

<template>
  <button
    @click="onClick"
    class="
      relative
      pa-2
      @hover:bg-nav-highlight
      rounded-full
      text-3xl
      group
    "
  >
    <div
      v-if="light_mode"
      class="
        i-mdi-white-balance-sunny
        group-hover:rotate-180 transition-transform duration-1000
      "
    />
    <div v-else>
      <div
        class="
          i-tabler-star-filled
          absolute top-0 right-3
          opacity-0
          group-hover:opacity-100 group-hover:top-2
          transition-all duration-300
        "
        style="font-size: 8px;"
      />
      <div
        class="
          i-tabler-star-filled
          absolute top-2 right-1
          opacity-0
          group-hover:opacity-100 group-hover:top-4
          transition-all duration-200
        "
        style="font-size: 9px;"
      />
      <div class="i-tabler-moon" />
    </div>
  </button>
</template>