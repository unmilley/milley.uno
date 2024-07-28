<template>
  <div class="flex items-end gap-2">
    <div class="avatar relative">
      <div class="mask mask-squircle w-24">
        <NuxtImg
          src="static/me-gray.webp"
          responsive
          :placeholder="[50, 50, 75, 1]"
          preload
          alt="alexandr"
          placeholder-class="animate-pulse"
        />
      </div>
      <span class="absolute flex size-3 bottom-1 right-1">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75 z-10"></span>
        <span class="relative inline-flex rounded-full size-3 bg-primary outline outline-base-100"></span>
      </span>
    </div>
    <p class="whitespace-nowrap font-medium text-sm">Available for part-time</p>
  </div>
</template>

<script setup lang="ts"></script>
