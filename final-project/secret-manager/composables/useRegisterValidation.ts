import type { Ref } from 'vue'

export function useRegisterValidation(
  username: Ref<string>,
  password: Ref<string>,
  confirmPassword: Ref<string>,
  errors: Ref<Record<string, string>>
) {
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!username.value) {
      newErrors.username = 'Username is required'
    } else if (username.value.length < 3) {
      newErrors.username = 'Username must be at least 3 characters'
    }

    if (!password.value) {
      newErrors.password = 'Password is required'
    } else if (password.value.length < 4) {
      newErrors.password = 'Password must be at least 4 characters'
    }

    if (!confirmPassword.value) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (password.value !== confirmPassword.value) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    errors.value = newErrors
    return Object.keys(newErrors).length === 0
  }

  return { validateForm }
}
