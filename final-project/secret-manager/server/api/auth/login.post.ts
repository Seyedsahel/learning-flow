import type { ApiResponse, LoginResponse} from '@/services/types'

export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  const res = await $fetch<ApiResponse<LoginResponse>>(
    'https://secret-management-backend.nshub.net/auth/login', 
    {
    method: 'POST',
    body
    }
  )

  const token = res.data.token

  
  setCookie(event, 'token', token, {
    httpOnly: true,
    secure: false, 
    sameSite: 'strict',
    path: '/'
  })

  return { success: true }
})
