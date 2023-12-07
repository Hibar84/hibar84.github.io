<script setup lang="ts">
import type { Database } from '~/lib/supabase_types'
  
  useHead({
    title: 'Boîte à idées'
  });

  // Routing parameters
  const route = useRoute();
  const fullPath = route.fullPath.split('/');
  const id = fullPath[fullPath.length-1];
  
  // Supabase config
  const supabase = useSupabaseClient<Database>();

  const { data: ideasCount, refresh } = await useAsyncData('ideas', async () => {
    const { count } = await supabase
      .from('ideas')
      .select('*', { count: 'exact', head: true })
      .eq('key_box', route.params.id);
    return count
  });

  interface Idea {
    title: string;
    key_box: string | string[];
    done: boolean;
    desc?: string;
    url?: string;
  };

  
  const selectedIdea = ref<Idea>({
    title: "",
    desc:"",
    url:"",
    done: false,
    key_box: id
  });

  const newIdea = ref<Idea>({ 
    title: "",
    done: false,
    key_box: id
  });


  async function addIdea(idea){
    const { error } = await supabase
      .from('ideas')
      .insert(idea)
    if (error) {
      console.log(error)
    }
    refresh();
  }


  let url: string = "https://app.tolula.fr" + route.fullPath

  async function pickRandomIdea(){
    selectedIdea.value = {title:"", desc:"", url:"", done: false, key_box: id}
    
    const { data, error } = await supabase.rpc('get_random_idea', { input_key : id });

    console.log(data);

    if (error) console.error(error)
    else {
      if (data.length === 0) selectedIdea.value = {title:"", desc:"Boîte vide", url:"", done: false, key_box: id}
      else selectedIdea.value = data[0]
    }
  };
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
      <p class="text-6xl">{{ ideasCount }}<Icon name="carbon:idea" size="30"/></p>
    </div>
    
    <!-- Boutons -->
    <div class="join">
      <button class="btn join-item" @click="pickRandomIdea()" onclick="randomIdea.showModal()">Choix aléatoire</button>
      <button class="btn join-item" onclick="addIdea.showModal()">Ajouter une idée</button>
    </div>

    <!-- Modal : ajouter une idée -->
    <dialog id="addIdea" class="modal modal-bottom sm:modal-middle">
      <form method="dialog" class="modal-box">
        <button class="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
        
        <label for="title" hidden>Titre</label>
        <input name="title" type="text" placeholder="Nom" v-model="newIdea.title" class="mb-3 input w-full max-w-xs bg-base-300">

        <label for="desc" hidden>Description</label>
        <textarea name="desc" type="text" placeholder="Description" v-model="newIdea.desc" class="mb-3 input w-full max-w-xs bg-base-300"></textarea>

        <label for="tags" hidden>Lien</label>
        <input name="tags" type="url" placeholder="Lien" v-model="newIdea.url" class="mb-3 input w-full max-w-xs bg-base-300">
        
        <div class="modal-action">
          <button class="btn" @click="addIdea(newIdea)">Ajouter</button>
        </div>
      </form>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>

    <!-- Modal : Choix aléatoire -->
    <dialog id="randomIdea" class="modal modal-bottom sm:modal-middle">
      <form method="dialog" class="modal-box" @loadstart="pickRandomIdea()">
        <button class="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
        <h3 class="font-bold text-lg">{{ selectedIdea.title }}</h3>
        <p class="py-4">{{ selectedIdea.desc }}</p>
        <p class="py-4"><a class="link" :href="selectedIdea.url" target="_blank">{{ selectedIdea.url }}</a></p>
      </form>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    
  </div>
</template>