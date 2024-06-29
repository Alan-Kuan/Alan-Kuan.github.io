<script setup lang="ts">
import type { Profile } from '@/types.ts';

defineProps<Profile>();
</script>

<template>
  <div
    flex="~ col" items-center
    pa-5
    bg="profile_card-light dark:profile_card-dark"
  >
    <slot name="img" />

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

    <div mt-5 indent-8 overflow-y-scroll>
      <slot name="intro" />
    </div>
  </div>
</template>