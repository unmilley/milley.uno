<template>
  <section class="pt-8 pb-2">
    <h1 class="mb-2 text-2xl font-bold leading-[0.6] sm:leading-8">
      Frontend Developer <br class="sm:hidden" />
      <span class="text-xs">&amp; Backend Developer</span>
    </h1>
    <p class="mb-8 text-lg leading-relaxed">
      {{ $t('home.about[0]') }}
      <template v-for="s in stacks.filter((_, i) => i !== stacks.length - 1)" :key="s.title">
        <ui-badge-stack :stack="s" />
        {{ ' ' }}
      </template>
      {{ $t('misc.and') }}
      <ui-badge-stack :stack="stacks[stacks.length - 1]" />. {{ $t('home.about[1]') }}.
    </p>
    <ul class="flex items-center flex-wrap gap-2">
      <li v-for="link in links" :key="link.title">
        <nuxt-link
          :title="link.title"
          class="btn btn-ghost btn-sm px-2 group"
          :class="{ 'btn-disabled': link.disabled }"
          :href="link.path"
          target="_blank"
          rel="noreferrer"
        >
          <Icon :name="link.icon" size="1.35rem" class="group-hover:text-primary duration-200" />
          <span class="font-medium text-sm">
            {{ link.title }}
          </span>
        </nuxt-link>
      </li>
      <li v-for="social in socials" :key="social.title">
        <div class="tooltip tooltip-bottom tooltip-base-content" :data-tip="social.title">
          <nuxt-link
            :href="social.path"
            target="_blank"
            rel="noreferrer"
            :title="social.title"
            class="btn btn-ghost btn-sm px-2 group"
          >
            <Icon :name="social.icon" size="1.35rem" class="group-hover:text-primary duration-200" />
          </nuxt-link>
        </div>
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
  { title: 'Read.cv', icon: 'ph:read-cv-logo-fill', path: 'https://read.cv/milley', disabled: true },
  { title: 'Github', icon: 'bx:bxl-github', path: 'https://github.com/unmilley' },
]

const socials = [
  { title: 'VK', icon: 'bx:bxl-vk', path: 'https://vk.com/unmilley' },
  { title: 'Telegram', icon: 'bx:bxl-telegram', path: 'https://t.me/milleyz' },
]
</script>
