<template>
  <div class="flex items-center gap-2 md:gap-3 flex-wrap md:flex-nowrap text-sm">
    <div class="flex items-center gap-1 md:gap-2">
      <span class="whitespace-nowrap">
        {{ time }}
      </span>
    </div>
    <div>&#x2022;</div>
    <div class="flex items-center gap-1 md:gap-2">
      <span class="whitespace-nowrap">{{ Views }}</span>
    </div>
    <div>&#x2022;</div>
    <div class="flex items-center gap-1 md:gap-2">
      <span class="whitespace-nowrap">{{ Likes }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'
const { t } = useI18n()
const { $pluralization } = useNuxtApp()

const { publishedAt, slug } = defineProps<{ slug: string; publishedAt: string }>()

const { views } = await usePostViews(slug)
const { likes } = await usePostLikes(slug)
const { locale } = useI18n()
const time = computed(() => {
  if (locale.value === 'en') return format(publishedAt, 'MMM dd, yyyy', { locale: enUS })
  else if (locale.value === 'ru') return format(publishedAt, 'dd MMM yyyy', { locale: ru })
  return format(publishedAt, 'dd MMM yyyy')
})

const Views = computed(() => {
  return locale.value === 'en'
    ? t(`blog.views[${$pluralization(views.value || 0, 3)}]`, { n: views.value })
    : t(`blog.views[${$pluralization(views.value || 0)}]`, { n: views.value })
})

const Likes = computed(() => {
  return locale.value === 'en'
    ? t(`blog.likes[${$pluralization(likes.value || 0, 3)}]`, { n: likes.value })
    : t(`blog.likes[${$pluralization(likes.value || 0)}]`, { n: likes.value })
})
</script>
