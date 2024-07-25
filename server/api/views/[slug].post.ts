import { prisma } from '~/prisma/db'
import { getSessionId } from '~/utils'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    if (!slug) throw createError('ID is incorrect')

    const sessionId = await getSessionId(slug)

    const session = await prisma.session.findUnique({ where: { id: sessionId } })
    const doesSessionExist = Boolean(session)
    if (!doesSessionExist) {
      await prisma.session.create({ data: { id: sessionId } })
    }

    const post = await prisma.post.upsert({
      where: { slug },
      create: { slug, views: 1 },
      update: { views: { increment: doesSessionExist ? 0 : 1 } },
    })

    return post ? post.views : 1
  } catch (error: any) {
    console.error(error.message)

    return Response.json(error, { status: 500 })
  }
})
