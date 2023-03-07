<script setup>
  useHead({
    title: 'Mes gares'
  })

  // Initialisation des variables
  const supabase = useSupabaseClient();
  const loading = ref(false);
  const query = ref('');
  const results = ref([]);

  let { data: gares, error } = await supabase
    .from('gares')
    .select('*');

  // Fonction de recherche des gares
  const searchGare = _debounce(() => {
    if (query.value !== '') {
      results.value = gares.filter(gare => gare.nom.toLowerCase().includes(query.value.toLowerCase()))
    } else results.value = []
  }, 500);

  const toggleGare = async (gare, state) => {
    try {
      const { error } = await supabase
        .from('gares')
        .update({ vu: state })
        .eq('id', gare.id);
    } finally {
      console.log(gare.id, state)
      console.log(error);
    }
  };

</script>

<template>
  <div class="flex flex-col p-6 items-center">
    <!-- Header -->
    <div class="flex flex-row p-4 bg-base-300 rounded mb-3 gap-4 justify-center w-full">
      <img class="block h-8"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Logo_SNCF_2011.svg/1920px-Logo_SNCF_2011.svg.png">
      <h1 class="text-3xl font-semibold">Mes gares SNCF - édition</h1>
    </div>

    <!-- Tableau de détail -->
    <div class="flex flex-col p-4 gap-4 bg-base-300 rounded mb-3 w-full">
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
                <Checkbox :visited="gare.vu" :id="gare.id" @change-state="(state) => toggleGare(gare, state)"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>