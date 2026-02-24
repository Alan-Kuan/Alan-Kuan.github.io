<script setup lang="ts">
import ConfPubItem from '@/components/publication/ConfPubItem.vue';

import type { Publication } from '@/types/content';

defineProps<{
  pubs: { [key: string]: Publication[] },
  me: string,
}>();
</script>

<template>
  <div>
    <div v-for="sub_pubs, cat in pubs">
      <h2 class="text-lg">{{ cat }}</h2>
      <ul class="pt-3 pl-8 list-disc">
        <template
          v-if="cat === 'Conference'"
          v-for="pub in sub_pubs"
        >
          <ConfPubItem v-bind="pub" :me />
        </template>
      </ul>
    </div>
  </div>
</template>