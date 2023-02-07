<template>
  <div class="p-6 flex flex-col justify-evenly place-content-evenly">

    <div class="alert alert-warning shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span>Attention: fonctionnalité en cours d'élaboration.</span>
      </div>
    </div>

    <div class="p-4 flex flex-wrap justify-evenly">
      
      <!-- 1er personnage -->
      <div class="p-2 mb-3 bg-base-300 rounded flex flex-col">
        <h1 class="text-xl font-semibold text-center">Personnage A</h1>
        <!-- Nom -->
        <div class="p-2 flex gap-2 items-end">
          <div>
            <label class="label">
              <span class="label-text">Nom</span>
            </label>
            <select class="select w-full" v-model="scenario.actorA">
              <option v-for="name in options.names" :key="name">{{ name }}</option>
            </select>
          </div>
          <div class="btn btn-ghost" @click="setRandom(options.names, 'actorA')">
            <Icon name="tabler:arrows-random" size="20"/>
          </div>
        </div>
        <!-- Emploi -->
        <div class="p-2 flex gap-2 items-end">
          <div>
            <label class="label">
              <span class="label-text">Emploi</span>
            </label>
            <select class="select w-full" v-model="scenario.jobA">
              <option v-for="option in options.jobs" :key="option">{{ option }}</option>
            </select>
          </div>
          <div class="btn btn-ghost" @click="setRandom(options.jobs, 'jobA')">
            <Icon name="tabler:arrows-random" size="20"/>
          </div>
        </div>
      </div>

      <!-- 2e personnage -->
      <div class="p-2 mb-3 bg-base-300 rounded flex flex-col">
        <h1 class="text-xl font-semibold text-center">Personnage B</h1>
        <!-- Nom -->
        <div class="p-2 flex gap-2 items-end">
          <div>
            <label class="label">
              <span class="label-text">Nom</span>
            </label>
            <select class="select w-full" v-model="scenario.actorB">
              <option v-for="name in options.names" :key="name">{{ name }}</option>
            </select>
          </div>
          <div class="btn btn-ghost" @click="setRandom(options.names, 'actorB')">
            <Icon name="tabler:arrows-random" size="20"/>
          </div>
        </div>
        <!-- Emploi -->
        <div class="p-2 flex gap-2 items-end">
          <div>
            <label class="label">
              <span class="label-text">Emploi</span>
            </label>
            <select class="select w-full" v-model="scenario.jobB">
              <option v-for="option in options.jobs" :key="option">{{ option }}</option>
            </select>
          </div>
          <div class="btn btn-ghost" @click="setRandom(options.jobs, 'jobB')">
            <Icon name="tabler:arrows-random" size="20"/>
          </div>
        </div>
      </div>
      
      <!-- Histoire -->
      <div class="p-2 mb-3 bg-base-300 rounded flex flex-col">
        <h1 class="text-xl font-semibold text-center">Histoire</h1>
        <!-- Ville -->
        <div class="p-2 flex gap-2 items-end">
          <div>
            <label class="label">
              <span class="label-text">Ville</span>
            </label>
            <select class="select w-full" v-model="scenario.city">
              <option v-for="city in options.cities" :key="city">{{ city }}</option>
            </select>
          </div>
          <div class="btn btn-ghost" @click="setRandom(options.cities, 'city')">
            <Icon name="tabler:arrows-random" size="20"/>
          </div>
        </div>
        <!-- Lieu de rencontre -->
        <div class="p-2 flex gap-2 items-end">
          <div>
            <label class="label">
              <span class="label-text">Lieu de la rencontre</span>
            </label>
            <select class="select w-full" v-model="scenario.meeting">
              <option v-for="place in options.meeting" :key="place">{{ place }}</option>
            </select>
          </div>
          <div class="btn btn-ghost" @click="setRandom(options.meeting, 'meeting')">
            <Icon name="tabler:arrows-random" size="20"/>
          </div>
        </div>
        <!-- Histoire d'ap-2 flex gap-2 items-endmour -->
        <div class="p-2 flex gap-2 items-baseline">
          <label class="label cursor-pointer">
            <span class="label-text">
              <Icon v-if="scenario.love" name="mdi:cards-heart" size="20"/>
              <Icon v-else name="mdi:heart-off" size="20"/>
              Histoire d'amour
            </span>
            <input type="checkbox" v-model="scenario.love" :checked="scenario.love" class="checkbox" hidden/>
          </label>
        </div>
        <!-- Rebondissement -->
        <div class="p-2 flex gap-2 items-end">
          <div>
            <label class="label">
              <span class="label-text">Rebondissement</span>
            </label>
            <select class="select w-full" v-model="scenario.event">
              <option v-for="event in options.events" :key="event">{{ event }}</option>
            </select>
          </div>
          <div class="btn btn-ghost" @click="setRandom(options.events, 'event')">
            <Icon name="tabler:arrows-random" size="20"/>
          </div>
        </div>
      </div>
    </div>

    <div class="p-4 flex flex-col bg-base-300 rounded items-center self-center">
      <button class="btn max-w-fit mb-3" @click="getScenario()">Générer</button>
      <article class="prose">
        <p class="text-justify">{{ result }}</p>
      </article>
    </div>
    
  </div>
</template>

<script setup>
const scenario = ref({});

const result = ref();

const options=ref(
  {
    names: ['Lucas','Nolwenn','Julien','Victor','Clara','Aude','Maxime','Juliette','Lara','Antoine'],

    jobs: ['Fleuriste','Auteur','Ingénieur.e','Sans emploi','Architecte','Chauffeur','Secrétaire','Coiffeur/euse','Barista'],

    cities:['New-York, USA', 'Helsinki, FIN', 'Strasbourg, FR', 'Edinburgh, GB', 'Québec, CAN'],

    events:['Rencontre avec un.e EX', 'Blessure', "Perte d'emploi", 'Incendie', 'Tempête de neige','Innondation'],
    
    meeting:['Au café', "A l'épicerie", "Sur la patinoire", 'Chez le marchand de sapin', 'Chez le fleuriste','Dans la rue'],
  }
)

function setRandom(liste, property){
  let rank = Math.floor(Math.random()*liste.length);
  scenario.value[property] = liste[rank];
};

function setPrompt(){
  const prompt = ref(`Formule un scénario de film de Noël, avec les caractéristiques suivantes: Personnage A = ${scenario.value.actorA}-${scenario.value.jobA}, Personnage B = ${scenario.value.actorB}-${scenario.value.jobB}, Ville = ${scenario.value.city}, Lieu de rencontre des personnages = ${scenario.value.meeting}, Evenement = ${scenario.value.event}.`);
  if (scenario.value.love === true){
    prompt.value += " C'est une histoire d'amour.";
  }
  return prompt.value;
};

const getScenario = async () => {
  // const response = await $fetch("/api/completion", {
  //   method: "post",
  //   body: { prompt: setPrompt() },
  // });
  // const proposition = response.choices[0].text.replace("\n",'');
  // console.log(response);
  result.value = "La commande a envoyer est: " + setPrompt();
};

</script>