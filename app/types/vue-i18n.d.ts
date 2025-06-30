import '@vue/runtime-core'
import type { VueI18n } from 'vue-i18n'

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$t: VueI18n['t']
		$d: VueI18n['d']
		$rt: VueI18n['rt']
		$te: VueI18n['te']
		$tm: VueI18n['tm']
		$n: VueI18n['n']
	}
}
