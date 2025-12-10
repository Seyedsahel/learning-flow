<script setup>
import SecretCard from './SecretCard.vue';
import secretData from '@/secrets.json';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const secrets = ref(secretData);
</script>

<template>
<div class="bg-[#0f1a2b]">
  <div class="min-h-screen flex flex-col p-4">
    <div class="flex flex-col justify-center items-center gap-1">
      <SecretCard v-if="secrets.length === 0" :title="'No Secrets Found'" :description="'Maybe add a new record to get started'" />
      <SecretCard v-else v-for="secret in secrets" :key="secret.id" :title="secret.title" />
    </div>
  <!-- Fixed Add Button -->
  <RouterLink
    class="fixed bottom-14 md:bottom-6 left-6 w-12 h-12 md:w-15 md:h-15 rounded-full bg-indigo-500 flex justify-center items-center shadow-xl text-white text-2xl"
    to="/add-secret"
  >
    +
  </RouterLink>

</div>
</div>
  

</template>