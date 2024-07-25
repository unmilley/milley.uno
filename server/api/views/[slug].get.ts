import { prisma } from '~/prisma/db'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    if (!slug) throw createError('ID is incorrect')
    // const slug = z.string().parse(params.slug);

    const post = await prisma.post.findUnique({
      where: { slug },
    })

    return post ? post.views : 1
  } catch (error: any) {
    console.error(error.message)

    return Response.json(error, { status: 500 })
  }
})
