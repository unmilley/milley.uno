<template>
  <div class="fixed bottom-3 inset-x-0 w-11/12 mx-auto container z-50">
    <div class="navbar bg-base-100 rounded-xl hidden sm:flex">
      <header-ui-glass />
      <div class="navbar-start flex gap-4">
        <slot name="start" />
      </div>
      <div class="navbar-end flex gap-4">
        <slot name="end" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
