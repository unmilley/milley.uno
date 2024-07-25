type LinksKeys = keyof typeof links
type Links = Record<LinksKeys, string>

const links = {
  vk: 'https://vk.com/unmilley',
  tg: 'https://t.me/milleyz',
  telegram: 'https://t.me/milleyz',
  github: 'https://github.com/unmilley',
}

class ShortLinks {
  links: Links
  constructor() {
    this.links = links
  }

  get = (_id: string | string[]) => {
    const id = (typeof _id === 'string' ? _id.toLowerCase() : _id[0].toLowerCase()) as LinksKeys
    return this.links[id]
  }
}

export const SHORT_LINKS = new ShortLinks()
