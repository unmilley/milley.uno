<template>
  <section class="pt-8 pb-2">
    <h1 class="mb-2 text-2xl font-bold">Frontend Developer & Designer</h1>
    <p class="mb-8 text-lg leading-relaxed">
      Howdy, I am Alexandr. I am building web applications using

      <ui-badge-stack v-for="s in stacks.filter((_, i) => i !== stacks.length - 1)" :stack="s" />
      and
      <ui-badge-stack :stack="stacks[stacks.length - 1]" />. Connect with me for collaboration, part-time job, or just
      say hi.
    </p>
    <ul class="flex items-center flex-wrap gap-2">
      <li v-for="link in links">
        <nuxt-link
          :title="link.title"
          class="btn btn-ghost btn-sm px-2"
          :href="link.path"
          target="_blank"
          rel="noreferrer"
        >
          <Icon :name="link.icon" size="1.35rem" />
          <span class="font-medium text-sm">
            {{ link.title }}
          </span>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const stacks = [
  { title: 'Vue', icon: 'vscode-icons:file-type-vue', path: 'https://vuejs.org/' },
  { title: 'Nuxtjs', icon: 'vscode-icons:file-type-nuxt', path: 'https://nuxt.com/' },
  { title: 'Nestjs', icon: 'vscode-icons:file-type-nestjs', path: 'https://nestjs.com/' },
  { title: 'Typescript', icon: 'vscode-icons:file-type-typescript-official', path: 'https://www.typescriptlang.org/' },
]

const links = [
  { title: 'Read.cv', icon: 'ph:read-cv-logo-fill', path: 'https://read.cv/milley' },
  { title: 'Github', icon: 'bx:bxl-github', path: 'https://github.com/unmilley' },
  // {title: '', icon: '', path: ''},
]
</script>
