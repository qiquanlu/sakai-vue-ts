import { defineStore } from 'pinia'

interface ThemeState {
  darkTheme: boolean
  menuClick: boolean
  staticMenuInactive: boolean
  overlayMenuActive: boolean
  mobileMenuActive: boolean
  layoutMode: string
}
export const useThemeStore = defineStore({
  id: 'theme',
  state: (): ThemeState => {
    return {
      darkTheme: false,
      menuClick: false,
      layoutMode: 'static',
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false
    }
  },
  getters: {
    isDarkTheme: (state) => {
      return state.darkTheme
    }
  },
  actions: {
    toggleThemeColor() {
      this.darkTheme = !this.darkTheme
    }
  }
})
