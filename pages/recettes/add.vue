<script setup lang="ts">
  /**
   * This file represents the "add" page for creating new recipes.
   * It imports necessary types from the "supabase_types" module and initializes the Supabase client.
   * It defines the necessary variables and references for creating a new recipe.
   */

  import type { Database, ArrayElement, Ingredient } from '~/lib/supabase_types'

  const supabase = useSupabaseClient<Database>();

  type Recette = Database['public']['Tables']['recettes']['Insert'];

  const loading = ref(false);
  const instructions = ref([]);
  const newInstruction = ref("");

  const nouvelleRecette = ref<Recette>({
    title:'',
    ingredients:[],
  });

  const newIngredient = ref<Ingredient>({});
  const ingredients = ref([]);


  /**
   * Adds an ingredient to the list of ingredients.
   * @param {Object} ingredient - The ingredient to be added.
   */
  const addIngredient = (ingredient) => {
    ingredients.value.push({...ingredient});
    newIngredient.value = {};
  }

  /**
   * Deletes an ingredient from the list of ingredients.
   * @param {number} index - The index of the ingredient to be deleted.
   */
  const deleteIngredient = (index) => {
    ingredients.value.splice(index, 1);
  }

  /**
   * Adds an instruction to the list of instructions.
   */
  const addInstruction = () => {
    instructions.value.push(newInstruction.value);
    newInstruction.value = "";
  };

  /**
   * Discards an instruction from the list of instructions.
   * @param {number} index - The index of the instruction to be discarded.
   */
  const discardInstruction = (index) => {
    instructions.value.splice(index, 1);
  };


  /**
   * Creates a new recipe by inserting the recipe data into the 'recettes' table.
   * @async
   * @function creerRecette
   */
  const creerRecette = async () => {
    nouvelleRecette.value.instructions = instructions.value;
    nouvelleRecette.value.ingredients = ingredients.value;
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

      <!-- Descriptions -->

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
    
      <!-- Portions -->

      <div class="form-control w-full max-w-md">
        <label class="label">
          <p class="mb-1">Personnes / portions</p>
        </label>
        <input type="number" min="0" max="100" class="p-2 rounded-lg self-center text-inherit bg-base-200 mb-3" v-model="nouvelleRecette.nb_personnes" />
      </div>

      <!-- Ingredients bloc -->

      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text">Ingredients</span>
        </label>
        <div class="join mb-3">
          <input type="text" placeholder="Ingredient" class="input input-bordered w-3/6 join-item" v-model="newIngredient.desc">
          <input type="text" placeholder="Quantity" class="input input-bordered w-2/5 join-item" v-model="newIngredient.quantite">
          <input type="text" placeholder="Unit" class="input input-bordered w-1/5 join-item" v-model="newIngredient.unit">
        </div>
        <button class="btn" @click="addIngredient(newIngredient)" :disabled="loading">Ajouter</button>
      </div>

      <ul class="list-disc max-w-md">
        <li v-for="(ingredient, index) in ingredients" :key="index">
          {{ ingredient.desc }}: {{ ingredient.quantite }} {{ ingredient.unit }}
          <button class="btn btn-danger" @click="deleteIngredient(index)"><Icon name="ion:trash-outline" size="25"/></button>
        </li>
      </ul>
      
      <!-- Instruction bloc -->

      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text">Instructions</span>
        </label>
        <textarea placeholder="New Instruction" class="textarea textarea-bordered textarea-lg text-base w-full max-w-md mb-3" v-model="newInstruction"/>
        <button class="btn" @click="addInstruction" :disabled="loading">Ajouter l'instruction</button>
      </div>

      <ul class="list-disc max-w-md">
        <li v-for="(instruction, index) in instructions" :key="index">
          {{ instruction }}
          <button class="btn btn-danger" @click="discardInstruction(index)"><Icon name="ion:trash-outline" size="25"/></button>
        </li>
      </ul>

      <button class="btn" @click="creerRecette" :disabled="loading">Créer</button>
    </div> 
  </div>
</template>