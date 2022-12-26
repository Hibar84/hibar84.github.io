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
      <SiteLinkCard title="Mes gares SNCF" img="https://images.unsplash.com/photo-1646561421969-afc1de718af8" link="/gares"/>
      <SiteLinkCard title="Configurateur de plateau fromages" img="https://images.unsplash.com/photo-1631379578550-7038263db699" link="/cheeses"/>
      <SiteLinkCard title="Boîte à idées" img="https://images.unsplash.com/photo-1607166452427-7e4477079cb9" link="/ideabox"/>
    </div>


  </div>




</template>