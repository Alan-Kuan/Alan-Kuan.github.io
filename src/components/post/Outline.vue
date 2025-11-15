<script setup lang="ts">
import type { MarkdownHeading } from 'astro';

defineProps<{
  headings: MarkdownHeading[],
}>();
</script>

<template>
  <ul
    class="
      pa-4
      bg-profile_card-light dark:bg-profile_card-dark
      rounded-lg
      list-disc list-inside
    "
  >
    <li
      v-for="heading in headings"
      :class="[
        `pl-${(heading.depth - 1) * 2}`,
        'w-full',
        'break-all',
      ]"
    >
      <a
        :href="`#${heading.slug}`"
        class="
          text-profile_card-link-light dark:text-profile_card-link-dark
          hover:brightness-120%
        "
      >
        {{heading.text}}
      </a>
    </li>
  </ul>
</template>