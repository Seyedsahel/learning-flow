<script setup>
    import logo from '@/assets/img/logo.png';
    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';
    
    const props = defineProps({
        isHomePage:{
            type : Boolean,
            default: false,
        }
    });
    const isAuth = false;
</script>

<template>
    <nav class="bg-[#0f1a2b] p-4 px-16">
        <div class="container mx-auto flex justify-between items-center mb-5">
            <div class="flex items-center">
                <img :src="logo" alt="Logo" class="h-8 mr-2" />
                <span class="text-white text-lg font-semibold"><RouterLink to="/">Secret Management</RouterLink></span>
            </div>
            <div>
                <button class="bg-green-500 text-white px-4 py-2 rounded" v-if="isHomePage">
                    <RouterLink to="/login" v-if="!isAuth">Login</RouterLink>
                    <RouterLink to="/login" v-else>Logout</RouterLink>
                </button>
            </div>
        </div>
        <div class="w-full h-px bg-gray-600 m-1"></div>
    </nav>
</template>
