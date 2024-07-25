<template>
  <li class="border border-base-content p-6 shadow-sm rounded-lg backdrop-blur-sm flex flex-col">
    <div class="flex items-center gap-3 mb-2">
      <NuxtImg
        :alt="`${project.title} preview`"
        width="40"
        height="40"
        class="select-none pointer-events-none"
        :src="project.image"
      />
      <h3 class="text-lg font-medium">{{ project.title }}</h3>
      <div
        class="tooltip tooltip-left tooltip-primary delay-0 ml-auto cursor-pointer"
        data-tip="In development"
        v-if="project.isDev"
        ref="badge"
      >
        <span class="badge" :class="isBadgeHovered ? 'badge-primary' : 'badge-outline'">dev</span>
      </div>
    </div>
    <p class="flex-1 mb-4 line-clamp-3">
      {{ project.desc }}
    </p>
    <div class="flex items-center justify-between">
      <p class="btn btn-outline btn-disabled btn-xs h-8 text-xs" v-if="isNotSource">
        <Icon name="bx:bxl-github" size="1.25rem" />
        Source code
      </p>
      <nuxt-link :to="project.source" target="_blank" class="btn btn-outline btn-xs h-8 text-xs" v-else>
        <Icon name="bx:bxl-github" size="1.25rem" />
        Source code
      </nuxt-link>

      <p class="btn btn-ghost btn-disabled btn-xs h-8 text-xs" v-if="isNotPath">
        Visit website
        <Icon name="bxs:right-arrow-circle" size="1.25rem" />
      </p>
      <nuxt-link :to="project.path" target="_blank" class="btn btn-ghost btn-xs h-8 text-xs" v-else>
        Visit website
        <Icon name="bxs:right-arrow-circle" size="1.25rem" />
      </nuxt-link>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Project } from '@/types'
const { project } = defineProps<{ project: Project }>()

const isNotSource = computed(() => typeof project.source === 'undefined' || project.source === '')
const isNotPath = computed(() => typeof project.path === 'undefined' || project.path === '')

const badge = ref()
const isBadgeHovered = useElementHover(badge)
</script>
