<template>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">{{ label }}</span> 
      <input class="checkbox" type="checkbox" :id="id" :checked="status" @click="change">
    </label>
  </div>
</template>

<script setup>
const emit = defineEmits(['changeState'])

const props = defineProps({
  visited: Boolean,
  id: Number,
  label: String
});

const status = ref(props.visited);

function change() {
  status.value = !(status.value);
  emit('changeState', status.value);
}
</script>