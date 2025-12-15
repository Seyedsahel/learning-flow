import type {ApiResponse , RegisterResponse } from '@/services/types'

export default defineEventHandler(async (event) =>{
    const body = await readBody(event)

    const res = await $fetch<ApiResponse<RegisterResponse>>(
        'https://secret-management-backend.nshub.net/auth/register',
        {
            method: 'POST',
            body
        }
    )

    return res
})