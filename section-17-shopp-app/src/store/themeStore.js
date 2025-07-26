import { defineStore } from 'pinia'

const THEME_OPTIONS = {
  LIGHT: 'light',
  DARK: 'dark',
}
const DEFAULT_THEME = THEME_OPTIONS.DARK
const BOOTSTRAP_DATA_ATTRIBUTE = 'data-bs-theme'

export const useThemeStore = defineStore('themeStore', {
  state: () => ({
    theme: DEFAULT_THEME,
  }),

  actions: {
    setTheme(newTheme) {
      if (Object.values(THEME_OPTIONS).includes(newTheme)) {
        this.theme = newTheme
        const bodyElement = document.body
        bodyElement.setAttribute(BOOTSTRAP_DATA_ATTRIBUTE, newTheme)
      }
    },
  },
})
