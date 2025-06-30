<template>
	<nuxt-link
		class="badge badge-soft hover:badge-dash gap-1 cursor-pointer"
		:style="color"
		:href="stack.path"
		target="_blank"
		rel="noreferrer"
	>
		<Icon :name="stack.icon" size="1rem" />
		{{ stack.title }}
	</nuxt-link>
</template>

<script setup lang="ts">
const { stack } = defineProps<{
	stack: {
		title: string
		icon: string
		path: string
		color: string
	}
}>()

const color = computed(() => {
	const hex = stack.color.startsWith('#') ? stack.color : `#${stack.color}`
	return `--badge-color:${hex}`
})
</script>
