<template>
  <div class="card w-60 bg-base-100 shadow-xl">
    <figure v-if="cheese.img !== ''"><img class="bg-cover" :src="cheese.img" :alt="cheese.name" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{ cheese.name }}</h2>
      <div v-if="cheese.milk.length !==0" class="badge">{{ cheese.milk }}</div>
      <div v-if="cheese.curd.length !==0" class="badge">{{ cheese.curd }}</div>
    </div>
  </div>
</template>


<script setup>

const props = defineProps({
    cheese: {
      type: Object
    }
  })


</script>