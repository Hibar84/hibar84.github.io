<template>
<div class="stats shadow min-h-fit">
  <div class="stat">
    <div class="stat-title opacity-90">{{ title }}</div>
    <div class="stat-value font-medium">{{ numerator }} / {{ denominator }}</div>
    <div class="stat-desc opacity-100">({{ratio}}%)</div>
  </div>
</div>
</template>

<script setup lang="ts">

  interface Props {
    title: string;
    numerator: number;
    denominator: number;
  }

  const props = defineProps<Props>();

  const ratio = computed<string>(() => {
    return (props.numerator / props.denominator).toFixed(3);
  });
</script>