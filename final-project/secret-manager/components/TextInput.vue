<script setup lang="ts">
defineProps<{
  id: string
  label: string
  modelValue: string
  error?: string
  placeholder?: string
}>()

defineEmits(['update:modelValue'])


</script>

<template>
  <div>
    <label :for="id" class="block text-slate-200 mb-2">
      {{ label }}
    </label>

    <div class="relative">
      <input
        :id="id"
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :class="[
          'w-full bg-slate-900 border rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent',
          error ? 'border-red-500' : 'border-slate-700'
        ]"
        :placeholder="placeholder"
      />

      <span
        v-if="modelValue && modelValue.length>3"
        class="pi pi-check-circle absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 text-2xl"
      ></span>
    </div>

    <p v-if="error" class="text-red-400 text-sm mt-1">
      {{ error }}
    </p>
  </div>
</template>
