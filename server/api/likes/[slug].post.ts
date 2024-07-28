import { prisma } from '~/prisma/db'
import { getSessionId } from '~/utils'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    if (!slug) throw createError('ID is incorrect')

    const sessionId = await getSessionId(slug, getHeader(event, 'user-agent'))

    const [post, user] = await Promise.all([
      prisma.post.update({
        where: { slug },
        data: { likes: { increment: 1 } },
      }),

      prisma.session.upsert({
        create: { id: sessionId },
        where: { id: sessionId },
        update: { like: true },
      }),
    ])

    return {
      likes: post ? post.likes : 0,
      isCurrentUserLiked: user ? user.like : false,
    }
  } catch (error: any) {
    console.error(error.message)

    return Response.json(error, { status: 500 })
  }
})
