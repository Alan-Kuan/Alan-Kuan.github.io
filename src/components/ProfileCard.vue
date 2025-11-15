<script setup lang="ts">
import type { Profile } from '@/types/profile';

defineProps<Profile>();
</script>

<template>
  <div
    class="
      flex md:flex-col items-center justify-center md:justify-start
      pa-5
      bg-profile_card-light dark:bg-profile_card-dark
    "
  >
    <!-- Avatar -->
    <slot name="avatar" />

    <div class="lt-md:ml-1 flex flex-col justify-center">
      <!-- Name -->
      <div class="md:mt-5 text-xl md:text-2xl text-center font-medium">
        {{ name }}
      </div>
      <!-- Title -->
      <div class="mt-2 text-center">
        {{ title }} @
        <a :href="org.url" target="_blank" class="underline">
          {{ org.text }}
        </a>
      </div>
      <!-- Links -->
      <div
        class="
          w-50 mt-3
          flex justify-around
          text-3xl text-profile_card-link-light dark:text-profile_card-link-dark
        "
      >
        <a
          v-for="link in links"
          :href="link.url"
          :title="link.title"
          target="_blank"
          class="hover:brightness-120%"
        >
          <div :class="`i-mdi-${link.icon}`" />
        </a>
        <a
          href="/#"
          :title="email.title"
          :data-email="email.addr_b64"
          onfocus="this.href = 'mailto:' + atob(this.dataset.email) || ''"
          class="hover:brightness-120%"
        >
          <div class="i-mdi-email"></div>
        </a>
      </div>
    </div>

    <!-- Intro -->
    <div
      class="
        lt-md:hidden
        mt-5
        indent-8
        overflow-y-auto
      "
    >
      <slot name="intro" />
    </div>
  </div>
</template>