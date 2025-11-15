<script setup lang="ts">
const this_year = new Date().getFullYear();
</script>

<template>
  <footer
    class="
      flex justify-center items-center
      h-[var(--footer-height)]
    "
  >
    © Alan Kuan 2024 – {{this_year}}
  </footer>
</template>