<script setup lang="ts">
const props = defineProps<{
  desc?: string,
}>();
</script>

<template>
  <div class="margin-content">
    <div v-if="desc" class="mb-1 text-sm font-semibold">
      {{ desc }}
    </div>
    <div class="inline-block pa-4 border-1 border-gray rounded-lg">
      <slot />
    </div>
  </div>
</template>