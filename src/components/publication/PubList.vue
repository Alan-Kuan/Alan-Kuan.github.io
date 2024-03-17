<script setup lang="ts">
import ConfPubItem from '@/components/publication/ConfPubItem.vue';
import type { Publication } from '@/types.ts';

defineProps<{
  pubs: { [key: string]: Publication[] },
  self: string,
}>();
</script>

<template>
  <div class="px-8 pt-3 pb-8">
    <div v-for="sub_pubs, cat in pubs">
      <h1 class="pt-5 text-2xl">
        {{ cat }}
      </h1>
      <ul class="pt-3 pl-8 list-disc">
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