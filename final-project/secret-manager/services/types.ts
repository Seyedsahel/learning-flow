//api res type

export interface ApiResponse<T> {
  data: T
}

// login res type
export interface LoginResponse {
  token: string
}

//register res type
export interface RegisterResponse {
  id: number
  username: string
  password: string
}