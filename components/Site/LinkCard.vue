<template>
  <NuxtLink :to="link">
    <div class="card w-80 h-48 image-full shadow-lg">
      <figure><nuxt-img width="320" :src="img" :alt="title" /></figure>
      <div class="card-body">
        <h2 class="card-title text-base-100">{{ title }}</h2>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  interface Props {
    link: string;
    img: string;
    title: string
  };


  const props = defineProps<Props>();
</script>