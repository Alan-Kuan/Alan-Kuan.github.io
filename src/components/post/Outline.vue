<script setup lang="ts">
import type { MarkdownHeading } from 'astro';

defineProps<{
  headings: MarkdownHeading[],
}>();
</script>

<template>
  <ul
    pa="4"
    bg="profile_card-light dark:profile_card-dark"
    rounded-lg
    list="disc inside"
  >
    <li
      v-for="heading in headings"
      :pl="(heading.depth - 1) * 2"
      w-full
      break-all
    >
      <a
        :href="`#${heading.slug}`"
        text="profile_card-link-light dark:profile_card-link-dark"
        hover:brightness-120%
      >
        {{heading.text}}
      </a>
    </li>
  </ul>
</template>