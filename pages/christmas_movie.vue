<template>
  <div class="flex flex-col">
    <div class="p-2 flex justify-evenly">
      
      <!-- 1er personnage -->
      <div class="p-2 bg-base-300 rounded flex flex-col">
        <h1 class="text-xl font-semibold text-center">Personnage A</h1>
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
      <div class="p-2 bg-base-300 rounded flex flex-col">
        <h1 class="text-xl font-semibold text-center">Personnage B</h1>
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
      <div class="p-2 bg-base-300 rounded flex flex-col">
        <h1 class="text-xl font-semibold text-center">Histoire</h1>
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
      <button class="btn max-w-fit mb-3" @click="setPrompt()">Générer</button>
      <article class="prose">
        <p class="text-justify"></p>
      </article>
    </div>
    
  </div>
</template>

<script setup>
// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

const scenario = ref({});

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
  const prompt = `Propose moi un scénario de film de Noël, avec les caractéristiques suivantes: Personnage A : ${scenario.value.actorA}-${scenario.value.jobA}, Personnage B : ${scenario.value.actorB}-${scenario.value.jobB}, Ville : ${scenario.value.city}, Lieu de rencontre des personnages: ${scenario.value.meeting},Evenement: ${scenario.value.event}. C'est une histoire d'amour.`;
  console.log(prompt);
  return prompt
};

// async function getScenario(){
//   const prompt = setPrompt();
//   result = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: prompt,
//     temperature: 0.6,
//     max_tokens: 500,
//   });
// };

</script>