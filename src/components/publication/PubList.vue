<script setup lang="ts">
import ConfPubItem from '@/components/publication/ConfPubItem.vue';

import type { Publication } from '@/types/content';

defineProps<{
  pubs: { [key: string]: Publication[] },
  me: string,
}>();
</script>

<template>
  <div
    ma-8
    px-8 py-5
    bg="page-light dark:page-dark"
    drop-shadow-sm
  >
    <div v-for="sub_pubs, cat in pubs">
      <h1 text-2xl font-medium>
        {{ cat }}
      </h1>
      <ul pt-3 pl-8 list-disc>
        <template
          v-if="cat === 'Conference'"
          v-for="pub in sub_pubs"
        >
          <ConfPubItem
            :authors="pub.authors"
            :title="pub.title"
            :conference="pub.conference"
            :location="pub.location"
            :time="pub.time"
            :me="me"
          />
        </template>
      </ul>
    </div>
  </div>
</template>