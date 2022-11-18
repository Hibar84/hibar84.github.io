<script setup>
  const typesLait = useMilkTypes();
  const typesFromages = useCheeseTypes();
  const typesEvenenements = useEventTypes();


  // FORMULAIRE
  const modele = ref({})
  const nombreConvives = ref(0);

  // FROMAGES
  const fromages = useFromages();
  const selectionFromages = ref([]);

  function pickOneCheese(filter){
    // On choisit un premier fromage aléatoirement
    let randomKey = _random(fromages.value.length);
    let randomFromage = fromages.value[randomKey];
    let validator = true;
    
    while (validator){
      // On test la conformité au lait
      let validateMilk = ((!filter.value.milk || filter.value.milk.length === 0) ? true : filter.value.milk.includes(randomFromage.milk));
      // On test la conformité au type de fromage
      let validateCurd = ((!filter.value.curd || filter.value.curd.length === 0) ? true : filter.value.curd.includes(randomFromage.curd));

      // Si les deux tests sont positifs, on sort de la boucle while
      if (validateMilk && validateCurd){
        validator = false
      } else {
        // Sinon,  on choisit un autre fromage
        randomKey = _random(fromages.value.length);
        randomFromage = fromages.value[randomKey];
      }
    }

    return randomFromage
  }

  function selectionnerFromages(filter, nombreFromages){
    // On fait une sélection de fromages uniquement si le types de lait ou de fromages a été sélectionné. Sinon on ne choisit pas de fromages, et la quantité par personne est mise à 0.

    selectionFromages.value = [];

    if (modele.value.milk || modele.value.curd){
      while (selectionFromages.value.length < nombreFromages){
        selectionFromages.value.push(pickOneCheese(filter))
      };
    } else modele.value.quantite = 0;
  };

  // TABS
  const openTab = ref(1);

  function toggleTabs(tabNumber) {
    openTab.value = tabNumber
    // On recalcule la sélection de fromages uniquement lorsque on va sur le 2e onglet
    if (tabNumber === 2) selectionnerFromages(modele, 6)
  }
</script>


<template>
  <div class="p-6 bg-base-200 min-h-screen">
    <div class="tabs tabs-boxed justify-around mb-6">
      <a class="tab px-3 text-xl" v-on:click="toggleTabs(1)"
        v-bind:class="{'tab': openTab !== 1, 'tab tab-active bg-base-100 rounded-lg': openTab === 1}">
        Configuration
      </a>
      <a class="tab px-3 text-xl" v-on:click="toggleTabs(2)"
        v-bind:class="{'tab': openTab !== 2, 'tab tab-active bg-base-100 rounded-lg': openTab === 2}">
        Proposition
        <Icon name="tabler:refresh"/>
      </a>
    </div>

    <div
      v-bind:class="{'hidden': openTab !== 1, 'flex flex-col items-stretch md:flex-row md:justify-around ': openTab === 1}">
      
      <Slider v-model:value="nombreConvives" title="Nombre de convives" class="p-3 mb-6" />
      <div class="divider md:divider-horizontal" />
      <Radios :radios="typesEvenenements" v-model:values="modele.quantite" title="Types de fromages" class="p-3" />
      <div class="divider md:divider-horizontal" />
      <Multiselect :checkboxes="typesLait" v-model:values="modele.milk" title="Types de lait" class="p-3" />
      <div class="divider md:divider-horizontal" />
      <Multiselect :checkboxes="typesFromages" v-model:values="modele.curd" title="Types de fromages" class="p-3" />
    </div>

    <div v-bind:class="{'hidden': openTab !== 2, 'flex flex-col': openTab === 2}">

      <!-- Quantité -->
      <div class="stats shadow mb-3">

        <div class="stat">
          <div class="stat-title">Quantité de fromages à prévoir</div>
          <div class="stat-value font-medium">{{ modele.quantite * nombreConvives }}gr.</div>
          <div class="stat-desc">{{modele.quantite}}gr par personne.</div>
        </div>

      </div>

      <!-- Sélection de fromages -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 self-center">
        <CheeseCard v-for="fromage in selectionFromages" :key="fromage.id" :cheese="fromage"/>
      </div>


    </div>
  </div>

</template>