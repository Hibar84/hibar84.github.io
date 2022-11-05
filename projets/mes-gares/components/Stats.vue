<template>
  <div class="p-5 w-max h-min rounded-xl shadow-md self-center">
    <div class="text-slate-500 font-medium">
      {{ title }}
    </div>
    <div class="text-3xl font-semibold">
      {{ numerator }} / {{ denominator }} <span class="text-base">({{ratio}}%)</span>
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