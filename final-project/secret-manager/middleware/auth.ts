export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token')

  const publicPages = ['/login', '/register']
  const isPublic = publicPages.includes(to.path)

  if (!token.value && !isPublic) {
    return navigateTo('/login')
  }

  if (token.value && isPublic) {
    return navigateTo('/dashboard')
  }
})
