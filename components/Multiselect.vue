<template>

  <div>
    <h2 class="text-xl mb-3">{{ title }}</h2>
    <div v-for="checkbox in checkboxes" :key="checkbox.label">
      <label class="label cursor-pointer">
        <span class="label-text mr-3">{{ checkbox.label }}</span>
        <input type="checkbox" class="checkbox" :value="checkbox.value" v-model="choices" @change="$emit('update:values', choices)" :disabled="checkbox.disabled" />
      </label>
    </div>
  </div>

</template>

<script setup lang="ts">

  interface Checkbox {
    value: string | number;
    label: string;
    disabled: boolean;
  }
  
  interface Props {
    title: string;
    checkboxes: Array<Checkbox>;
    values?: any
  }
  
  const props = withDefaults(defineProps<Props>(),{
    title: "Titre par défaut",
    checkboxes: () => [],
  });

  let choices: Array<string | number> = [];

  const emit = defineEmits<{
    (e:'update:values'): void
  }>();

</script>