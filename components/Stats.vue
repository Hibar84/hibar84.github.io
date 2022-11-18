<template>
<div class="stats shadow min-h-fit">
  <div class="stat">
    <div class="stat-title">{{ title }}</div>
    <div class="stat-value font-medium">{{ numerator }} / {{ denominator }}</div>
    <div class="stat-desc">({{ratio}}%)</div>
  </div>
</div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: String,
  numerator: Number,
  denominator: Number
});

const ratio = computed(()=>{
  return (props.numerator / props.denominator).toFixed(3);
});
</script>