export default defineNuxtPlugin((nuxtApp) => {
  const { $config } = nuxtApp

  /* Google analytics*/
  const gaTrackingId = $config.public.gaTrackingId
  if (gaTrackingId) {
    useHead({
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`,
          type: 'text/javascript',
          defer: true,
        },
        {
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag("js",new Date);gtag("config","${gaTrackingId}");`,
          id: 'google-analytics',
          type: 'text/javascript',
          defer: true,
        },
      ],
    })
  }

  /* Umami analytics */
  const umamiId = $config.public.umamiId
  if (umamiId) {
    useHead({
      script: [
        {
          src: 'https://eu.umami.is/script.js',
          type: 'text/javascript',
          defer: true,
          // @ts-ignore
          'data-website-id': umamiId,
        },
      ],
    })
  }
})
