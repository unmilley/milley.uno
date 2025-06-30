import type { Data, Project } from '../types'

const isAllReady = (data: unknown): data is Data => {
	if (data && typeof data === 'object' && 'objects' in data && 'total' in data && 'time' in data) return true
	return false
}

const generate = (data: Data['objects']) => {
	return data
		.map(({ package: pkg }) => ({
			title: pkg.name.replace('@unmilley/', '').replaceAll('-', ' '),
			description: pkg.description,
			version: pkg.version,
			path: pkg.links.npm,
			source: pkg.links.homepage,
			createAt: new Date(pkg.date),
		}))
		.sort((a, b) => +b.createAt - +a.createAt)
}

export default defineCachedEventHandler(
	async (event): Promise<Project[]> => {
		const data = await event.$fetch('https://registry.npmjs.com/-/v1/search?text=author:unmilley&size=20')
		if (!isAllReady(data)) return []
		return generate(data.objects)
	},
	{
		maxAge: 1,
		name: 'npm-pkg-api',
	},
)
