<template>
  <NuxtLink :to="link">
    <div class="card w-96 h-48 sm:w-64 image-full shadow-lg">
      <figure><nuxt-img class="object-cover h-48 w-96" :src="img" :alt="title" /></figure>
      <div class="card-body">
        <h2 class="card-title text-base-100">{{ title }}</h2>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  link:{
    type: String,
    required: true
  },
  img:{
    type: String,
    required: false
  },
  title:{
    type: String,
    required: true
  }
})
</script>