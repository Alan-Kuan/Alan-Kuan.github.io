<script setup lang="ts">
import { onMounted, ref } from 'vue';

import Avatar from '@/components/Avatar.vue';

import type { Profile } from '@/types/profile';

const props = defineProps<Profile>();
const email_addr = ref();

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
            ----------
            |        |
            | Avatar |
            |        |
            ----------
    [Details (hide link texts)]

  Note:
    Most div tags' classes are ordered by common style,
    wide-container style and narrow-container style.
-->

<template>
  <div class="@container/card">
    <div
      class="
        flex gap-8

        @md/card:flex-row

        flex-col items-center-if-narrow
      "
    >
      <!-- Avatar -->
      <Avatar
        :avatar_urls
        class="
          flex-shrink-0

          @md/card:w-40 @md/card:h-40

          w-50 h-50
        "
      />
      <div
        class="
          flex

          @md/card:justify-center items-start

          flex-col items-center-if-narrow
        "
      >
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
            w-full
            mt-3
            flex flex-wrap gap-x-12 gap-y-1
            text-text-link

            justify-start

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