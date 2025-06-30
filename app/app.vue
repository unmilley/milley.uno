<template>
	<div>
		<NuxtRouteAnnouncer />
		<main>
			<NuxtPage
				:transition="{
					name: 'page',
					mode: 'out-in',
					onBeforeEnter,
				}"
			/>
		</main>
		<HeadBar />
		<ScrollBar />
		<UiController />
	</div>
</template>

<script lang="ts" setup>
import { ansiLog } from 'assets/scripts/ansi-log'

useHead({
	titleTemplate: (titleChunk) => (titleChunk ? `Milley | ${titleChunk}` : 'Alexandr Lyadov'),
})

const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
	await finalizePendingLocaleChange()
}

const { $colorMode } = useNuxtApp()
const favicon = computed(() => ($colorMode.value === 'dark' ? 'favicon-dark.ico' : 'favicon-light.ico'))

useFavicon(favicon)

onMounted(() => {
	ansiLog()
})
</script>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(0.05rem);
}
</style>
