<template>
	<li class="border border-base-content p-6 shadow-sm rounded-lg backdrop-blur-sm flex flex-col">
		<div class="flex items-center gap-3 mb-2">
			<h3 class="text-lg font-medium capitalize">{{ pkg.title }}</h3>
			<span class="badge ml-auto">{{ pkg.version }}</span>
		</div>
		<p class="flex-1 mb-4 line-clamp-3">
			{{ pkg.description }}
		</p>
		<div class="flex items-center justify-between">
			<nuxt-link :to="pkg.source" target="_blank" class="btn btn-soft btn-xs h-8 text-xs">
				<Icon name="bx:bxl-github" size="1.25rem" />
				{{ $t('projects.source') }}
			</nuxt-link>

			<nuxt-link :to="pkg.path" target="_blank" class="btn btn-ghost btn-xs h-8 text-xs">
				{{ $t('projects.website') }}
				<Icon name="bxs:right-arrow-circle" size="1.25rem" />
			</nuxt-link>
		</div>
	</li>
</template>

<script lang="ts" setup>
const { pkg } = defineProps<{
	pkg: {
		title: string
		description: string
		version: string
		path: string
		source: string
	}
}>()
</script>
