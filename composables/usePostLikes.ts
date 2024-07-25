type Payload = {
  likes: number
  isCurrentUserLiked: boolean
}

export const usePostLikes = async (slug: string) => {
  const { data, error } = await useLazyFetch<Payload>(`/api/likes/${slug}`, { method: 'get' })

  const increment = async () => {
    if (!data.value || data.value.isCurrentUserLiked) return

    data.value.likes = data.value.likes + 1
    data.value.isCurrentUserLiked = true
    await $fetch(`/api/likes/${slug}`, { method: 'post' })
  }
  const isLoading = computed(() => !error.value && !data.value)
  const isCurrentUserLike = toRef(() => data.value?.isCurrentUserLiked)
  const likes = toRef(() => data.value?.likes)

  return { isLoading, isCurrentUserLike, likes, increment }
}
