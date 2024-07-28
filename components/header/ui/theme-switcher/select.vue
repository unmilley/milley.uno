<template>
  <li>
    <details open>
      <summary>
        <Icon name="mill:palette" size="1.25rem" />
        Theme
      </summary>
      <ul>
        <li v-for="theme in themes" :key="theme">
          <a @click.prevent.stop="$colorMode.preference = theme" class="capitalize">
            <Icon :name="$colorMode.preference === theme ? 'bx:check-square' : 'bx:square'" size="1.35rem" />
            {{ theme }}
          </a>
        </li>
      </ul>
    </details>
  </li>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp()

const themes = ['dark', 'light', 'system']
</script>
