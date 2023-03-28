<script setup>
  useHead({
      title: 'Boîte à idées'
  });

  const key_box = ref('');

  let url = "https://app.tolula.fr" + key_box

  const setRandomBox = () => {
    key_box.value = Math.random().toString(36).slice(2);
    // navigateTo('/ideabox/'+key_box.value);
  }

</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl font-bold text-center mb-3">Boîtes à idées</h1>
    <h2 class="text-xl text-center mb-6">Créer et partager des boîtes à idées pour tous vos besoins!</h2>

    <div class="flex flex-row gap-3 mb-3">
      <input type="text" placeholder="Code de la boîte à idées" class="input input-bordered w-full max-w-xs" v-model="key_box"/>
      <button v-if="key_box === ''" class="btn" @click="setRandomBox">Générer un nom aléatoire</button>
      <NuxtLink v-else :to="'/ideabox/'+key_box">
        <button class="btn">Rejoindre ou créer</button>
      </NuxtLink>
    </div>

    <h2 v-if="key_box !== ''" class="text-md text-center mb-6">Également disponible avec le lien suivant : <a :href="url" class="link"> app.tolula.fr/ideabox/{{ key_box }}</a></h2>
  </div>

</template>