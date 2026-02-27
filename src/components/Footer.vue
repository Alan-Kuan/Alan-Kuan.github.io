<script setup lang="ts">
const this_year = new Date().getFullYear();
</script>

<template>
  <footer
    class="
      grid place-items-center
      h-[var(--footer-height)]
      mt-4
    "
  >
    © Alan Kuan 2024 – {{this_year}}
  </footer>
</template>