<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  id: string
  label: string
  modelValue: string
  error?: string
  placeholder?: string
}>()

defineEmits(['update:modelValue'])

const show = ref(false);
</script>

<template>
  <div>
    <label :for="id" class="block text-slate-200 mb-2">
      {{ label }}
    </label>

    <div class="relative">
      <input
        :id="id"
        :type="show ? 'text' : 'password'"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :class="[
          'w-full bg-slate-900 border rounded-lg px-4 py-3 pr-12 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent',
          error ? 'border-red-500' : 'border-slate-700'
        ]"
        :placeholder="placeholder"
      />

      <button
        type="button"
        @click="show = !show"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors"
      >
        <span v-if="show" class="pi pi-eye text-lg"></span>
        <span v-else class="pi pi-eye-slash text-lg"></span>
      </button>
    </div>

    <p v-if="error" class="text-red-400 text-sm mt-1">
      {{ error }}
    </p>

    <slot />
  </div>
</template>
