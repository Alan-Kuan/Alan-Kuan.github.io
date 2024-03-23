<script setup lang="ts">
import Image from '@/components/common/Image.vue';
import type { Profile } from '@/types.ts';

defineProps<Profile>();
</script>

<template>
  <div class="
    flex flex-col items-center
    pa-5
    bg-profile_card-light dark:bg-profile_card-dark"
  >
    <Image
      w="50"
      min_h="50"
      alt="My GitHub Avatar"
      :src="profile_url"
      rounded
    />

    <div class="mt-5 text-2xl">
      {{ name }}
    </div>
    <div class="mt-3">
      {{ title }}
    </div>

    <!-- Links -->
    <div
      class="
        w-50 mt-5
        flex justify-around
        text-3xl text-link-light dark:text-link-dark
      "
    >
      <a
        v-for="link in links"
        class="hover:opacity-70%"
        :href="link.url"
        :title="link.title"
        target="_blank"
      >
        <div :class="`i-mdi-${link.icon}`" />
      </a>
      <a
        class="hover:opacity-70%"
        href="#"
        title="My E-mail Address"
        :data-email="email_b64"
        onfocus="this.href = 'mailto:' + atob(this.dataset.email) || ''"
      >
        <div class="i-mdi-email" />
      </a>
    </div>

    <div class="mt-5 overflow-y-scroll">
      {{ intro }}
    </div>
  </div>
</template>