<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        title:{
            type : String,
            default: 'No records found'
        } ,
        description: {
            type: String,
            default: ''
        }
    });
</script>

<template>

  <div class="bg-[#0d1422] w-2/3 rounded-xl p-6 text-center mt-4 shadow-lg border border-gray-700">
    <h2 class="text-white font-semibold text-lg">{{ title }}</h2>
    <p class="text-gray-400 text-sm mt-1">{{ description }}</p>
  </div>
</template>