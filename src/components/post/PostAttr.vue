<script setup lang="ts">
defineProps<{
  date?: string,
  tags: string[],
}>();
</script>

<template>
  <div flex>
    <!-- Date -->
    <div
      v-if="date"
      flex items-center
      mr-5
    >
      <div
        i-mdi-calendar
        text="lg link-dark dark:text-light"
      ></div>
      <div pl-2>{{ date }}</div>
    </div>

    <!-- Tags -->
    <div
      v-if="tags.length > 0"
      flex items-center
    >
      <div
        i-mdi-tag
        text="lg link-dark dark:text-light"
      ></div>
      <a
        v-for="tag in tags"
        :href="`/tags/${tag}/1`"
        un-text="link-light dark:text-light"
        hover:underline
      >
        <span pl-2>{{ tag }}</span>
      </a>
    </div>
  </div>
</template>