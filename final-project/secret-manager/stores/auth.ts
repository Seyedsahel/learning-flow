import { defineStore } from 'pinia'
import { authService } from '@/services/auth.service'

export const useAuthStore = defineStore('auth', {

  state: () => ({
    token: null as string | null,
    // flag for middleware
    isAuthenticated: false,
    loading: false,
    // error message from api
    error: null as string | null
  }),

   actions: {
    //login action
    async login(username: string, password: string) {
      //loading until response comes
      this.loading = true
      // reset error
      this.error = null
      try {
        //api call
        const response = await authService.login(username, password)
        //store token and set auth flag
        this.token = response.data.token
        this.isAuthenticated = true
      }
      catch (err: any) {
        this.error = err?.data?.message || 'Login failed'
        throw err
      }
      finally {
        this.loading = false
      }
    },
    //register action
    async register(username: string, password: string) {
      this.loading = true
      this.error = null
      try {
        await authService.register(username, password)
      }
      catch (err: any) {
        this.error = err?.data?.message || 'Register failed'
        throw err
      } 
      finally {
        this.loading = false
      }
    },
    //logout action
    logout() {
      this.token = null
      this.isAuthenticated = false
    }
  }
})






