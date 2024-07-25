<template>
  <div>
    <transition name="slide-up" mode="out-in">
      <button
        v-if="$colorMode.preference == 'dark'"
        @click="$colorMode.preference = 'system'"
        aria-label="Toggle theme"
        type="button"
        class="btn btn-square btn-outline btn-sm"
      >
        <Icon name="bxs:moon" :size="size" />
      </button>
      <button
        v-else-if="$colorMode.preference == 'light'"
        @click="$colorMode.preference = 'dark'"
        aria-label="Toggle theme"
        type="button"
        class="btn btn-square btn-outline btn-sm"
      >
        <Icon name="bxs:sun" :size="size" />
      </button>
      <button
        v-else
        @click="$colorMode.preference = 'light'"
        aria-label="Toggle theme"
        type="button"
        class="btn btn-square btn-outline btn-sm"
      >
        <Icon :name="isMobile ? 'bx:mobile' : 'bx:desktop'" :size="size" />
      </button>
    </transition>
  </div>
</template>

<script setup lang="ts">
const { $colorMode } = useNuxtApp()
const { isMobile } = defineProps<{ isMobile: boolean }>()
// const isMobile = useBreakpoints({ sm: 640 }).smallerOrEqual('sm')
const size = computed(() => (isMobile ? '1rem' : '1.2rem'))
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
