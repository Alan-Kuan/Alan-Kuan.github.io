<script setup lang="ts">
import { ref, onMounted } from 'vue';

const light_mode = ref(true);

function onClick() {
  if (light_mode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  light_mode.value = !light_mode.value;
  localStorage.setItem('light_mode', light_mode.value);
}

onMounted(() => {
  const light_mode_saved = localStorage.getItem('light_mode');
  if (light_mode_saved !== undefined) {
    light_mode.value = light_mode_saved === 'true';
  }
});
</script>

<template>
  <button
    @click="onClick"
    pa-2
    bg="hover:nav-highlight"
    rounded-full
    text-3xl
  >
    <div
      v-if="light_mode"
      i-mdi-white-balance-sunny
    >
    </div>
    <div
      v-else
      i-mdi-weather-night
    >
    </div>
  </button>
</template>