<script setup>
import DashboardUnAuth from '@/components/DashboardUnAuth.vue'
import DashboardAuth from '@/components/DashboardAuth.vue';
const isAuthenticated = true;
 </script>

<template>
    <DashboardAuth v-if="isAuthenticated"/>
    <DashboardUnAuth v-else/>
</template>