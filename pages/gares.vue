<script setup>
// Initialisation des variables
const query = ref('');
const results = ref([]);

import gares from '../src/gares.json'

function compteGare(listeGares, critere){
  let compteur = 0;
  for (const gare of listeGares){
    if (gare[critere] === true) compteur+=1
  }
  return compteur
}

let visitedGares = compteGare(gares, "vu");

// Fonction de recherche des gares
const searchGare = _debounce(()=>{
  if (query.value !== ''){
    results.value = gares.filter(gare => gare.nom.toLowerCase().includes(query.value.toLowerCase()))
  } else results.value = []
},500);
</script>

<template>
  <div class="p-6">

    <!-- Header -->
    <div class="px-4 py-2 shadow bg-base-200 rounded mb-3 flex flex-row justify-between">
      <div class="flex flex-row justify-start space-x-4">
        <img class="block h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Logo_SNCF_2011.svg/1920px-Logo_SNCF_2011.svg.png">
        <h1 class="font-bold text-3xl">Mes gares SNCF</h1>
      </div>
    </div>
    
    <!-- Statistiques -->
    <div class="px-4 py-2 shadow bg-base-200 rounded mb-3">
      <h1 class="font-semibold text-2xl mb-1">Statistiques</h1>
      <div class="flex flex-row justify-around">
        <Stats title="Gares visitées" :numerator="visitedGares" :denominator="gares.length"/>
      </div>
    </div>

    <!-- Tableau de détail -->
    <div class="px-4 py-2 shadow bg-base-200 rounded mb-3">
      <h1 class="font-semibold text-2xl mb-1">Détail</h1>
      <input class="input w-full max-w-xs mb-3" type="text" v-model="query" @input="searchGare"/>
      <div v-if="results.length>0">
        <table>
          <thead>
            <th class="px-2 text-left">Gare</th>
          </thead>
          <tbody>
            <tr v-for="gare in results" v-bind:key="gare.id">
              <td class="px-2">{{ gare.nom }}</td>
              <td class="px-2">
                <Checkbox :visited="gare.vu" :id="gare.id" :disabled="true"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>
