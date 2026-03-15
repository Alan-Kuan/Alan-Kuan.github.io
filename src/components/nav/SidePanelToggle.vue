<script setup lang="ts">
import { show_side_panel } from '@/stores/SidePanelStore';
</script>

<template>
  <button
    @click="show_side_panel.set(true)"
    class="pa-2 text-2xl"
  >
    <div class="i-mdi-menu" />
  </button>
</template>