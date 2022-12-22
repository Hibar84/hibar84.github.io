<template>
  <div class="hero hero-content flex flex-col gap-24">
    <h1 class="text-3xl font-bold text-center">NONOLULU <br><span class="text-xl">La boîte à idées</span></h1>

    <!-- Nombre d'idées en stock -->
    <div class="text-center">
      <h2 class="text-l font-semibold">Idées</h2>
      <p class="text-6xl">{{ ideas.length }}</p>
    </div>
    
    <!-- Boutons -->
    <div class="btn-group">
      <label for="randomIdea" class="btn" @click="pickRandomIdea">Choix aléatoire</label>
      <label for="addIdea" class="btn">Ajouter une idée</label>
    </div>
    
    <!-- Modal : ajouter une idée -->
    <input type="checkbox" id="addIdea" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <label for="addIdea" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        
        <label for="title" hidden>Titre</label>
        <input name="title" type="text" placeholder="Nom" v-model="newIdea.title" class="mb-3 input w-full max-w-xs bg-base-300">

        <label for="desc" hidden>Description</label>
        <textarea name="desc" type="text" placeholder="Description" v-model="newIdea.desc" class="mb-3 input w-full max-w-xs bg-base-300"></textarea>

        <label for="tags" hidden>Lien</label>
        <input name="tags" type="url" placeholder="Lien" v-model="newIdea.url" class="mb-3 input w-full max-w-xs bg-base-300">
        
        <div class="modal-action">
          <label for="addIdea" class="btn" @click="ideas.push(newIdea)">Ajouter</label>
        </div>
      </div>
    </div>

    <!-- Modal : Choix aléatoire -->
    <input type="checkbox" id="randomIdea" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <label for="randomIdea" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="font-bold text-lg">{{ selectedIdea.title }}</h3>
        <p class="py-4">{{ selectedIdea.desc }}</p>
        <p class="py-4"><a class="link" :href="selectedIdea.url" target="_blank">{{ selectedIdea.url }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
const ideas = ref(
  [
    {
      id:1,
      title:"Première idée",
      desc:"",
      url:""
    },
    {
      id:2,
      title:"2e idée",
      desc:"",
      url:""
    },
    {
      id:3,
      title:"3e idée",
      desc:"",
      url:""
    }
  ]
);

const selectedIdea = ref({});

const newIdea = ref({});

function pickRandomIdea(){
  let rank = Math.floor(Math.random()*ideas.value.length);
  selectedIdea.value = ideas.value[rank];
}
</script>