<template>
	<section
		ref="hero-element"
		class="relative flex h-dvh md:h-[70dvh] w-full overflow-hidden border-b border-base-content/20 md:shadow-xl"
	>
		<div class="absolute top-0 inset-x-0 z-10">
			<!--  -->
			<div class="p-4 md:p-10 mt-4 md:mt-12 max-w-2xl md:max-w-3xl mx-auto">
				<div class="flex items-end gap-2">
					<div class="avatar relative">
						<div class="mask mask-squircle w-32">
							<img src="/static/me-gray.webp" alt="alexandr" />
						</div>
						<span class="absolute flex size-3 bottom-1 right-1">
							<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75 z-10"></span>
							<span class="relative inline-flex rounded-full size-3 bg-primary outline outline-base-100"></span>
						</span>
					</div>
					<p class="whitespace-nowrap font-medium text-sm">{{ $t('home.part-time') }}</p>
				</div>
				<!--  -->
				<HeroAbout />
			</div>
			<!--  -->
		</div>
		<ParticlesBg class="absolute inset-0" :quantity="100" :ease="100" :staticity="10" refresh />
	</section>
</template>

<script lang="ts" setup>
const el = useTemplateRef('hero-element')
const elSize = useElementSize(el)
const heroSize = useState('hero-size', () => ({ width: 0, height: 0 }))

watch(
	() => elSize,
	() => {
		heroSize.value = { width: elSize.width.value, height: elSize.height.value }
	},
	{ deep: true, immediate: true },
)
</script>
