<script setup lang="ts">
const props = defineProps<{
  href: string,
}>();

const target = props.href.startsWith('/') ? '_self' : '_blank';
</script>

<template>
  <a
    :href :target
    text="link-light dark:link-dark"
    hover:brightness-120
  >
    <slot />
  </a>
</template>

<style scoped>
a[target="_blank"]::after {
  content: '';
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  margin-left: 0.125rem;
  vertical-align: sub;
  background: #d77b00;
  mask-image: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='0.75em' height='0.75em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z'/%3E%3C/svg%3E");
}

.dark a[target="_blank"]::after {
  background: #eab18a;
}
</style>