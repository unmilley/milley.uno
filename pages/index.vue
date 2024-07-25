<template>
  <div ref="main">
    <ClientOnly>
      <ui-scroll-bar :target="main" />
    </ClientOnly>
    <main-head />
    <main-about />
    <main-projects />
  </div>
</template>

<script setup lang="ts">
const main = ref<HTMLDivElement | null>(null)
</script>
