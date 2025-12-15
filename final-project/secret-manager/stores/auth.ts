import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    loading: false,
    error: null as string | null
  }),

  actions: {
    setAuthenticated(value: boolean) {
      this.isAuthenticated = value
    },

    async logout() {
      await $fetch('/api/auth/logout', { method: 'POST' })
      this.isAuthenticated = false
    }
  }
})
