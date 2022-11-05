<template>
  <div class="p-5 w-max rounded-xl shadow-md">
    <div class="text-slate-500 font-medium">
    </div>
    <Bar/>
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'

const props = defineProps({});
</script>