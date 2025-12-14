<script setup lang="ts">
import { onMounted, ref } from 'vue';

import Avatar from '@/components/Avatar.vue';

import type { Profile } from '@/types/profile';

const props = defineProps<Profile>();
const email_addr = ref(null);

onMounted(() => {
  email_addr.value = atob(props.email.addr_b64);
});
</script>

<!--
  In Wide Container:
    --------
    |Avatar| [Details (show link texts)]
    --------

  In Narrow Container:
    --------
    |Avatar|
    --------
    [Details (hide link texts)]
-->

<template>
  <div class="@container/card">
    <div class="flex flex-col @md/card:flex-row gap-8 items-center-if-narrow">
      <Avatar :avatar_urls />
      <div class="flex flex-col items-start @md/card:justify-center items-center-if-narrow">
        <!-- Name -->
        <div
          class="font-medium text-xl md:text-2xl">
          {{ name }}
        </div>
        <!-- Title -->
        <div class="mt-2 text-lg">
          {{ title }} @
          <a :href="org.url" target="_blank" class="underline">
            {{ org.text }}
          </a>
        </div>
        <!-- Links -->
        <div
          class="
            w-full mt-3
            flex flex-wrap justify-start
            gap-x-12 gap-y-1
            text-light-text-link dark:text-dark-text-link
            justify-around-if-narrow
          "
        >
          <a
            v-for="link in links"
            :href="link.url"
            :title="link.title"
            target="_blank"
            class="
              inline-flex items-center gap-2
              hover:brightness-120%
            "
          >
            <div :class="[link.icon, 'text-3xl']" />
            <div class="hidden-if-narrow">
              {{ link.url.split('/').slice(3).join('/') }}
            </div>
          </a>
          <a
            :href="`mailto:${email_addr}`"
            :title="email.title"
            class="
              inline-flex items-center gap-2
              hover:brightness-120%
            "
          >
            <div class="i-mdi-email text-3xl" />
            <div class="hidden-if-narrow">{{ email_addr }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@container card (width < 28rem) {
  .items-center-if-narrow {
    align-items: center;
  }
  .justify-around-if-narrow {
    justify-content: space-around;
    column-gap: 0;
  }
  .hidden-if-narrow {
    display: none;
  }
}
</style>