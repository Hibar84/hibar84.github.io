<script setup>
  const supabase = useSupabaseClient();
  
  const loading = ref(false);

  const nouvelleRecette = ref(
    {
      title:"",
      desc:"",
      ingredients:[],
      instructions:[],
      nb_personnes:2,
      categorie:"Catégorie"
    }
  );

  const creerRecette = async () => {
    alert("Ca fonctionne!");
  }


</script>


<template>
  <div class="flex flex-col items-center">
    <NuxtLink class="p-4" to="/recettes">
      <Icon name="material-symbols:arrow-back" size="30"/>
    </NuxtLink>

    <h1 class="text-3xl font-semibold text-center">Ajouter une recette</h1>
    
    <form class="p-4 flex flex-col items-center" @submit.prevent="creerRecette">
      
      <input type="text" placeholder="Nom de la recette" class="input input-bordered w-full max-w-md mb-3" v-model="nouvelleRecette.title"/>

      <input type="text" placeholder="Description" class="input input-bordered w-full max-w-md mb-3" v-model="nouvelleRecette.desc"/>

      
      <select class="select select-bordered w-full max-w-xs mb-3" v-model="nouvelleRecette.categorie">
        <option>Plats</option>
        <option>Desserts</option>
        <option>Pains</option>
      </select>
      
      <p class="mb-1">Nombre de personnes (ou portions): {{ nouvelleRecette.nb_personnes }}</p>
      
      <input type="range" min="0" max="20" class="range range-xs w-full max-w-md mb-3" v-model="nouvelleRecette.nb_personnes" />

      <textarea placeholder="Instructions" class="textarea textarea-bordered textarea-lg text-base w-full max-w-md mb-3" v-model="nouvelleRecette.instructions"/>
      
      <input
        class="btn"
        type="submit"
        :disabled="loading"
        :value="loading ? 'Chargement':'Créer'"
      />
    </form>
    
    <pre>{{ nouvelleRecette }}</pre>

  </div>
</template>