import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'

const dark = {
  ...themes.dark,
  primary: '#FBD38D',
  'base-100': '#202023',
}
const light = {
  ...themes.light,
  primary: '#805AD5',
  'base-100': '#f0e7db',
}

const config: Config = {
  content: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue', './app.vue', './error.vue'],
  // darkMode: ['class'],
  darkMode: ['class', 'data-theme'],
  theme: {
    extend: {
      fontFamily: {
        averia: ['"Averia Sans Libre"', 'sans-serif'],
      },
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1536px',
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        '.container': {
          width: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '48rem',
          },
          '@screen xl': {
            maxWidth: '48rem',
          },
        },
      })
    },
    typography,
    daisyui,
  ],
  daisyui: {
    themes: [{ dark, light }],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
}

export default config
