<template>
  <div ref="main">
    <ClientOnly>
      <ui-scroll-bar :target="main" />
    </ClientOnly>
    <main-head />
    <main-about />
  </div>
</template>

<script setup lang="ts">
const main = ref<HTMLDivElement | null>(null)
</script>
