<script setup lang="ts">
defineProps<{
  date?: string,
  tags: string[],
}>();
</script>

<template>
  <div>
    <div v-if="date" class="flex items-center gap-1">
      <div class="i-mdi-calendar" />
      <span class="font-thin">{{ date }}</span>
    </div>
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
          bg-light-text-link/30 dark:bg-dark-text-link/30
          text-light-text-link dark:text-dark-text-link
          hover:bg-light-text-link dark:hover:bg-dark-text-link
          hover:text-white dark:hover:text-light-text
          text-sm
        "
      >
        <span>#{{ tag }}</span>
      </a>
    </div>
  </div>
</template>