import { createHash } from 'crypto'
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
    return { metadata, slug }
  })
}

export const getSessionId = async (slug: string) => {
  const clientIP = await getIp()

  const currentUserId = createHash('md5')
    .update(clientIP + 'meow', 'utf-8')
    .digest('hex')

  return `${slug}__${currentUserId}`
}
