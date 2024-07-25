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
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: ['@/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: '@/tailwind.config.ts',
    viewer: false,
  },

  devServer,
})
