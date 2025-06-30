<template>
	<div class="relative" ref="qwe">
		<div class="absolute inset-0 grid grid-cols-3 grid-rows-3 -z-10">
			<div v-for="_ in 9" class=""></div>
		</div>

		<slot :direction :elementIsVisible />
	</div>
</template>

<script lang="ts" setup>
import { PATTERN_BACKGROUND_DIRECTION } from '~/src/constants/PatternBackground'

const heroSize = useState('hero-size', () => ({ width: 0, height: 0 }))
const el = useTemplateRef('qwe')
const { width, height } = useElementSize(el)
const { x, y } = useMouse({ target: el })
const elementIsVisible = useElementVisibility(el)

const newY = computed(() => y.value - heroSize.value.height)

const elementSize = computed(() => {
	if (!width.value || !height.value) return []
	const W = width.value / 3
	const H = height.value / 3

	return [
		[W, H],
		[W * 2, H],
		[W * 3, H],
		[W, H * 2],
		[W * 2, H * 2],
		[W * 3, H * 2],
		[W, H * 3],
		[W * 2, H * 3],
		[W * 3, H * 3],
	]
})

const PATTERN_BACKGROUND_DIRECTION_ARR = [
	PATTERN_BACKGROUND_DIRECTION.TopLeft,
	PATTERN_BACKGROUND_DIRECTION.Top,
	PATTERN_BACKGROUND_DIRECTION.TopRight,
	PATTERN_BACKGROUND_DIRECTION.Left,
	PATTERN_BACKGROUND_DIRECTION.Bottom,
	PATTERN_BACKGROUND_DIRECTION.Right,
	PATTERN_BACKGROUND_DIRECTION.BottomLeft,
	PATTERN_BACKGROUND_DIRECTION.Bottom,
	PATTERN_BACKGROUND_DIRECTION.BottomRight,
] as const

const direction = ref<(typeof PATTERN_BACKGROUND_DIRECTION_ARR)[number]>('bottom')

watchThrottled(
	[x, newY],
	() => {
		if (
			!width.value ||
			!height.value ||
			!elementSize.value.length ||
			x.value < 0 ||
			x.value > width.value ||
			newY.value < 0 ||
			newY.value > height.value
		) {
			direction.value = 'bottom'
			return
		}

		const colIndex = Math.floor(x.value / (width.value / 3))
		const rowIndex = Math.floor(newY.value / (height.value / 3))

		const index = rowIndex * 3 + colIndex

		direction.value = PATTERN_BACKGROUND_DIRECTION_ARR[index] || 'bottom'
	},
	{ throttle: 200 },
)
</script>
