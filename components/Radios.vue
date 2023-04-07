<template>

  <div>
    <h2 class="text-xl mb-3">{{ title }}</h2>
    <label v-for="radio in radios" :key="radio" class="label cursor-pointer">
      <span class="label-text">{{ radio.label }}</span> 
      <input type="radio" :value="radio.value" :name="title" class="radio" @change="$emit('update:value', choice)" v-model="choice"/>
    </label>
  </div>

</template>

<script setup lang="ts">

  interface Radio {
    label: string;
    value: string | number;
  }

  interface Props {
    title: string;
    radios: Array<Radio>;
  }

  const props = withDefaults(defineProps<Props>(), {
      title: "Titre par défaut",
      radios: () => []
  });

  let choice: number;

  const emit = defineEmits<{
    (e:'update:value'): void
  }>();

</script>