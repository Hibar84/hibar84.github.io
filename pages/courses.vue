<script setup>
import { list } from 'postcss';


  const recipes = ref();
  const query = ref({
    title:"",
    vegan: false,
    vegetarian: false,
    gluten: false
  });

  const liste_course = ref([]);


  const getRecipes = async () => {
      const response = await $fetch("/api/marmiton", {
        method: "post",
        body: query.value,
      });

      console.log(response);
      
      recipes.value = response
  };

  const addRecipe = (recipe) => {
    const ingredients = []
    for ( item in recipe.value.ingredients ){
      let ingredient = {}
      ingredients.push()
    }
    console.log(ingredients);
    // liste_course.value = liste_course.value.concat(recipe.ingredients);
  };

</script>

<template>
  <div class="p-4 flex flex-col gap-3">

    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div class="collapse-title text-xl font-medium">
        Ingrédients sélectionnés
      </div>
      <div class="collapse-content"> 
        <pre>{{liste_course}}</pre>
      </div>
    </div>
        
    <div class="flex flex-col gap-3">
      <div class="alert alert-info shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Ne pas inclure d'accents ou de caractères spéciaux.</span>
        </div>
      </div>
      <input type="text" placeholder="Recette" class="input input-bordered w-full" v-model="query.title"/>
      <button class="btn" @click="getRecipes">Chercher</button>
    </div>

    <div class="flex flex-col gap-3">
      <Recipe v-for="recipe in recipes" :key="recipe" :recipe="recipe" class="w-full" @select="addRecipe(recipe)"/>
    </div>
    
  </div>
</template>