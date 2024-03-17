<script setup lang="ts">
import type { ConfPub } from '@/types.ts';

defineProps<ConfPub | { self: string }>();
</script>

<template>
  <li>
    <span v-for="author in authors">
      <span :class="{ underline: author === self }">
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