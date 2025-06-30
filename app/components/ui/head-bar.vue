<template>
	<ClientOnly>
		<div
			ref="el"
			class="alert [--alert-color:var(--color-primary)] alert-soft cursor-crosshair fixed z-50"
			:style="style"
		>
			<Icon name="mill:cookie" size="1.5rem" />
			<div>
				<HyperText text="Alexandr Lyadov" class="font-bold" :duration="300" :animate-on-load="true" />
				<div class="text-xs">
					<a
						href="mailto:hello@milley.uno"
						class="link-hover"
						@pointerenter="disabled = true"
						@pointerleave="disabled = false"
					>
						hello@milley.uno
					</a>
				</div>
			</div>
		</div>
	</ClientOnly>
</template>

<script lang="ts" setup>
import { isClient } from '@vueuse/core'

const el = useTemplateRef('el')

const x = isClient ? (window.innerWidth - 180) / 2 : 40

const disabled = shallowRef(false)
const { position, style } = useDraggable(el, {
	initialValue: { x: x, y: -200 },
	disabled,
})

const targetIsVisible = useElementVisibility(el)

watchDebounced(
	targetIsVisible,
	() => {
		if (!el.value || targetIsVisible.value) return
		el.value.classList.add('transition-all')
		el.value.classList.add('select-none')
		position.value = { x: x, y: 40 }
		setTimeout(() => {
			el.value!.classList.remove('transition-all')
			el.value!.classList.remove('select-none')
		}, 1000)
	},
	{ debounce: 1000, immediate: true },
)
</script>
