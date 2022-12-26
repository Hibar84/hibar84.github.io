<template>
  <div class="hero hero-content flex-col">
    <h1 v-if="error.statusCode === '404'">Page non trouvée</h1>
    <h1 v-else>Erreur</h1>
    <div class="btn btn-primary">
      <NuxtLink to="/">Retour à l'accueil</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>