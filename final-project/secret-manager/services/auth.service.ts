import type { ApiResponse, LoginResponse, RegisterResponse } from './types'

const BASE_URL = 'https://secret-management-backend.nshub.net'

export const authService = {
  login(username: string, password: string) {
    return $fetch<ApiResponse<LoginResponse>>(
      `${BASE_URL}/auth/login`,
      {
        method: 'POST',
        body: { username, password }
      }
    )
  },

  register(username: string, password: string) {
    return $fetch<ApiResponse<RegisterResponse>>(
      `${BASE_URL}/auth/register`,
      {
        method: 'POST',
        body: { username, password }
      }
    )
  }
}
