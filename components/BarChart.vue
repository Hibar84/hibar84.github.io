<template>
  <div class="stats shadow min-h-fit">
    <div class="stat">
      <div class="stat-title">{{ title }}</div>
      <Bar :chart-options="options" :chart-data="data"/>
    </div>
  </div>
</template>

<script setup>
  import {
    Bar
  } from 'vue-chartjs'
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

  const props = defineProps({
    data: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    }
  })
</script>