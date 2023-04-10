<script setup lang="ts">
  import { Database } from '~/lib/supabase_types'

  useHead({
    title: 'Mes gares'
  })

  interface Gare {
    id: string;
    nom: string;
    commune: string;
    departement: string;
    X: number;
    Y: number;
    coordonnees: string;
    vu: boolean;
  }


  // Initialisation des variables
  const supabase = useSupabaseClient<Database>();
  const query = ref('');
  const results = ref([]);

  let { data: gares, error } = await supabase
    .from('gares')
    .select('*');

  function compteGare(listeGares, critere: string) {
    let compteur = 0;
    for (const gare of listeGares) {
      if (gare[critere] === true) compteur += 1
    }
    return compteur
  }

  let visitedGares = compteGare(gares, "vu");

  // Fonction de recherche des gares
  const searchGare = _debounce(() => {
    if (query.value !== '') {
      results.value = gares.filter(gare => gare.nom.toLowerCase().includes(query.value.toLowerCase()))
    } else results.value = []
  }, 500);


  // Gestion du graph des départments
  
  function compteParDepartement() {
    // Fonction de compteur de département
    let departements = {};
    let departementsVu= {};

    for (const gare of gares) {
      if (Object.keys(departements).includes(gare.departement)) {
        if (gare.vu === true) { departementsVu[gare.departement] += 1; } 
        departements[gare.departement] += 1;
      } else {
        if (gare.vu === true) {
          departementsVu[gare.departement] = 1;
          departements[gare.departement] = 1;
        } else {
          departementsVu[gare.departement] = 0;
          departements[gare.departement] = 1;
        }
        
      }
    };

    return [departements, departementsVu]
  }

  let dataDepartements = compteParDepartement();
  
  let barChartData = {
    labels: Object.keys(dataDepartements[0]),
    datasets: [
      {
        label: "Visitées",
        data: Object.values(dataDepartements[1]),
        backgroundColor: "#292524",
        inflateAmount: 'auto'
      },
      {
        label: "Total",
        data: Object.values(dataDepartements[0]),
        backgroundColor: "#a8a29e",
        inflateAmount: 'auto'
      }
    ]
  }
  let barChartOptions = {
    responsive: true,
    aspectRatio: 2,
    borderRadius: 2,
    interaction: {
        mode: 'index'
    },
    scales: {
      x: {
        display: false,
        stacked: 'single'
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    }
  };
</script>

<template>
  <div class="flex flex-col p-6 items-center">

    <!-- Header -->
    <div class="flex flex-row p-4 bg-base-300 rounded mb-3 gap-4 justify-center w-full">
      <img class="block h-8"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Logo_SNCF_2011.svg/1920px-Logo_SNCF_2011.svg.png">
      <h1 class="text-3xl font-semibold">Mes gares SNCF</h1>
    </div>

    <!-- Statistiques -->
    <div class="p-4 bg-base-300 rounded mb-3 w-full">
      <h1 class="font-semibold text-2xl mb-1">Statistiques</h1>
      <div class="p-3 flex flex-wrap justify-evenly items-center gap-4">
        <Stats class="mb-3" title="Gares visitées" :numerator="visitedGares" :denominator="gares.length" />
        <!-- <BarChart class="mb-3" :data="barChartData" :options="barChartOptions" title="Départements les plus visités" /> -->
      </div>
    </div>

    <!-- Tableau de détail -->
    <div class="p-4 bg-base-300 rounded mb-3 w-full">
      <h1 class="font-semibold text-2xl mb-2">Détail</h1>
      <input 
        class="input w-full max-w-xs mb-3" 
        placeholder="Nom de gares"
        type="text" 
        v-model="query" 
        @input="searchGare" />
      <div v-if="results.length>0">
        <table>
          <thead>
            <th class="px-2 text-left">Gare</th>
          </thead>
          <tbody>
            <tr v-for="gare in results" v-bind:key="gare.id">
              <td class="px-2">{{ gare.nom }}</td>
              <td class="px-2">
                <Checkbox :checked="gare.vu" :id="gare.id" :disabled="true" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>