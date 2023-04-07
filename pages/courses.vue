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
    liste_course.value.push(recipe.ingredients)
    
    // const ingredients = []
    // for ( item in recipe.value.ingredients ){
    //   let ingredient = {}
    //   ingredients.push()
    // }
    // console.log(ingredients);
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
      <div class="form-control w-full">
        <input type="text" placeholder="Recette" class="input input-bordered" v-model="query.title"/>
        <label class="label">
          <span class="label-text-alt">Ne pas inclure d'accents ou de caractères spéciaux.</span>
        </label>
      </div>
      
      <button class="btn" @click="getRecipes">Chercher</button>
    </div>

    <div class="flex flex-col gap-3">
      <Recipe v-for="recipe in recipes" :key="recipe" :recipe="recipe" class="w-full" @select="addRecipe(recipe)"/>
    </div>
    
  </div>
</template>