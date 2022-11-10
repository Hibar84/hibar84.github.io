<template>
  <div>
    <h2 class="text-xl mb-3"> {{ title }} : {{ value }}</h2>
    <input 
      type="range" :min="min" :max="max" :value="value" :step="step"
      class="range"
      @input="$emit('update:value', parseInt($event.target.value))">
    <div class="w-full flex justify-between text-xs px-2">
      <span v-for="i in steps" :key="i">|</span>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    default: "Titre par défaut"
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 20
  },
  value: Number,
  step: {
    type: Number,
    default: 1
  }
});

defineEmits(['update:value']);

const steps = computed(()=>{
  return (props.max - props.min) / props.step + 1;
});

</script>

<style>

</style>