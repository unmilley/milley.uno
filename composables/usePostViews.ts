export const usePostViews = async (slug: string) => {
  const { data } = await useLazyFetch<number>(`/api/views/${slug}`, { method: 'get' })

  const increment = async () => {
    if (!data.value) return

    data.value = data.value + 1
    await $fetch(`/api/views/${slug}`, { method: 'post' })
  }
  const views = toRef(() => data.value)

  return { views, increment }
}
