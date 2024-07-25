<template>
  <main class="prose" ref="main">
    <ContentDoc />
  </main>
</template>

<script setup lang="ts">
const main = ref<HTMLDivElement | null>(null)
</script>
