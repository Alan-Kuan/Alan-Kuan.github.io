<script setup lang="ts">
import Image from '@/components/common/Image.vue';
import type { Profile } from '@/types.ts';

defineProps<Profile>();
</script>

<template>
  <div
    flex="~ col" items-center
    pa-5
    bg="profile_card-light dark:profile_card-dark"
  >
    <Image
      w="50"
      min_h="50"
      alt="My GitHub Avatar"
      :src="profile_url"
      rounded
    />

    <div mt-5 text-2xl>
      {{ name }}
    </div>
    <div mt-3>
      {{ title }}
    </div>

    <!-- Links -->
    <div
      w-50 mt-5
      flex justify-around
      text="3xl link-light dark:link-dark"
    >
      <a
        v-for="link in links"
        :href="link.url"
        :title="link.title"
        target="_blank"
        hover:opacity-70%
      >
        <div :class="`i-mdi-${link.icon}`" />
      </a>
      <a
        href="#"
        title="My E-mail Address"
        :data-email="email_b64"
        onfocus="this.href = 'mailto:' + atob(this.dataset.email) || ''"
        hover:opacity-70%
      >
        <div i-mdi-email></div>
      </a>
    </div>

    <div mt-5 overflow-y-scroll>
      {{ intro }}
    </div>
  </div>
</template>