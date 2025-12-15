export const authService = {
  login(username: string, password: string) {
    return $fetch('/api/auth/login', {
      method: 'POST',
      body: { username, password }
    })
  },

  register(username: string, password: string) {
    return $fetch("/api/auth/register",{
        method: 'POST',
        body: { username, password }
      })
  },

  logout() {
    return $fetch('/api/auth/logout', {
      method: 'POST'
    })
  }
}
