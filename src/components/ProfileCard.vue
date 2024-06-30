<script setup lang="ts">
import Image from '@/components/element/Image.vue';

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
      v-for="url, key in avatar_urls"
      :class="{
        'dark:hidden': key === 'light',
        'hidden! dark:flex!': key === 'dark',
        'absolute': true, 'z-1': true,
        'w-50': true,
        'rounded-xl': true,
        'text-center': true, 'text-text-dark': true, 'font-semibold': true,
        'leading-16': true,
      }"
      height="200px"
      :src="url"
      alt="My Avatar"
    />

    <div mt-5 text-2xl font-light>
      {{ name }}
    </div>
    <div mt-3>
      {{ title }} @
      <a :href="org.url" target="_blank" underline>
        {{ org.text }}
      </a>
    </div>

    <!-- Links -->
    <div
      w-50 mt-5
      flex justify-around
      text="3xl profile_card-link-light dark:profile_card-link-dark"
    >
      <a
        v-for="link in links"
        :href="link.url"
        :title="link.title"
        target="_blank"
        hover:brightness-120%
      >
        <div :class="`i-mdi-${link.icon}`" />
      </a>
      <a
        href="/#"
        :title="email.title"
        :data-email="email.addr_b64"
        onfocus="this.href = 'mailto:' + atob(this.dataset.email) || ''"
        hover:brightness-120%
      >
        <div i-mdi-email></div>
      </a>
    </div>

    <div mt-5 indent-8 overflow-y-auto>
      <slot name="intro" />
    </div>
  </div>
</template>