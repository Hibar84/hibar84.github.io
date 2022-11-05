<template>
  <div>
    <input class="h-checkbox" type="checkbox" :id="id" :checked="status" @click="change">
    <label class="h-checkbox-label" for="flexCheckDefault">
      {{ label }}
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