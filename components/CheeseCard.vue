<template>
  <div class="card min-h-fit image-full">
    <figure v-if="cheese.img !== ''"><img class="object-cover h-48 w-96" :src="cheese.img" :alt="cheese.name" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{ cheese.name }}</h2>
      <div v-if="cheese.milk.length !==0" class="badge">{{ cheese.milk }}</div>
      <div v-if="cheese.curd.length !==0" class="badge badge-primary">{{ cheese.curd }}</div>
      <div v-if="cheese.regions.length !==0" class="badge badge-accent">{{ cheese.regions }}</div>
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