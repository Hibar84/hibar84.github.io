<script setup lang="ts">
  useHead({
    title: 'Plateau fromages'
  })

  const supabase = useSupabaseClient();
  const typesLait = useMilkTypes();
  const typesFromages = useCheeseTypes();
  const typesEvenenements = useEventTypes();

  interface ModeleFromage {
    quantite?: Number;
    milk?: Array<string>;
    curd?: Array<string>;
  };

  interface Fromage {
    id: string;
    name: string;
    wiki: string;
    img: string;
    regions: string;
    milk: string;
    curd: string;
    aoc: boolean;
    aoc_year: string;
    status: string;
  };

  // FORMULAIRE
  const modele = ref<ModeleFromage>({});
  const nombreConvives = ref<number>(0);

  // FROMAGES
  let { data: fromages, error } = await supabase
    .from('fromages')
    .select('*');
  const selectionFromages = ref<Array<Fromage>>([]);

  function pickOneCheese(filter: ModeleFromage): Fromage {
    // On choisit un premier fromage aléatoirement
    let randomKey = _random(fromages.length);
    let randomFromage: Fromage = fromages[randomKey];
    let validator = true;
    
    while (validator){
      // On test la conformité au lait
      let validateMilk = ((!filter.milk || filter.milk.length === 0) ? true : filter.milk.includes(randomFromage.milk));
      // On test la conformité au type de fromage
      let validateCurd = ((!filter.curd || filter.curd.length === 0) ? true : filter.curd.includes(randomFromage.curd));

      // Si les deux tests sont positifs, on sort de la boucle while
      if (validateMilk && validateCurd){
        validator = false
      } else {
        // Sinon,  on choisit un autre fromage
        randomKey = _random(fromages.length);
        randomFromage = fromages[randomKey];
      }
    }

    return randomFromage
  }

  function selectionnerFromages(filter: ModeleFromage, nombreFromages: number): void {
    // On fait une sélection de fromages uniquement si le types de lait ou de fromages a été sélectionné. Sinon on ne choisit pas de fromages, et la quantité par personne est mise à 0.

    selectionFromages.value = [];
    let selectionIds: Array<string> = [];

    if (filter.milk || filter.curd){
      while (selectionFromages.value.length < nombreFromages){
        let newFromage = pickOneCheese(filter);
        if (!(selectionIds.includes(newFromage.id))){
          selectionFromages.value.push(newFromage);
          selectionIds.push(newFromage.id);
        }
      };
    } else filter.quantite = 0;
  };

</script>


<template>
  <div class="p-6 flex flex-col gap-6 md:flex-row">

    <div class="flex flex-col-reverse items-stretch md:flex-col md:min-w-fit"> 
      <button @click="selectionnerFromages(modele, 6)" class="btn btn-primary gap-2">
        <Icon name="tabler:refresh"/>
        Rafraîchir 
      </button>
      <Slider v-model:value="nombreConvives" title="Nombre de convives" class="p-3 mb-6" />
      <div class="divider md:divider-horizontal" />
      <Radios :radios="typesEvenenements" v-model:value="modele.quantite" title="Types de fromages" class="p-3" />
      <div class="divider md:divider-horizontal" />
      <Multiselect :checkboxes="typesLait" v-model:values="modele.milk" title="Types de lait" class="p-3" />
      <div class="divider md:divider-horizontal" />
      <Multiselect :checkboxes="typesFromages" v-model:values="modele.curd" title="Types de fromages" class="p-3" />
    </div>

    <div class="flex flex-col">
      <!-- Quantité -->
      <div class="stats bg-base-300 mb-3">

        <div class="stat">
          <div class="stat-title opacity-90">Quantité de fromages à prévoir</div>
          <div class="stat-value font-medium">{{ modele.quantite * nombreConvives }}gr.</div>
          <div class="stat-desc opacity-90">{{modele.quantite}}gr par personne.</div>
        </div>

      </div>

      <!-- Sélection de fromages -->
      <div class="flex flex-wrap justify-center gap-4">
        <CheeseCard v-for="fromage in selectionFromages" :key="fromage.id" :cheese="fromage"/>
      </div>
    </div>
  
  </div>

</template>