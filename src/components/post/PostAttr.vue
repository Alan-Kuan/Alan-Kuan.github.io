<script setup lang="ts">
defineProps<{
  date?: string,
  tags: string[],
}>();
</script>

<template>
  <div>
    <div v-if="date" class="font-thin">{{ date }}</div>
    <div
      v-if="tags.length > 0"
      class="flex flex-wrap items-center"
    >
      <a
        v-for="tag in tags"
        :href="`/tags/${tag}/1`"
        class="
          pa-1 mt-2 mr-2
          rounded-sm
          border border-link-light dark:border-text-light
          hover:bg-link-light dark:hover:bg-text-light
          text-link-light dark:text-text-light hover:text-white dark:hover:text-text-dark text-sm
        "
      >
        <span>#{{ tag }}</span>
      </a>
    </div>
  </div>
</template>