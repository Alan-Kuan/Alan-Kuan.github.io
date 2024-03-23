<script setup lang="ts">
import { ref } from 'vue';

const light_mode = ref(true);

function onClick() {
  light_mode.value = !light_mode.value;

  if (light_mode.value) {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }
}
</script>

<template>
  <button
    class="text-3xl"
    @click="onClick"
  >
    <div
      v-if="light_mode"
      class="i-mdi-white-balance-sunny"
    >
    </div>
    <div
      v-else
      class="i-mdi-weather-night"
    >
    </div>
  </button>
</template>