import shortLinks from '@/src/constants/shortLinks'

export default defineEventHandler(async (event) => {
	const route = getRouterParam(event, 'link')
	if (!route) await sendRedirect(event, '/', 302)

	const link = shortLinks[route!]
	if (!link) await sendRedirect(event, '/', 302)

	await sendRedirect(event, link, 302)
})
