<template>
  <nuxt-link class="badge badge-outline gap-1 cursor-pointer" :href="stack.path" target="_blank" rel="noreferrer">
    <Icon :name="stack.icon" />
    {{ stack.title }}
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ stack: { title: string; icon: string; path: string } }>()
</script>
