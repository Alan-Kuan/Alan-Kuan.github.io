<script setup lang="ts">
const props = defineProps<{
  desc?: string,
}>();
</script>

<template>
  <figure class="margin-content">
    <figcaption v-if="desc" class="ml-4 mb-1 text-sm font-semibold">
      {{ desc }}
    </figcaption>
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
  </figure>
</template>