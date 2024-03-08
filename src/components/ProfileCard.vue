<script setup>
defineProps({
  profile_url: String,
  name: String,
  title: String,
  links: Array,
  intro: String,
});
</script>

<template>
  <div class="
    flex flex-col items-center
    w-1/3 h-screen pa-5
    bg-light-bg-profile_card dark:bg-dark-bg-profile_card"
  >
    <img
      class="w-50 rounded-md"
      alt="my GitHub avatar"
      :src="profile_url"
    />
    <div class="mt-5 text-2xl">
      {{ name }}
    </div>
    <div class="mt-3">
      {{ title }}
    </div>
    <div class="w-50 mt-5 flex justify-around">
      <a
        v-for="link in links"
        class="text-3xl text-light-secondary hover:text-blue-400"
        :href="link.url"
        :title="link.title"
        target="_blank"
      >
        <div :class="`i-mdi-${link.icon}`" />
      </a>
    </div>
    <div class="mt-5">
      {{ intro }}
    </div>
  </div>
</template>