<template>
	<section class="pt-8 pb-2">
		<!-- <BoxReveal color="var(--color-primary)" v-if="meow2"> -->
		<h1 class="mb-2 text-2xl font-bold leading-[0.6] sm:leading-8">
			Frontend Developer <br class="sm:hidden" />
			<span class="text-xs">&amp; Backend Developer</span>
		</h1>
		<!-- </BoxReveal> -->
		<!-- <BoxReveal color="var(--color-primary)" :delay="0.8" v-if="meow2"> -->
		<p class="mb-8 text-lg leading-relaxed max-w-2xl">
			{{ $t('home.about[0]') }}
			<template v-for="s in stacks.filter((_, i) => i !== stacks.length - 1)" :key="s.title">
				<badge-stack :stack="s" />
				{{ ' ' }}
			</template>
			{{ $t('misc.and') }}
			<badge-stack :stack="stacks.at(-1)!" />. {{ $t('home.about[1]') }}
		</p>
		<!-- </BoxReveal> -->
		<!--  -->
		<!--  -->
		<div class="size-full max-w-lg items-center justify-center overflow-hidden p-8" v-if="meow2" @click="meow">
			<!-- <BoxReveal color="var(--color-primary)" :delay="1"> -->
			<ul class="flex items-center flex-wrap gap-2">
				<li v-for="link in links" :key="link.title">
					<a
						:title="link.title"
						class="btn btn-ghost hover:btn-soft hover:btn-primary btn-sm px-2"
						:class="{ 'btn-disabled': link.disabled }"
						:href="link.path"
						target="_blank"
						rel="noreferrer"
					>
						<Icon :name="link.icon" size="1.35rem" class="duration-200" />
						<span class="font-medium text-sm">
							{{ link.title }}
						</span>
					</a>
				</li>
				<li v-for="social in socials" :key="social.title">
					<div class="tooltip tooltip-bottom tooltip-base-content" :data-tip="social.title">
						<a
							:href="social.path"
							target="_blank"
							rel="noreferrer"
							:title="social.title"
							class="btn btn-ghost hover:btn-soft hover:btn-primary btn-sm px-2"
						>
							<Icon :name="social.icon" size="1.35rem" class="duration-200" />
						</a>
					</div>
				</li>
			</ul>
			<!-- </BoxReveal> -->
		</div>
		<!--  -->
		<!--  -->
	</section>
</template>

<script setup lang="ts">
const meow2 = ref(true)
const meow = () => {
	meow2.value = false
	setTimeout(() => {
		meow2.value = true
	}, 0)
}

const stacks = [
	{
		title: 'Vue',
		icon: 'vscode-icons:file-type-vue',
		path: 'https://vuejs.org/',
		color: '#00DC82',
	},
	{
		title: 'Nuxtjs',
		icon: 'vscode-icons:file-type-nuxt',
		path: 'https://nuxt.com/',
		color: '#00DC82',
	},
	{
		title: 'Nestjs',
		icon: 'vscode-icons:file-type-nestjs',
		path: 'https://nestjs.com/',
		color: '#EA285B',
	},
	{
		title: 'Typescript',
		icon: 'vscode-icons:file-type-typescript-official',
		path: 'https://www.typescriptlang.org/',
		color: '#3F9AFF',
	},
]

const links = [
	{ title: 'Read.cv', icon: 'ph:read-cv-logo-fill', path: 'https://read.cv/milley', disabled: true },
	{ title: 'Github', icon: 'bx:bxl-github', path: '/q/gh' },
]

const socials = [
	{ title: 'VK', icon: 'bx:bxl-vk', path: '/q/vk' },
	{ title: 'Telegram', icon: 'bx:bxl-telegram', path: 'q/tg' },
]
</script>
