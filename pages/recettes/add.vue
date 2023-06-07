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
      
      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text">Recette</span>
        </label>
        <input type="text" placeholder="Nom de la recette" class="input input-bordered w-full max-w-md mb-3" v-model="nouvelleRecette.title"/>
        <input type="text" placeholder="Description" class="input input-bordered w-full max-w-md" v-model="nouvelleRecette.desc"/>
      </div>

      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text">Catégorie</span>
        </label>
        <select class="select select-bordered w-full max-w-md" v-model="nouvelleRecette.categorie">
          <option>Plats</option>
          <option>Desserts</option>
          <option>Pains</option>
        </select>
      </div>
    
      <div class="form-control w-full max-w-md">
        <label class="label">
          <p class="mb-1">Personnes / portions</p>
        </label>
        <input type="number" min="0" max="100" class="p-2 rounded-lg self-center text-inherit bg-base-200 mb-3" v-model="nouvelleRecette.nb_personnes" />
      </div>

      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text">Ingrédients</span>
        </label>
        <div class="flex flex-col items-center gap-2">
          <div class="join">
            <input type="text" placeholder="Ingrédient" class="input input-bordered w-3/6 join-item" v-model="nouvelIngredient.desc">
            <input type="text" placeholder="Quantité" class="input input-bordered w-2/5 join-item" v-model="nouvelIngredient.quantite">
            <input type="text" placeholder="Unité" class="input input-bordered w-1/5 join-item" v-model="nouvelIngredient.unit">
          </div>
          <div class="join">
            <button class="btn btn-square join-item" @click="ajouterIngredient(nouvelIngredient)"><Icon name="material-symbols:add" size="25"/></button>
            <button class="btn btn-square join-item" @click="nouvelleRecette.ingredients = []"><Icon name="ion:trash-outline" size="25"/></button>
          </div>
        </div>
      </div>

      <ul class="list-disc max-w-md">
        <li v-for="ingredient in nouvelleRecette.ingredients" :key="ingredient.desc">
          {{ ingredient.desc }}: {{ ingredient.quantite === "NA" ? "" : ingredient.quantite }}{{ ingredient.unit }}
        </li>
      </ul>
      
      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text">Instructions</span>
        </label>
        <textarea placeholder="Instructions" class="textarea textarea-bordered textarea-lg text-base w-full max-w-md" v-model="instructions_bloc"/>
      </div> 

      <button class="btn" @click="creerRecette" :disabled="loading">Créer</button>
    </div> 
  </div>
</template>