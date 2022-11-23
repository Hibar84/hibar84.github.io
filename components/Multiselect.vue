<template>

  <div>
    <h2 class="text-xl mb-3">{{ title }}</h2>
    <div v-for="checkbox in checkboxes" :key="checkbox">
      <label class="label cursor-pointer">
        <span class="label-text mr-3">{{ checkbox.label }}</span>
        <input type="checkbox" class="checkbox" :value="checkbox.value" v-model="values" @change="$emit('update:values', values)" :disabled="checkbox.disabled" />
      </label>
    </div>
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
    checkboxes: {
      // Liste d'entrées, servant à la fois de label et de valeur pour les checkbox
      type: Array,
      default: []
    }
  })

  let values = [];

  defineEmits(['update:values']);
</script>

<style>

</style>