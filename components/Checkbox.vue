<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text">{{ label }}</span> 
      <input class="checkbox" type="checkbox" :id="id" :checked="status" :disabled="disabled" @click="change">
    </label>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['changeState'])

interface Props {
  visited: boolean;
  id: number;
  label: string;
  disabled: Boolean
}

const props = defineProps<Props>();

const status = ref(props.visited);

function change() {
  status.value = !(status.value);
  emit('changeState', status.value);
}
</script>