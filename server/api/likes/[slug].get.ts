import { prisma } from '~/prisma/db'
import { getSessionId } from '~/utils'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    if (!slug) throw createError('ID is incorrect')

    const sessionId = await getSessionId(slug)

    const [user, post] = await Promise.all([
      prisma.session.findUnique({ where: { id: sessionId } }),
      prisma.post.findUnique({ where: { slug } }),
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
