<script setup lang="ts">
defineProps<{
  date?: string,
  tags: string[],
}>();
</script>

<template>
  <div>
    <div v-if="date" font-thin>{{ date }}</div>
    <div
      v-if="tags.length > 0"
      flex="~ wrap" items-center
    >
      <a
        v-for="tag in tags"
        :href="`/tags/${tag}/1`"
        pa-1 mt-2 mr-2
        rounded
        border="~ link-light dark:text-light"
        bg="hover:link-light dark:hover:text-light"
        un-text="link-light dark:text-light hover:white dark:hover:text-dark"
      >
        <span>#{{ tag }}</span>
      </a>
    </div>
  </div>
</template>