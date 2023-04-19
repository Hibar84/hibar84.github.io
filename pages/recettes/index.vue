<script setup lang="ts">
  import { Database, ArrayElement } from '~/lib/supabase_types'
  
  useHead({
    title: 'Mes recettes'
  })

  
  const supabase = useSupabaseClient<Database>();

  let { data : recettes, error } = await supabase
    .from("recettes")
    .select('*');

  type Recettes = typeof recettes;
  type Recette = Partial<ArrayElement<Recettes>>;

  const modele = ref<Recette>({title:""});
  
  const results = ref<Recettes>(recettes);

  function filter_title(recette: Recette){
    if (modele.value.title.length > 0){
      return recette.title.toLowerCase().includes(modele.value.title.toLowerCase())
    }
  }
  
  const searchRecette = _debounce(() => {
    if (modele.value.title.length > 0) {
      results.value = recettes.filter(filter_title)
    } else results.value = recettes
  }, 250);

</script>

<template>
  <div class="p-4 flex flex-col items-center">
    <h1 class="text-3xl font-semibold text-center mb-4">Mes recettes</h1>
    
    <div class="p-4 rounded min-w-full flex flex-wrap justify-evenly gap-4 mb-3">
      <input type="text" placeholder="Recette" class="input w-full input-bordered" v-model="modele.title" @input="searchRecette"/>
      <!-- <select class="select w-full" v-model="modele.categorie">
        <option disabled selected>Catégorie</option>
        <option>Plats</option>
        <option>Desserts</option>
        <option>Pains</option>
      </select> -->
    </div>

    <div class="p-6 flex flex-wrap gap-4 justify-center text-left">
      <div v-for="recette in results" :key="recette.title" class="card card-compact w-64 bg-base-200">
        <div class="card-body">
          <h2 class="card-title">
            {{ recette.title }}
            <div class="badge">{{ recette.categorie }}</div>
          </h2>
          <p>{{ recette.desc }}</p>
          <div class="card-actions justify-end">
            <NuxtLink class="btn" :to="'/recettes/'+recette.id">Voir</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>