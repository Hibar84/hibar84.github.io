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

    <div class="p-6 flex flex-wrap gap-4 justify-center text-left">
      <SiteLinkCard title="Mes gares SNCF" img="/gare.jpg" link="/gares"/>
      <SiteLinkCard title="Configurateur de plateau fromages" img="/plateau.jpg" link="/cheeses"/>
      <SiteLinkCard title="Boîte à idées" img="/box.jpg" link="/ideabox"/>
    </div>


  </div>




</template>