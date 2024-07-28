<template>
  <article
    class="py-8 prose mx-auto prose-h1:leading-[42px] lg:prose-h1:leading-[56px] lg:prose-lg prose-h1:mb-4 xl:prose-h1:mb-4"
  >
    <h1>{{ post.metadata.title }}</h1>
    <blog-post-stats :published-at="post.metadata.publishedAt" :slug="slug" />
    <div>
      <ContentDoc />
    </div>
    <blog-like-badge :slug="slug" />
  </article>
</template>

<script setup lang="ts">
import { useRouteParams } from '@vueuse/router'

const slug = useRouteParams<string>('slug', '', { transform: String })
const post = await getBlogPost(slug.value)
await useFetch(`/api/views/${slug.value}`, { method: 'POST' })
</script>
