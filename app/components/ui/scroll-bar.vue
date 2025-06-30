<template>
	<div class="w-screen">
		<div class="fixedBar" :style="{ opacity: progress ? 1 : 0 }">
			<div class="progressBar" :style="[`height: ${progress}%`]"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
const progress = ref(0)

const scrollListener = () => {
	if (!window || !window.document) return
	const totalHeight = document.body.clientHeight - document.body.offsetTop - window.innerHeight
	const windowScrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop

	if (windowScrollTop === 0) progress.value = 0
	else if (windowScrollTop > totalHeight) progress.value = 100
	else progress.value = (windowScrollTop / totalHeight) * 100
}

onMounted(() => {
	window.addEventListener('scroll', scrollListener)
})

onUnmounted(() => {
	window.removeEventListener('scroll', scrollListener)
})
</script>

<style scoped>
.fixedBar {
	position: fixed;
	opacity: 0;
	z-index: 10;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
	width: 8px;
	height: 20vh;

	background: var(--color-base-200);
	-webkit-backdrop-filter: blur(20px);
	backdrop-filter: blur(20px);
	border-radius: 20px;
	transition: opacity 0.25s ease;
}

@media (max-width: 690px) {
	.fixedBar {
		width: 5px;
		right: 8px;
	}
}
.fixedBar .progressBar {
	--alert-color: var(--color-primary);
	height: 0;
	display: flex;
	position: relative;
	top: 0;
	border-radius: 20px;
	transition: height 0.25s ease;
	background: var(--color-primary);
}
/* 
background: rgb(47,44,43)
text color: rgb(251 211 141)
*/
</style>
