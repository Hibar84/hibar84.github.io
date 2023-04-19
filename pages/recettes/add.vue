<script setup lang="ts">
  import { Database, ArrayElement, Ingredient } from '~/lib/supabase_types'
  
  const supabase = useSupabaseClient<Database>();
  
  type Recette = Database['public']['Tables']['recettes']['Insert'];
  
  const loading = ref(false);
  const instructions_bloc = ref<string>();

  const nouvelleRecette = ref<Recette>({
    title:'',
    ingredients:[],
  });

  
  const nouvelIngredient = ref<Ingredient>({});

  const ajouterIngredient = (ingredient) => {
    nouvelleRecette.value.ingredients.push({...ingredient})
  }

  const creerRecette = async () => {
    nouvelleRecette.value.instructions = instructions_bloc.value.split("\n");
    try {
      loading.value = true
      const { error } = await supabase
        .from('recettes')
        .insert([nouvelleRecette.value])
      if (error) throw error
      alert('Recette crée!');
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      loading.value = false
    }
  };


</script>


<template>
  <div class="flex flex-col">
    <NuxtLink class="p-4" to="/recettes">
      <Icon name="material-symbols:arrow-back" size="30"/>
    </NuxtLink>
    
    <div class="p-4 flex flex-col items-center gap-3">
      <h1 class="text-3xl font-semibold text-center">Ajouter une recette</h1>
      <input type="text" placeholder="Nom de la recette" class="input input-bordered w-full max-w-md" v-model="nouvelleRecette.title"/>

      <input type="text" placeholder="Description" class="input input-bordered w-full max-w-md" v-model="nouvelleRecette.desc"/>
      
      <select class="select select-bordered w-full max-w-md" v-model="nouvelleRecette.categorie">
        <option disabled unselectable>Catégorie</option>
        <option>Plats</option>
        <option>Desserts</option>
        <option>Pains</option>
      </select>
      
      <p class="mb-1">Nombre de personnes (ou portions): {{ nouvelleRecette.nb_personnes }}</p>
      
      <input type="range" min="0" max="20" class="range range-xs w-full max-w-md" v-model="nouvelleRecette.nb_personnes" />

      <div class="form-control">
        <div class="input-group">
          <input type="text" placeholder="Ingrédient" class="input input-bordered w-44" v-model="nouvelIngredient.desc">
          <input type="text" placeholder="Quantité" class="input input-bordered w-24" v-model="nouvelIngredient.quantite">
          <input type="text" placeholder="Unité" class="input input-bordered w-20" v-model="nouvelIngredient.unit">
          <button class="btn btn-square" @click="ajouterIngredient(nouvelIngredient)"><Icon name="material-symbols:add" size="25"/></button>
          <button class="btn btn-square" @click="nouvelleRecette.ingredients = []"><Icon name="ion:trash-outline" size="25"/></button>
        </div>
      </div>

      <ul v-if="nouvelleRecette.ingredients.length > 0" class="p-4 list-disc max-w-md">
        <li v-for="ingredient in nouvelleRecette.ingredients" :key="ingredient">
          {{ ingredient.desc }}: {{ ingredient.quantite === "NA" ? "" : ingredient.quantite }}{{ ingredient.unit }}
        </li>
      </ul>

      <textarea placeholder="Instructions" class="textarea textarea-bordered textarea-lg text-base w-full max-w-md" v-model="instructions_bloc"/>
      
      <button class="btn" @click="creerRecette" :disabled="loading">Créer</button>
    </div> 
  </div>
</template>