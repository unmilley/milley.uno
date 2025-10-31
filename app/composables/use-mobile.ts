export const useMobile = createGlobalState(() => {
	const { width: windowWidth } = useWindowSize()
	return computed(() => (windowWidth.value ?? 768) <= 500)
})
