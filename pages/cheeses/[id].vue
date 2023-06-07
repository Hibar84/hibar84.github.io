<script setup lang="ts">
  import { Database } from '~/lib/supabase_types'

  const route = useRoute();
  const supabase = useSupabaseClient<Database>();

  type Cheese = Database['public']['Tables']['fromages']['Row'];

  let { data : fromages } = await supabase
    .from("fromages")
    .select('*')
    .eq('id', route.params.id);
  
  const fromage = fromages[0];

  useHead({
    title: fromage.name
  })

</script>


<template>
  <div class="p-4 flex flex-col gap-4">
    <NuxtLink class="" to="/cheeses">
      <Icon name="material-symbols:arrow-back" size="30"/>
    </NuxtLink>
    
    <div class="flex flex-col gap-6 md:flex-row">
      
      <div>
        <img class="rounded-xl" :src="fromage.img" />
      </div>
      
      
      <div>
        <h1 class="text-3xl font-semibold mb-3">{{ fromage.name }}</h1>
        <p v-if="fromage.description !== ''" class="text-justify">{{ fromage.description }}</p>
      </div>
      
      
    </div>
  </div>

</template>