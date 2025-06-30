import tailwindcss from '@tailwindcss/vite'
const devServer = { https: true }

const baseUrl = 'https://milley.uno'

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: false },
	future: {
		compatibilityVersion: 4,
	},
	modules: ['@vueuse/nuxt', '@nuxt/icon', '@nuxt/scripts', '@nuxtjs/color-mode', '@nuxtjs/i18n', '@nuxtjs/seo'],

	css: ['@/assets/css/tailwind.css'],
	imports: {
		dirs: ['./types'],
	},

	components: {
		dirs: [
			{
				path: '~/components/ui',
				pathPrefix: false,
				global: true,
			},
			'~/components',
		],
	},

	colorMode: {
		preference: 'system',
		fallback: 'dark',
		classSuffix: '',
		dataValue: 'theme',
		storageKey: 'theme',
		storage: 'cookie',
	},
	icon: {
		mode: 'svg',
		collections: ['bx', 'bxs', 'ph', 'vscode-icons'],
		customCollections: [{ prefix: 'mill', dir: './app/assets/icons' }],
	},

	runtimeConfig: {
		public: {
			gaTrackingId: process.env.NUXT_FB_MEASUREMENT_ID,
			umamiId: process.env.NUXT_UMAMI_ID,
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},

	i18n: {
		bundle: {
			optimizeTranslationDirective: false,
		},
		lazy: true,
		strategy: 'no_prefix',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'un_i18n',
			cookieCrossOrigin: true,
		},
		defaultLocale: 'en',
		locales: [
			{ code: 'en', name: 'English', iso: 'en_US', file: 'en_US.ts' },
			{ code: 'ru', name: 'Русский', iso: 'ru_RU', file: 'ru_RU.ts' },
		],
	},

	site: {
		url: baseUrl,
		name: 'Alexandr Lyadov',
		description: 'Frontend Developer (〜￣▽￣)〜',
	},
	schemaOrg: {
		identity: {
			type: 'Person',
			name: 'Alexandr Lyadov',
			url: baseUrl,
		},
	},
	devServer,
})
