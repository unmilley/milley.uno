<template>
  <section class="h-screen w-full bg-base-100 flex flex-col gap-4 justify-center items-center">
    <h1 class="text-primary uppercase block text-4xl font-heading">{{ id }}</h1>
    <progress class="progress progress-primary w-56 block"></progress>
  </section>
</template>

<script setup lang="ts">
import { useRouteParams } from '@vueuse/router'
import { SHORT_LINKS } from '~/src/constants'
definePageMeta({ layout: 'empty' })

const id = useRouteParams<string>('id', '', { transform: String })

onBeforeMount(() => {
  const link = SHORT_LINKS.get(id.value)
  if (typeof link === 'undefined') location.href = '/'
  else location.href = link
})
</script>
