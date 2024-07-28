<template>
  <div>
    <transition name="slide-up" mode="out-in">
      <button v-if="$colorMode.preference == 'dark'" @click="$colorMode.preference = 'system'" v-bind="buttonAttrs">
        <Icon name="bxs:moon" size="1.2rem" />
      </button>
      <button v-else-if="$colorMode.preference == 'light'" @click="$colorMode.preference = 'dark'" v-bind="buttonAttrs">
        <Icon name="bxs:sun" size="1.2rem" />
      </button>
      <button v-else @click="$colorMode.preference = 'light'" v-bind="buttonAttrs">
        <Icon name="bx:desktop" size="1.2rem" />
      </button>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

const { $colorMode } = useNuxtApp()
const buttonAttrs = computed(
  (): ButtonHTMLAttributes => ({
    'aria-label': 'Toggle theme',
    type: 'button',
    class: 'btn btn-square btn-outline btn-sm',
  })
)
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
</style>
