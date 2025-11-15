<script setup lang="ts">
import type { Publication } from '@/types/content';

defineProps<Publication | { me: string }>();
</script>

<template>
  <li>
    <span v-for="author in authors">
      <span :class="{ underline: author === me }">
        {{ author }}
      </span>
      <span>, </span>
    </span>

    <span class="font-italic">{{ title }}, </span>

    <span>{{ conference }}, </span>
    <span>{{ location }}, </span>
    <span>{{ time }}.</span>
  </li>
</template>