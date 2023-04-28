<script setup lang="ts">
  import { Database, ArrayElement } from '~/lib/supabase_types'
  
  useHead({
    title: 'Mes recettes'
  })

  
  const supabase = useSupabaseClient<Database>();
  const categories = useRecipesTypes();

  let { data : recettes, error } = await supabase
    .from("recettes")
    .select('*');

  
  
  type Recettes = typeof recettes;
  type Recette = Partial<ArrayElement<Recettes>>;

  const modele = ref({title:"", categories:[]});
  
  const results = ref<Recettes>(recettes);

  function filter_title(recette: Recette): Boolean{
    if (modele.value.title.length > 0){
      return recette.title.toLowerCase().includes(modele.value.title.toLowerCase())
    } else {return true}
  }

  function filter_categories(recette: Recette): Boolean{
    if (modele.value.categories.length > 0){
      return modele.value.categories.includes(recette.categorie)
    } {return true}
  }
  
  function searchRecette(): void {
    results.value = recettes.filter((recette) => {
      return filter_title(recette) && filter_categories(recette)
    });
  }


</script>

<template>
  <div class="p-4 flex flex-col gap-12">
    <!-- Titre -->
    <h1 class="text-3xl font-semibold text-center">Mes recettes</h1>
    
    <!-- Main content -->
    <div class="flex flex-col gap-6 md:flex-row">
      
      <!-- Recherche et filtre -->
      <div class="flex flex-col gap-3">
        <div class="flex flex-wrap rounded w-full">
          <input type="text" placeholder="Recette" class="input input-bordered" v-model="modele.title"/>
        </div>
        <Multiselect :checkboxes="categories" v-model:values="modele.categories" title="Catégorie" class="p-3" />
        <button @click="searchRecette" class="btn btn-primary gap-2">
          <Icon name="tabler:search"/>
          Chercher 
        </button>
      </div>
      

      <!-- Grid de recettes -->
      <div class="flex flex-wrap gap-4 text-left ">
        <div v-for="recette in results" :key="recette.id" class="card card-compact bg-base-200">
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
    
  </div>
</template>