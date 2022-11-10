<script setup>
  // TABS
  const openTab = ref(1);

  function toggleTabs(tabNumber) {
    openTab.value = tabNumber
  }

  // Référentiels pour le formulaire
  const client = useSupabaseClient();

  const { data: typesLait } = await client.from("milk_types").select("name");
  const { data: typesFromages } = await client.from("curd_types").select("name");

  // FORMULAIRE
  const nombreConvives = ref(0);
  const typesFromagesChoisis = ref([]);
  const typesLaitChoisis = ref([]);

</script>


<template>
  <div class="p-6 bg-base-200 min-h-screen">
    <div class="tabs tabs-boxed justify-around mb-6">
      <a 
        class="tab px-3 text-xl" 
        v-on:click="toggleTabs(1)" 
        v-bind:class="{'tab': openTab !== 1, 'tab tab-active bg-base-100 rounded-lg': openTab === 1}">
        Configuration
      </a>
      <a 
        class="tab px-3 text-xl"
        v-on:click="toggleTabs(2)"
        v-bind:class="{'tab': openTab !== 2, 'tab tab-active bg-base-100 rounded-lg': openTab === 2}">
        Proposition
      </a>
    </div>

    <div v-bind:class="{'hidden': openTab !== 1, 'flex flex-col items-stretch md:flex-row md:justify-around ': openTab === 1}">
      <Slider v-model:value="nombreConvives" title="Nombre de convives" class="p-3 mb-6"/>
      <Multiselect :checkboxes="typesLait" v-model:values="typesLaitChoisis" title="Types de lait" class="p-3"/>
      <Multiselect :checkboxes="typesFromages" v-model:values="typesFromagesChoisis" title="Types de fromages" class="p-3"/>
      
    </div>

    <div v-bind:class="{'hidden': openTab !== 2, 'flex flex-col': openTab === 2}">
      <p>
        Proposition
      </p>
    </div>
  </div>

</template>
