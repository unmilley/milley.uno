<template>
  <div class="space-y-8 max-w-3xl mx-auto md:space-y-16">
    <header>
      <h1 class="mb-2 text-2xl font-bold">Blog</h1>
      <p class="">The place where I am sharing my thoughts, experience, knowledge.</p>
    </header>
    <blog />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  ogImage: { height: 630, width: 1200, url: 'static/og-image.png' },
})
</script>
