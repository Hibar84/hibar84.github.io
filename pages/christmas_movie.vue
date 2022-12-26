<template>
  <div>

    <pre>{{ scenario }}</pre>

    <div class="flex">
      
      <!-- 1er personnage -->
      <div class="p-2 flex flex-col">
        <select class="select w-full max-w-xs" v-model="scenario.actorA">
          <option v-for="name in options.names" :key="name">{{ name }}</option>
        </select>
        <button @click="setRandom(options.names, 'actorA')">Aléatoire</button>
      </div>

      <div class="p-2 flex flex-col">
        <select class="select w-full max-w-xs" v-model="scenario.jobA">
          <option v-for="option in options.jobs" :key="option">{{ option }}</option>
        </select>
        <button @click="setRandom(options.jobs, 'jobA')">Aléatoire</button>
      </div>

      <!-- 1er personnage -->
      <div class="p-2 flex flex-col">
        <select class="select w-full max-w-xs" v-model="scenario.actorB">
          <option v-for="name in options.names" :key="name">{{ name }}</option>
        </select>
        <button @click="setRandom(options.names, 'actorB')">Aléatoire</button>
      </div>

      <div class="p-2 flex flex-col">
        <select class="select w-full max-w-xs" v-model="scenario.jobB">
          <option v-for="job in options.jobs" :key="job">{{ job }}</option>
        </select>
        <button @click="setRandom(options.jobs, 'jobB')">Aléatoire</button>
      </div>

    </div>

  </div>
</template>

<script setup>
const scenario = ref({});

const options=ref(
  {
    names: [],

    jobs: [],

    city:[

    ],
  }
)

function setRandom(liste, property){
  let rank = Math.floor(Math.random()*liste.length);
  scenario.value[property] = liste[rank];
}

</script>