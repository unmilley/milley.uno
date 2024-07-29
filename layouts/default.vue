<template>
  <div ref="main">
    <ClientOnly>
      <ui-scroll-bar :target="main" />
    </ClientOnly>
    <div class="min-h-dvh p-4 sm:p-1 pb-20 sm:pb-24">
      <div class="bg-hash w-full h-full fixed top-0 left-0 -z-50"></div>
      <header-head />
      <slot />
      <header-nav />
    </div>
  </div>
</template>

<script setup lang="ts">
const main = ref<HTMLDivElement>()
</script>

<style scoped>
.bg-hash {
  --color: oklch(var(--bc) / 0.05);
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      var(--color) 25%,
      var(--color) 26%,
      transparent 27%,
      transparent 74%,
      var(--color) 75%,
      var(--color) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      var(--color) 25%,
      var(--color) 26%,
      transparent 27%,
      transparent 74%,
      var(--color) 75%,
      var(--color) 76%,
      transparent 77%,
      transparent
    );
  background-size: 55px 55px;
  animation: move 15s linear infinite;
}
@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 55px;
  }
}
</style>
