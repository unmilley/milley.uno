<template>
  <div>
    <transition name="slide-up" mode="out-in">
      <button
        v-if="locale === 'ru'"
        @click.prevent.stop="setLocale('en')"
        aria-label="Toggle language"
        type="button"
        class="btn btn-square btn-outline btn-sm text-xs uppercase"
      >
        {{ locale }}
      </button>
      <button
        v-else
        @click.prevent.stop="setLocale('ru')"
        type="button"
        aria-label="Toggle language"
        class="btn btn-square btn-outline btn-sm text-xs uppercase"
      >
        {{ locale }}
      </button>
    </transition>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n()
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
