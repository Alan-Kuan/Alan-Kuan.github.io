<script setup>
import logo_img from '../assets/logo.png';

defineProps({
  links: Array,
});
</script>

<template>
  <nav
    class="
      h-20
      px-5 py-2.5
      grid grid-cols-3
      bg-light-primary dark:bg-dark-primary
    "
  >
    <div>
      <a href="/">
        <img
          class="w-15 logo"
          :src="logo_img.src"
        />
      </a>
    </div>
    <div class="flex items-center">
      <a
        v-for="link in links"
        class="
          mx-3
          text-xl text-#ffeecd hover:text-#fda229
          font-medium
        "
        :href="link.route"
      >
        {{ link.text }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
.logo:hover {
  filter: drop-shadow(2px 0 2px rgba(255, 255, 255, 0.5))
    drop-shadow(-2px 0 2px rgba(255, 255, 255, 0.5))
    drop-shadow(0 2px 2px rgba(255, 255, 255, 0.5))
    drop-shadow(0 -2px 2px rgba(255, 255, 255, 0.5));
}
</style>