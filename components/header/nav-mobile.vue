<template>
  <div class="btm-nav btm-nav-sm border-t flex sm:hidden">
    <nuxt-link
      v-for="route in NAVIGATION"
      :key="route.title"
      :to="route.path"
      :class="{ 'text-primary active': $route.path === route.path }"
    >
      <Icon :name="route.icon" size="1.2rem" />
      <span class="btm-nav-label">{{ $t(route.title) }}</span>
    </nuxt-link>

    <button @click.stop="isSettingOpen = !isSettingOpen" ref="settingMenu">
      <details class="dropdown dropdown-top dropdown-end" :open="isSettingOpen">
        <summary class="btn-btm-nav pointer-events-none">
          <Icon name="bx:bxs-cog" size="1.2rem" />
          <span class="btm-nav-label">Settings</span>
        </summary>
        <ul
          class="menu dropdown-content ~bg-base-100 backdrop-blur-lg rounded-box w-52 border border-dashed border-base-content z-[1]"
        >
          <header-ui-lang-switcher-select />
          <header-ui-theme-switcher-select />
        </ul>
      </details>
    </button>
  </div>
</template>

<script setup lang="ts">
import { NAVIGATION } from '@/src/constants'

const isSettingOpen = ref(false)

const settingMenu = ref(null)

onClickOutside(settingMenu, () => (isSettingOpen.value = false))
</script>

<style scoped>
.btn-btm-nav {
  position: relative;
  display: flex;
  height: 100%;
  flex-basis: 100%;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem /* 4px */;
  border-color: currentColor;
}
</style>
