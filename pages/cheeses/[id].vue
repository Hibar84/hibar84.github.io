<template>
  <div class="p-4 flex flex-col gap-4">
    <NuxtLink class="" to="/cheeses">
      <Icon name="material-symbols:arrow-back" size="30"/>
    </NuxtLink>
    
    <div class="flex flex-col gap-6 md:flex-row">
      
      <div>
        <img class="rounded-xl" :src="fromage.img" alt="Cheese Image" />
      </div>
      
      <div>
        <h1 class="text-3xl font-semibold mb-3">{{ fromage.name }}</h1>
        <p v-if="fromage.description" class="text-justify">{{ fromage.description }}</p>
        <p v-else class="text-justify">No description available.</p>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Database } from '~/lib/supabase_types'

  const route = useRoute()
  const supabase = useSupabaseClient<Database>()

  let { data: fromages } = await supabase
    .from('fromages')
    .select('*')
    .eq('id', route.params.id)

  const fromage = fromages?.[0]

  useHead({
    title: fromage?.name || 'Cheese Details'
  })
</script>

