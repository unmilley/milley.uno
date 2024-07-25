// import { readFileSync } from 'fs'
// import { homedir } from 'os'
// import { join } from 'path'

const devServer = {
  https: true,
  // https: {
  //   key: readFileSync(join(homedir(), '.https', 'localhost-key.pem')).toString(),
  //   cert: readFileSync(join(homedir(), '.https', 'localhost.pem')).toString(),
  // },
}

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false, telemetry: false, timeline: { enabled: false } },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/scripts',
  ],
  tailwindcss: {
    cssPath: ['@/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: '@/tailwind.config.ts',
    viewer: false,
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
    dataValue: 'theme',
    storageKey: 'theme',
  },
  i18n: {
    vueI18n: '@/i18n.config.ts',
    lazy: true,
    langDir: 'src/i18n',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    dynamicRouteParams: false,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'un_i18n',
      // redirectOn: 'root', // recommended
      cookieCrossOrigin: true,
    },
    locales: [
      { code: 'en', name: 'English', iso: 'en_US', file: 'en_US.ts' },
      { code: 'ru', name: 'Русский', iso: 'ru_RU', file: 'ru_RU.ts' },
    ],
  },

  devServer,
})
