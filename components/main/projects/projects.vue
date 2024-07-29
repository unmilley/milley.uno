<template>
  <section class="max-w-3xl mx-auto pt-10 pb-16">
    <h1 class="mb-4 text-lg font-medium">{{ $t('projects.title') }}</h1>

    <ul class="grid gap-4 md:grid-cols-2">
      <main-projects-card v-for="project in projects" :project="project" :key="project.title" />
      <li
        class="skeleton-2 h-full flex flex-col gap-2 items-center py-8 shadow-sm justify-center w-full rounded-lg border-base-content border border-dashed !bg-transparent backdrop-blur-sm"
      >
        <Icon name="bx:time" size="1.5rem" />
        <p class="text-sm">{{ $t('projects.soon') }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { projects } from '@/src/constants'
</script>
