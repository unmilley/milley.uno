<template>
	<div
		ref="el"
		class="fixed left-3 w-16 bottom-16 flex flex-col h-max gap-6 p-2 py-4 shadow-sm bg-base-100/80 backdrop-blur-xs border border-base-300 rounded-box hover:w-56 transition-all delay-[0ms] hover:delay-100 z-50"
	>
		<div class="flex items-center gap-2 pl-3.5 relative">
			<Icon name="mill:palette" size="1.25rem" />
			<div
				role="tablist"
				class="tabs tabs-box bg-transparent absolute left-4 transition-[opacity,transform,translate]"
				:class="classHover"
			>
				<a
					v-for="theme in themes"
					:key="theme.value"
					role="tab"
					class="tab"
					:class="{ 'tab-active': $colorMode.preference === theme.value }"
					@click.prevent.stop="$colorMode.preference = theme.value"
				>
					<Icon :name="theme.icon" size="1.2rem" />
				</a>
			</div>
		</div>

		<div class="flex items-center gap-2 pl-3.5 relative">
			<Icon name="mill:language" size="1.25rem" />
			<div
				role="tablist"
				class="tabs tabs-box bg-transparent absolute left-4 transition-[opacity,transform,translate]"
				:class="classHover"
			>
				<a
					v-for="locale in locales"
					:key="locale.code"
					role="tab"
					class="tab"
					:class="{ 'tab-active': localeNow === locale.code }"
					@click.prevent.stop="changeLang(locale.code)"
				>
					<span class="uppercase font-bold">
						{{ locale.code }}
					</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Locale } from 'vue-i18n'

const el = useTemplateRef('el')
const isHover = useElementHover(el)

const classHover = computed(() => {
	if (isHover.value) return 'translate-x-7 opacity-100 delay-150'
	return 'translate-x-0 opacity-0'
})

const { locales, setLocale, locale: localeNow } = useI18n()

const changeLang = (code: Locale) => {
	if (code === localeNow.value) return
	setLocale(code)
}

const themes = [
	{ value: 'dark', icon: 'bxs:moon' },
	{ value: 'light', icon: 'bxs:sun' },
	{ value: 'system', icon: 'bx:desktop' },
]
</script>
