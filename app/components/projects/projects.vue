<template>
	<PatternDirection v-slot="{ elementIsVisible, direction }">
		<PatternBackground
			class="min-h-dvh w-full"
			:animate="!isMobile && elementIsVisible"
			:direction="direction"
			:speed="25000"
			variant="dot"
			size="xs"
		>
			<div class="p-4 md:p-10 md:pt-0 mt-4 md:mt-8 max-w-2xl md:max-w-3xl mx-auto relative z-50">
				<SparklesText
					text="Projects"
					:colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
					:sparkles-count="10"
					class="text-6xl font-bold italic my-8"
				/>

				<ul class="grid gap-4 md:grid-cols-2">
					<projects-card v-for="project in projects" :project="project" :key="project.title" />
					<li
						class="skeleton-2 flex flex-col self-start gap-2 items-center py-8 shadow-sm justify-center w-full rounded-lg border-base-content border border-dashed !bg-transparent backdrop-blur-sm"
					>
						<Icon name="bx:time" size="1.5rem" />
						<p class="text-sm">{{ $t('projects.soon') }}</p>
					</li>
				</ul>
				<LineShadowText as="div" class="text-6xl font-bold italic mt-8" shadow-color="var(--color-primary)">
					Packages
				</LineShadowText>
				<ul class="grid gap-4 md:grid-cols-2 mt-8" v-if="status === 'success' && packages">
					<projects-pkg-card v-for="pkg in packages" :pkg="pkg" :key="pkg.title" />
					<li
						class="skeleton-2 flex flex-col self-start gap-2 items-center py-8 shadow-sm justify-center w-full rounded-lg border-base-content border border-dashed !bg-transparent backdrop-blur-sm"
					>
						<Icon name="bx:time" size="1.5rem" />
						<p class="text-sm">{{ $t('projects.soon') }}</p>
					</li>
				</ul>
				<ul class="grid gap-4 md:grid-cols-2 mt-8" v-else>
					<li
						v-for="_ in 4"
						class="skeleton-2 h-full flex flex-col gap-2 items-center py-8 shadow-sm justify-center w-full rounded-lg border-base-content border border-dashed !bg-transparent backdrop-blur-sm"
					>
						<Icon name="bx:loader-alt" size="1.5rem" class="animate-spin" />
					</li>
				</ul>
			</div>
		</PatternBackground>
	</PatternDirection>
</template>

<script setup lang="ts">
import { projects } from '@/src/constants/projects'

const { data: packages, status } = await useFetch('/api/npm')

const isMobile = useMobile()
</script>
