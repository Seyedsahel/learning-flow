export default defineEventHandler((event) => {
  setCookie(event, 'token', '', {
    maxAge: 0,
    path: '/'
  })

  return { success: true }
})
