<template>
  <div class="stats shadow min-h-fit">
    <div class="stat">
      <div class="stat-title opacity-90">{{ title }}</div>
      <Bar :chart-options="options" :chart-data="data"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Bar } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  interface Props {
    data: { 
      labels: Array<string>; 
      datasets: Array<{
        data:Array<number>
      }>
    };
    options: {};
    title?: string
  }
  
  const props = defineProps<Props>();
</script>