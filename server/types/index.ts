export interface Data {
	objects: Object[]
	total: number
	time: Date
}

export interface Object {
	downloads: Downloads
	dependents: number
	updated: Date
	searchScore: number
	package: Package
	score: Score
	flags: Flags
}

export interface Downloads {
	monthly: number
	weekly: number
}

export interface Flags {
	insecure: number
}

export interface Package {
	name: string
	keywords: string[]
	version: string
	description: string
	sanitized_name: string
	publisher: Publisher
	maintainers: Maintainer[]
	license: string
	date: Date
	links: Links
}

export interface Links {
	homepage: string
	repository: string
	bugs: string
	npm: string
}

export interface Maintainer {
	email: string
	username: string
}

export interface Publisher {
	email: string
	actor?: Actor
	username: string
}

export interface Actor {
	name: string
	type: string
	email: string
}

export interface Score {
	final: number
	detail: Detail
}

export interface Detail {
	popularity: number
	quality: number
	maintenance: number
}

export type Project = {
	title: string
	description: string
	version: string
	path: string
	source: string
	createAt: Date
}
