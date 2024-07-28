import Crypto from 'crypto-js'
import getIp from './ip'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

export const getBlogPosts = async () => {
  const blogPosts = await queryContent('/').find()
  return blogPosts.map(({ title, publishedAt, _path, summary }) => {
    const metadata: Metadata = { title: title ?? '', publishedAt, summary }
    const slug = _path ? _path.replace('/blog/', '') : ''
    const path = _path ?? ''
    return { metadata, slug, path }
  })
}

export const getBlogPost = async (_slug: string) => {
  const { title, publishedAt, _path, summary } = await queryContent(`/blog/${_slug}`).findOne()
  const metadata: Metadata = { title: title ?? '', publishedAt, summary }
  const slug = _path ? _path.replace('/blog/', '') : ''
  const path = _path ?? ''
  return { metadata, slug, path }
}

export const getSessionId = async (slug: string, userAgent: string | undefined) => {
  const clientIP = await getIp()

  const currentUserId = Crypto.MD5(clientIP + 'meow' + userAgent).toString(Crypto.enc.Hex)

  return `${slug}__${currentUserId}`
}
