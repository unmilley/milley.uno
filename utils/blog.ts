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

export const getSessionId = async (slug: string) => {
  const clientIP = await getIp()

  const currentUserId = Crypto.MD5(clientIP + 'meow').toString(Crypto.enc.Hex)

  return `${slug}__${currentUserId}`
}
