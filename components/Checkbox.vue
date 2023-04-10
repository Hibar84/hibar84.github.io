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
  checked?: boolean;
  id?: string;
  label?: string;
  disabled?: boolean
}

const props = defineProps<Props>();

const status = ref(props.checked);

function change() {
  status.value = !(status.value);
  emit('changeState', status.value);
}
</script>