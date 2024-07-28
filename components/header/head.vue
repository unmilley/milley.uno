<template>
  <div class="navbar">
    <div class="navbar-start"></div>
    <div class="navbar-center">
      <div class="btn btn-ghost text-2xl uppercase font-averia font-semibold" ref="logo">
        <Icon name="mill:cookie" size="2rem" class="text-primary" />
        <p>Alexandr Lyadov</p>
      </div>
    </div>
    <div class="navbar-end"></div>
  </div>
</template>

<script setup lang="ts">
const { $confetti } = useNuxtApp()
const logo = ref<HTMLElement>()

const explode = () => {
  console.log('qwe')
  $confetti.addConfetti({
    emojis: ['🍪'],
  })
}

onLongPress(logo, explode, { delay: 1111, modifiers: { prevent: true } })
</script>
