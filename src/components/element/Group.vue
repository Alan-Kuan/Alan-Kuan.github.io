<script setup lang="ts">
const props = defineProps<{
  desc?: string,
}>();
</script>

<template>
  <div class="margin-content">
    <div v-if="desc" class="ml-4 mb-1 text-sm font-semibold">
      {{ desc }}
    </div>
    <div
      class="
        inline-block
        pa-2 md:pa-4
        bg-bg-muted
        rounded-lg
      "
    >
      <slot />
    </div>
  </div>
</template>