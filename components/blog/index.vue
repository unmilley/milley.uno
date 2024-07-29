<template>
  <section class="max-w-3xl mx-auto mb-16">
    <h2 class="text-lg font-medium mb-4">{{ $t('blog.posts') }}</h2>
    <ul class="divide-y divide-base-content/50 divide-dashed">
      <li
        v-for="post in posts"
        :key="post.slug"
        class="flex sm:items-center flex-col sm:flex-row justify-between relative py-1.5"
      >
        <nuxt-link :to="post.path" class="inline-block" :title="post.metadata.title">
          <h3 class="font-medium transition-colors hover:text-primary cursor-circle">
            {{ post.metadata.title }}
          </h3>
        </nuxt-link>
        <blog-post-stats :publishedAt="post.metadata.publishedAt" :slug="post.slug" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { getBlogPosts } from '@/utils/blog'
import { compareDesc } from 'date-fns'

const posts = (await getBlogPosts()).sort((a, b) => {
  return compareDesc(new Date(a.metadata.publishedAt), new Date(b.metadata.publishedAt))
})
</script>
