<template>
  <div class="w-screen">
    <div class="fixedBar" :style="{ opacity: readingProgress ? 1 : 0 }">
      <div class="progressBar bg-primary" :style="[`height: ${readingProgress}%`]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { target } = defineProps<{ target: HTMLDivElement | undefined }>()
const readingProgress = ref(0)

const scrollListener = () => {
  if (!target) return
  const totalHeight = target.clientHeight - target.offsetTop - window.innerHeight
  const windowScrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop

  if (windowScrollTop === 0) readingProgress.value = 0
  else if (windowScrollTop > totalHeight) readingProgress.value = 100
  else readingProgress.value = (windowScrollTop / totalHeight) * 100
}

onMounted(() => {
  window.addEventListener('scroll', scrollListener)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollListener)
})
</script>

<style scoped>
.fixedBar {
  position: fixed;
  opacity: 0;
  z-index: 10;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 20vh;
  background: rgba(20, 21, 22, 0.3);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 20px;
}
@media (max-width: 690px) {
  .fixedBar {
    width: 5px;
    right: 8px;
  }
}
.fixedBar .progressBar {
  height: 0;
  display: flex;
  position: relative;
  top: 0;
  border-radius: 20px;
}
</style>
