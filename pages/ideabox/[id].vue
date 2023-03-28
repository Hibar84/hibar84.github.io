<script setup>
  useHead({
    title: 'Boîte à idées'
  });

  const route = useRoute();
  const supabase = useSupabaseClient();

  const { data: ideas, refresh } = await useAsyncData('ideas', async () => {
    const { data } = await supabase
      .from('ideas')
      .select('*')
      .eq('key_box', route.params.id);
    return data
  });

  const selectedIdea = ref({});

  const newIdea = ref({
    key_box: route.params.id
  });

  async function addIdea(idea){
    const { data, error } = await supabase
      .from('ideas')
      .insert(idea)
    if (error) {
      console.log(error)
    }
    refresh();
  }

  let url = "https://app.tolula.fr" + route.fullPath

  function pickRandomIdea(){
    selectedIdea.value = _sample(ideas.value);
  }
</script>


<template>
  <NuxtLink class="p-4" to="/ideabox">
    <Icon name="material-symbols:arrow-back" size="30"/>
  </NuxtLink>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl font-bold text-center mb-3">La boîte à idées</h1>
    
    <h2 class="text-xl text-center mb-6">Disponible avec le lien suivant : <a :href="url" class="link"> app.tolula.fr{{ route.fullPath }}</a></h2>
    
    
    <!-- Nombre d'idées en stock -->
    <div class="text-center mb-6">
      <p class="text-6xl">{{ ideas.length }}<Icon name="carbon:idea" size="30"/></p>
    </div>
    
    <!-- Boutons -->
    <div class="btn-group">
      <label for="randomIdea" class="btn" @click="pickRandomIdea()">Choix aléatoire</label>
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
          <label for="addIdea" class="btn" @click="addIdea(newIdea)">Ajouter</label>
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