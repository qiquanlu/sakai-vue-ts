import { defineStore } from 'pinia'

interface MainState {
  user: null | string
}
export const useAuthStore = defineStore({
  id: 'auth',
  state: (): MainState => {
    return {
      user: null
    }
  },
  getters: {
    userName: (state) => {
      return state.user
    }
  },
  actions: {
    SetUser(name: string) {
      this.user = name
    }
  }
})
