import { useEventListener } from '@vueuse/core'
import { isClient, tryOnMounted } from '@vueuse/shared'

export function useWindowHeight() {
	const _window = isClient ? window : undefined
	const initialHeight = Number.POSITIVE_INFINITY

	const height = shallowRef(initialHeight)

	const update = () => {
		if (!_window) return
		if (_window.visualViewport) {
			const { pageTop: visualViewportHeight, scale } = _window.visualViewport
			height.value = Math.round(visualViewportHeight * scale)
		} else {
			height.value = _window.document.documentElement.clientHeight
		}
	}

	update()
	tryOnMounted(update)

	const listenerOptions = { passive: true }
	useEventListener('resize', update, listenerOptions)

	if (_window && _window.visualViewport) {
		useEventListener(_window.visualViewport, 'resize', update, listenerOptions)
	}

	return { height }
}
