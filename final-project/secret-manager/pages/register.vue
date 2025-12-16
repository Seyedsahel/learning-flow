<script setup lang="ts">
import { ref } from 'vue'
import { useRegisterValidation } from '@/composables/useRegisterValidation'
import type TextInputVue from '~/components/TextInput.vue'

definePageMeta({
  middleware: 'auth'
})

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const errors = ref<Record<string, string>>({})

const { validateForm } = useRegisterValidation(
  username,
  password,
  confirmPassword,
  errors
)

const handleSubmit = () => {
  if (validateForm()) {
    console.log('Registration successful', {
      username: username.value,
      password: password.value
    })
  }
}
</script>



<template>
  <div class="flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-4">
          <span class="pi pi-user text-indigo-400 text-3xl"></span>
        </div>
        <h1 class="text-slate-100 mb-2">Create Account</h1>
        <p class="text-slate-400">Sign up to get started</p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <TextInput
          id="username"
          label="Username"
          v-model="username"
          :error="errors.username"
          placeholder="Enter your username"
        />
         <PasswordInput
          id="password"
          label="Password"
          v-model="password"
          :error="errors.password"
          placeholder="Enter your password"
        />
           <PasswordInput
          id="confirmPassword"
          label="Confirm Password"
          v-model="confirmPassword"
          :error="errors.confirmPassword"
          placeholder="Confirm your password"
        >
          <p
            v-if="confirmPassword && password === confirmPassword && !errors.confirmPassword"
            class="text-emerald-400 text-sm mt-1.5 flex items-center gap-1"
          >
            <span class="pi pi-check-circle text-emerald-500"></span>
            Passwords match
          </p>
        </PasswordInput>
        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg transition-colors"
        >
          Create Account
        </button>
      </form>

      <div class="text-center mt-6">
        <p class="text-slate-400">
          Already have an account?
          <button class="text-indigo-400 hover:text-indigo-300 hover:underline">
            Sign in
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
