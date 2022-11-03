<script setup>
// Requiring lodash library
import { debounce } from 'lodash';

// Initialisation des variables
const client = useSupabaseClient();
const query = ref('');
const results = ref([]);

// Récupération des gares et du compte de gares visitées
const { data: gares, refresh: refresh_gares } = await useAsyncData('gares', async () =>{
  const { data } = await client.from("gares").select("id, name, visited", { count: 'exact', head: false });
  return data
  });

const { data: visitedGares, refresh: refresh_count } = await useAsyncData('nbGares', async () =>{
  const { count } = await client.from("gares").select("*", { count: 'exact', head: true }).eq('visited', 'true');
  return count;
});

// Fonction de recherche des gares
const searchGare = debounce(()=>{
  if (query.value !== ''){
    results.value = gares.value.filter(gare => gare.name.toLowerCase().includes(query.value.toLowerCase()))
  } else results.value = []
},500);

// Fonction de modification d'une gare
const saveData = debounce(async (status, gareId) => {
    const { error } = await client.from('gares').update({ visited: status }).eq('id', gareId);
    refresh_count();
  },200);
</script>

<template>
  <div class="p-6">

    <!-- Header -->
    <div class="px-4 py-2 border-2 rounded mb-3 flex flex-row justify-between">
      <div class="flex flex-row justify-start space-x-4">
        <img class="block h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Logo_SNCF_2011.svg/1920px-Logo_SNCF_2011.svg.png">
        <h1 class="font-bold text-3xl">Mes gares SNCF</h1>
      </div>
    </div>
    
    <!-- Statistiques -->
    <div class="px-4 py-2 border-2 rounded mb-3">
      <h1 class="font-bold text-2xl mb-1">Statistiques</h1>
      <div>
        <h2>Gares visitées</h2>
        <p>{{ visitedGares }}/{{ gares.length }}</p>
      </div>
    </div>

    <!-- Tableau de détail -->
    <div class="px-4 py-2 border-2 rounded mb-3">
      <h1 class="font-bold text-2xl mb-1">Détail</h1>
      <input class="bg-white px-1 py-1 text-sm border-2" type="text" v-model="query" @input="searchGare"/>
      <div v-if="results.length>0">
        <table>
          <thead>
            <th class="px-2 text-left">Gare</th>
          </thead>
          <tbody>
            <tr v-for="gare in results" v-bind:key="gare.id">
              <td class="px-2">{{ gare.name }}</td>
              <td class="px-2">
                <Switch :visited="gare.visited" :id="gare.id" @change-state="(status)=>saveData(status, gare.id)"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>
