<script setup>
    import { ref } from "vue";
    import Navbar from '@/components/Navbar.vue'
    import { RouterLink } from "vue-router";
    const username = ref("");
    const password = ref("");
    const showPassword = ref(false);

    const errors = ref({
    username: "",
    password: "",
    form: "",
    });

    const handleRegister = () => {
    // reset errors
    errors.value = { username: "", password: "", form: "" };

    let valid = true;

    if (!username.value.trim()) {
        errors.value.username = "username is needed";
        valid = false;
    }

    if (!password.value) {
        errors.value.password = "password is needed";
        valid = false;
    } else if (password.value.length < 6) {
        errors.value.password = "minimum 6 characters are required";
        valid = false;
    }

    if (!valid) {
        errors.value.form = "please fix the errors.";
        return;
    }

    // نمونه لاگین ساده
    if (username.value === "mors" && password.value === "mors123") {
        alert("Login successful!");
    } else {
        errors.value.form = "Invalid username or password.";
    }
    };
</script>

<template>
    <Navbar/>

  <div
    class="min-h-screen flex items-start justify-center p-6 bg-linear-to-b from-slate-900 to-slate-950">
    <div
      class="w-full max-w-md bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl p-8"
    >
      <h1 class="text-white text-2xl font-semibold text-center">
        Register
      </h1>

      <form @submit.prevent="handleRegister" class="space-y-5 mt-6">
        <!-- خطای کلی فرم -->
        <p
          v-if="errors.form"
          class="text-red-400 text-sm text-center bg-red-500/10 p-2 rounded"
        >
          {{ errors.form }}
        </p>

        <!-- Username -->
        <div>
          <input
            v-model="username"
            type="text"
            class="w-full rounded-lg bg-slate-800 border border-slate-700 text-slate-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="User Name"
          />
          <p v-if="errors.username" class="text-red-400 text-xs mt-1">
            {{ errors.username }}
          </p>
        </div>

        <!-- Password -->
        <div>
          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full rounded-lg bg-slate-800 border border-slate-700 text-slate-100 px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
            />

            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute inset-y-0 right-3 flex items-center text-slate-300"
            >
              {{ showPassword ? "hide" : "show" }}
            </button>
          </div>

          <p v-if="errors.password" class="text-red-400 text-xs mt-1">
            {{ errors.password }}
          </p>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2 shadow transition"
        >
          Register
        </button>
      </form>
      <div class="text-center text-s text-slate-500 mt-5">already have an account? <RouterLink to="/login" class="text-indigo-500">Sign in</RouterLink></div>
    </div>
  </div>
</template>
