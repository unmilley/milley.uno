class Links {
  private root = '/'

  HOME = this.root
  BLOG = `${this.root}blog`
}

export const NUXT_LINKS = new Links()

export const NAVIGATION = [
  { title: 'pages.home', path: NUXT_LINKS.HOME },
  { title: 'pages.blog', path: NUXT_LINKS.BLOG },
]
