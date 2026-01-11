<script setup lang="ts">
defineProps<{
  date?: string,
  tags: string[],
}>();
</script>

<template>
  <div>
    <!-- Date -->
    <div
      v-if="date"
      title="Authored Date"
      class="flex items-center gap-1"
    >
      <div class="i-mdi-calendar text-text-link text-xl" />
      <span class="font-thin">{{ date }}</span>
    </div>
    <!-- Tags -->
    <div
      v-if="tags.length > 0"
      class="
        flex flex-wrap items-center gap-2
        mt-2
      "
    >
      <a
        v-for="tag in tags"
        :href="`/tags/${tag}/1`"
        class="
          px-2 py-1
          rounded-full
          transition-150
          bg-text-link/30
          text-text-link
          hover:bg-text-link
          hover:text-white
          text-sm
        "
      >
        <span>#{{ tag }}</span>
      </a>
    </div>
  </div>
</template>