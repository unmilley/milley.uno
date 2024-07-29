<template>
  <div>
    <HeaderNavbar>
      <template #start>
        <Icon name="mill:cookie" size="1.75rem" />
        <div class="bg-primary h-5 w-0.5"></div>

        <div class="indicator group" :key="route.title" v-for="route in NAVIGATION">
          <span
            class="indicator-item indicator-bottom indicator-center badge badge-base badge-xs group-hover:mix-blend-difference"
            v-show="$route.path === route.path"
          ></span>
          <nuxt-link class="btn btn-sm btn-outline btn-neutral" :to="route.path">
            {{ $t(route.title) }}
          </nuxt-link>
        </div>
      </template>

      <template #end>
        <header-ui-lang-switcher-btn />
        <header-ui-theme-switcher-btn />
      </template>
    </HeaderNavbar>
    <header-nav-mobile />
  </div>
</template>

<script setup lang="ts">
import { NAVIGATION } from '@/src/constants'
</script>

<style>
.skeleton-2 {
  border-radius: var(--rounded-btn, 0.5rem 8px);
  will-change: background-position;
  animation: skeleton 1.8s ease-in-out infinite;
  background-image: linear-gradient(
    105deg,
    transparent 0%,
    transparent 40%,
    var(--fallback-b1, oklch(var(--bc) / 0.2)) 50%,
    transparent 60%,
    transparent 100%
  );
  background-size: 200% auto;
  background-repeat: no-repeat;
  background-position-x: -50%;
}
@media (prefers-reduced-motion) {
  .skeleton-2 {
    animation-duration: 15s;
  }
}
</style>
