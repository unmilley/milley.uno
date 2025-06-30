export default defineNuxtPlugin((nuxtApp) => {
	const { umamiId, gaTrackingId } = nuxtApp.$config.public

	/* Google analytics*/
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
	if (umamiId) {
		useHead({
			script: [
				{
					src: 'https://eu.umami.is/script.js',
					type: 'text/javascript',
					defer: true,
					'data-website-id': umamiId,
				},
			],
		})
	}
})
