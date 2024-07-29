<template>
  <div class="container mx-auto">
    <NuxtRouteAnnouncer>
      <template #default="{ message }">
        <p>{{ message }} was loaded.</p>
      </template>
    </NuxtRouteAnnouncer>
    <NuxtLayout>
      <NuxtPage
        :page-key="($route) => $route.fullPath"
        :transition="{
          name: 'page',
          mode: 'out-in',
          onBeforeEnter,
        }"
      />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { $ansi, $ansiStyle as $as } from 'assets/ts/ansi-log'

useHead({
  titleTemplate: (titleChunk) => (titleChunk ? `Milley | ${titleChunk}` : 'Alexandr Lyadov'),
})

const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}

onMounted(() => {
  console.clear()
  console.log($ansi, $as.top, $as.top_down, $as.center, $as.bottom_up, $as.bottom)
})
</script>

<style>
.qwe {
  border: 1px solid salmon;
}
.qwe2 > * {
  border: 1px solid salmon;
}
.qwe3 * {
  border: 1px solid salmon;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.05rem);
}
</style>
