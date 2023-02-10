<script setup>
  useHead({
    title: 'Mes recettes'
  })

  const route = useRoute();
  const supabase = useSupabaseClient();

  let { data : recette } = await supabase
    .from("recettes")
    .select('*')
    .eq('id', route.params.id);

</script>


<template>
  <div class="flex flex-col">
    <NuxtLink class="p-4" to="/recettes">
      <Icon name="material-symbols:arrow-back" size="30"/>
    </NuxtLink>
    <div class="p-4 flex flex-col rounded items-center">
      <h1 class="text-3xl font-semibold">{{ recette[0].title }}</h1>
      <p>Pour {{ recette[0].nb_personnes }} personnes </p>
      <br>
      <h2 class="text-xl">Ingrédients</h2>
      <ul class="p-4 list-desc max-w-sm">
        <li v-for="ingredient in recette[0].ingredients" :key="ingredient">- {{ ingredient.desc }}: {{ ingredient.quantite }}{{ ingredient.unit }}</li>
      </ul>
      <br>
      <h2 class="text-xl">Instructions</h2>
      <ol class="p-4 list-decimal max-w-sm">
        <li v-for="instruction in recette[0].instructions" :key="instruction">
          {{ instruction }}
        </li>
      </ol>
    </div>
  </div>

</template>