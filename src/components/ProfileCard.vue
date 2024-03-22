<script setup lang="ts">
import Image from '@/components/common/Image.vue';
import type { Profile } from '@/types.ts';

defineProps<Profile>();
</script>

<template>
  <div class="
    flex flex-col items-center
    pa-5
    bg-light-bg-profile_card dark:bg-dark-bg-profile_card"
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
    <div
      class="
        w-50 mt-5
        flex justify-around
        text-3xl text-light-secondary
      "
    >
      <a
        v-for="link in links"
        class="hover:text-blue-400"
        :href="link.url"
        :title="link.title"
        target="_blank"
      >
        <div :class="`i-mdi-${link.icon}`" />
      </a>
      <a
        class="hover:text-blue-400"
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