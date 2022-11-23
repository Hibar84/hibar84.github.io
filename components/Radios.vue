<template>

  <div>
    <h2 class="text-xl mb-3">{{ title }}</h2>
    <label v-for="radio in radios" :key="radio" class="label cursor-pointer">
      <span class="label-text">{{ radio.label }}</span> 
      <input type="radio" :value="radio.value" :name="title" class="radio" @change="$emit('update:values', values)" v-model="values"/>
    </label>
  </div>

</template>

<script setup>
  import {
    computed
  } from 'vue'

  const props = defineProps({
    title: {
      type: String,
      default: "Titre par défaut"
    },
    radios: {
      // Liste d'entrées, servant à la fois de label et de valeur pour les checkbox
      type: Array,
      default: []
    }
  })

  let values;

  defineEmits(['update:values']);
</script>