<script setup lang="ts">
  import { Database, ArrayElement, Ingredient } from '~/lib/supabase_types'
  
  useHead({
    title: 'Mes recettes'
  })

  const route = useRoute();
  const supabase = useSupabaseClient<Recette>();

  type Recette = Database['public']['Tables']['recettes']['Row'];
  
  let { data : recette } = await supabase
    .from("recettes")
    .select('*')
    .eq('id', route.params.id);

  const nb_personnes = ref<number>(recette[0].nb_personnes);

</script>


<template>
  <div class="flex flex-col">
    <NuxtLink class="p-4" to="/recettes">
      <Icon name="material-symbols:arrow-back" size="30"/>
    </NuxtLink>
    
    <div class="p-4 flex flex-col items-center">
      <h1 class="text-3xl font-semibold mb-3">{{ recette[0].title }}</h1>
      
      <p class="mb-1">Personnes / portions</p>
      <input type="number" min="0" max="100" class="p-2 rounded-lg self-center text-inherit bg-base-200 mb-3" v-model="nb_personnes" />
      
      <br>



      <h2 class="text-xl">Ingrédients</h2>
      <ul class="p-4 list-disc max-w-md">
        <li v-for="ingredient in recette[0].ingredients" :key="ingredient">
          {{ ingredient.desc }}: {{ ingredient.quantite === "NA" ? "" : Math.floor(ingredient.quantite*nb_personnes/recette[0].nb_personnes) }}{{ ingredient.unit }}
        </li>
      </ul>
      <br>


      <h2 class="text-xl">Instructions</h2>
      <ol class="p-4 max-w-md">
        <li class="mb-2" v-for="instruction in recette[0].instructions" :key="instruction">
          {{ instruction }}
        </li>
      </ol>
    </div>
  </div>

</template>