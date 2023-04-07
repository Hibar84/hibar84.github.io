<script setup lang="ts">

  interface Props {
    title?: string;
    min?: number;
    max?: number;
    step?: number
  }

  const props = withDefaults(defineProps<Props>(),{
    title: "Titre par défaut",
    min: 0,
    max: 20,
    step: 1
  });

  const cursor = ref(0);

  const emit = defineEmits<{
      (e:'update:value', value: number): void
    }>();

  const steps = computed<number>(()=>{
    return (props.max - props.min) / props.step + 1;
  });

  function handleChange(event: any): void {
    // `event` implicitly has `any` type
    cursor.value = Number(event.target.value); 
    emit('update:value', cursor.value);
  }

</script>

<template>
  <div>
    <h2 class="text-xl mb-3"> {{ props.title }} : {{ cursor }}</h2>
    <input 
      type="range" :min="props.min" :max="props.max" :value="cursor" :step="props.step"
      class="range"
      @change="handleChange">
    <div class="w-full flex justify-between text-xs px-2">
      <span v-for="i in steps" :key="i">|</span>
    </div>
  </div>
</template>