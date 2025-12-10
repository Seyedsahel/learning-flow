<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from '@/components/Navbar.vue'

const router = useRouter();

const name = ref("");
const content = ref("");

const errors = ref({
  name: "",
  content: "",
});


const saveSecret = () => {
  errors.value = { name: "", content: "" };

  if (!name.value.trim()) errors.value.name = "Name is required";
  if (!content.value.trim()) errors.value.content = "Content is required";

  if (errors.value.name || errors.value.content) return;

  alert("Secret saved !");
};


const cancel = () => router.back();
</script>

<template>
    <Navbar/>

  <div class="bg-[#0f1a2b] min-h-screen p-4 flex flex-col">
    <div class="max-w-md mx-auto w-full bg-[#0d1626] p-5 rounded-xl border border-[#1c2942]">
      <h2 class="text-white text-xl font-semibold mb-4">Create New Secret</h2>

      <!-- Name -->
      <input
        v-model="name"
        class="w-full bg-[#162235] text-gray-200 border border-[#1f314d] my-1 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Name"
      />

      <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name }}</p>

      <!-- Content -->
      <textarea
        v-model="content"
        rows="8"
        class="w-full bg-[#162235] text-gray-200 border border-[#1f314d] mt-1 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Your secret…"
      ></textarea>

      <p v-if="errors.content" class="text-red-400 text-xs mt-1">{{ errors.content }}</p>

      <!-- Store button -->
      <button
        @click="saveSecret"
        class="w-full bg-indigo-500 mt-6 py-2 rounded-lg text-white font-medium hover:bg-indigo-600"
      >
        Store Secret
      </button>

      <!-- Cancel button -->
      <button
        @click="cancel"
        class="w-full bg-gray-700 mt-3 py-2 rounded-lg text-gray-200 font-medium hover:bg-gray-600"
      >
        Cancel
      </button>
    </div>
  </div>
</template>
