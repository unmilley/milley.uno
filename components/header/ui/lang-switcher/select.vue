<template>
  <li>
    <details open>
      <summary class="capitalize">
        <Icon name="mill:language" size="1.2rem" />
        {{ $t('settings.lang') }}
      </summary>
      <ul>
        <li v-for="locale in locales" :key="locale.code">
          <a @click.prevent.stop="changeLang(locale.code)">
            <Icon :name="locale.code === localeNow ? 'bx:check-square' : 'bx:square'" size="1.35rem" />
            {{ locale.name }}
          </a>
        </li>
      </ul>
    </details>
  </li>
</template>

<script lang="ts" setup>
const { locales, setLocale, locale: localeNow } = useI18n()

const changeLang = (code: string) => {
  if (code === localeNow.value) return
  setLocale(code)
}
</script>
