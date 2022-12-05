<script setup>
  useHead({
    title: 'Accueil'
  })
</script>

<template>
  <div>
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Bienvue!</h1>
          <p class="py-6">J'utilise ce site pour expérimenter, apprendre et créer des petits projets perso.</p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-around text-left">

      <NuxtLink to="/gares">
        <div class="card w-96 h-48 bg-base-100 image-full">
          <figure><img class="object-cover h-48 w-96" src="../assets/images/gare.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Mes gares SNCF</h2>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/cheeses">
        <div class="card w-96 h-48 bg-base-100 image-full">
          <figure><img class="object-cover h-48 w-96" src="../assets/images/plateau.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Configurateur de plateau fromages</h2>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/cv">
        <div class="card w-96 h-48 bg-base-100 image-full">
          <figure><img class="object-cover h-48 w-96" src="../assets/images/cv.png" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">A propos de moi</h2>
          </div>
        </div>
      </NuxtLink>
    </div>


  </div>




</template>