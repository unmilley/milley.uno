<template>
  <div class="navbar">
    <div class="navbar-start"><!-- <pre v-text="isNavOpen" /> --></div>
    <div class="navbar-center">
      <a class="btn btn-ghost text-2xl uppercase font-averia font-semibold">
        <Icon name="bx:bxs-cookie" size="2rem" class="bg-primary" />
        <span>Alexandr Lyadov</span>
      </a>
    </div>
    <div class="navbar-end">
      <!-- <div class="dropdown dropdown-end"> -->
      <!-- <button type="button" class="btn btn-ghost btn-square sm:hidden" @click="isNavOpen = !isNavOpen">
          <Icon name="bx:menu-alt-right" size="1.5rem" />
        </button> -->
      <a class="font-medium hover:text-primary transition-colors duration-300" href="mailto:hello@milley.uno"
        >hello@milley.uno</a
      >
      <!-- <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useStorage } from '@vueuse/core'
const isNavOpen = ref(false)
</script>
