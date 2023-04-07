<template>
  <div class="card w-80 h-48 image-full">
    <figure v-if="cheese.img !== ''"><nuxt-img width="320" :src="cheese.img" :alt="cheese.name" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{ cheese.name }}</h2>
      <div v-if="cheese.milk !== ''" class="badge">{{ cheese.milk }}</div>
      <div v-if="cheese.curd !== ''" class="badge badge-primary">{{ cheese.curd }}</div>
      <div v-if="cheese.regions !== ''" class="badge badge-accent">{{ cheese.regions }}</div>
    </div>
  </div>
</template>


<script setup lang="ts">

  interface Cheese {
    name: string;
    img?: string;
    milk?: string;
    curd?: string;
    regions?: string;
  };

  const props = defineProps<{cheese: Cheese}>();

</script>