<template>

<div>
  <h2 class="text-xl mb-3">{{ title }}</h2>
  <div v-for="checkbox in checkboxes" :key="checkbox">
    <label class="label cursor-pointer">
      <span class="label-text mr-3">{{ checkbox.nom }}</span> 
      <input type="checkbox" class="checkbox" :value="checkbox.nom" v-model="values" @change="$emit('update:values', values)"/>
    </label>
  </div>
</div>

  
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: "Titre par défaut"
  },
  checkboxes: {
    // Liste d'entrées, servant à la fois de label et de valeur pour les checkbox
    type: Array,
    default: []
  },
  values: {
    type: Array,
    default: []
  },
})

defineEmits(['update:values']);

</script>

<style>

</style>