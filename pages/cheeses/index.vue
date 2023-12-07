<script setup lang="ts">
  import type { Database, ArrayElement } from '~/lib/supabase_types'

  useHead({
    title: 'Plateau fromages'
  })

  const supabase = useSupabaseClient<Database>();
  const typesLait = useMilkTypes();
  const typesFromages = useCheeseTypes();
  const typesEvenenements = useEventTypes();


  // FROMAGES
  let { data: fromages, error } = await supabase
    .from('fromages')
    .select('*');

  type FromageList = typeof fromages;
  type Fromage = ArrayElement<FromageList>;
  type Modele = Partial<Fromage> & {
    quantite: number
  };

  const selectionFromages = ref<FromageList>([]);

  // FORMULAIRE
  const modele = ref<Modele>({quantite: 0 });
  const nombreConvives = ref<number>(0);

  function pickOneCheese(filter: Modele): Fromage {
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

  function selectionnerFromages(filter: Modele, nombreFromages: number): void {
    // On fait une sélection de fromages uniquement si le types de lait ou de fromages a été sélectionné. Sinon on ne choisit pas de fromages, et la quantité par personne est mise à 0.

    selectionFromages.value = [];
    let selectionIds: Array<number> = [];

    while (selectionFromages.value.length < nombreFromages){
      let newFromage = pickOneCheese(filter);
      if (!(selectionIds.includes(newFromage.id))){
        selectionFromages.value.push(newFromage);
        selectionIds.push(newFromage.id);
      }
    };
  };

</script>


<template>
  <div class="p-6 flex flex-col gap-6">
    <div class="alert">
      <div>⛏️ Données fièrement minées, grâce à <a class="link link-hover" target="_blank" href="https://scrapy.org">Scrapy</a>.</div>
      <div>Source: <a class="link link-hover" target="_blank" href="https://www.leguidedufromage.com">Le Guide du Fromage</a> et <a class="link link-hover" target="_blank" href="https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal">Wikipédia</a>.</div>
    </div>
  
  <div class="flex flex-col gap-6 md:flex-row">

    <div class="flex flex-col-reverse items-stretch md:flex-col md:min-w-fit"> 
      <button @click="selectionnerFromages(modele, 6)" class="btn btn-primary gap-2">
        <Icon name="tabler:refresh"/>
        Rafraîchir 
      </button>
      <Slider v-model:value="nombreConvives" title="Nombre de convives" class="p-3" />
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
      <div class="flex flex-wrap justify-center gap-6">
        <CheeseCard v-for="fromage in selectionFromages" :key="fromage.id" :cheese="fromage"/>
      </div>
    </div>
  
  </div>
</div>

</template>