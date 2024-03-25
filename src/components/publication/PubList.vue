<script setup lang="ts">
import ConfPubItem from '@/components/publication/ConfPubItem.vue';
import type { Publication } from '@/types.ts';

defineProps<{
  pubs: { [key: string]: Publication[] },
  self: string,
}>();
</script>

<template>
  <div
    ma-8
    px-8 pb-5
    bg="page-light dark:page-dark"
    drop-shadow
  >
    <div v-for="sub_pubs, cat in pubs">
      <h1 pt-5 text-2xl>
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
            :self="self"
          />
        </template>
      </ul>
    </div>
  </div>
</template>