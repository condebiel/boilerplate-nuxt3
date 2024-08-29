import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import { createI18n } from 'vue-i18n'
import Index from './index.vue'
import { render } from '@/test/testUtils'

import { DEFAULT_LOCALE } from '@/i18n.config'
import localesEN from '@/locales/en'
import localesES from '@/locales/es'

export const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  messages: {
    en: localesEN,
    es: localesES,
  },
})

describe('Given an Index component tested with vue-test-utils', () => {
  describe('When it\'s mounted', () => {
    it('Then renders H1 text properly', () => {
      const wrapper = mount(Index, {
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.text()).toContain('Nuxt3 Boilerplate')
    })
  })
})

describe('Given an Index component tested with testing-library', () => {
  describe('When it\'s mounted', () => {
    it('Then renders H1 text properly', () => {
      const { getByText } = render(Index, {
        global: {
          // should be nice to move this to a global setup file testUtils.ts
          plugins: [i18n],
        },
      })
      expect(getByText('This is a simple Nuxt3 Boilerplate')).toBeInTheDocument()
    })
  })
})
