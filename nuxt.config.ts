import { DEFAULT_LOCALE, LOCALE_LABELS } from './i18n.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-20',

  css: ['~/assets/styles/base.css'],

  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
  ],

  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: [LOCALE_LABELS.EN, LOCALE_LABELS.ES],
    vueI18n: './i18n.config.ts',
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'always-multiline',
        indent: 2,
        quotes: 'single',
        semi: false,
      },
    },
  },
})
