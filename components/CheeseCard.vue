<template>
  <div class="card card-compact w-80 lg bg-base-200">
    <figure class="px-5 pt-5" v-if="cheese.img !== ''">
      <nuxt-img v-if="cheese.img !== ''" :src="cheese.img" :alt="cheese.name" class="rounded-xl"/>
      <nuxt-img v-else src="/cheese_stock.png" alt="Pas de photo" class="rounded-xl"/>
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ cheese.name }}</h2>
      <div v-if="cheese.milk !== ''" class="badge">{{ cheese.milk }}</div>
      <div v-if="cheese.curd !== ''" class="badge badge-primary">{{ cheese.curd }}</div>
      <div class="tooltip tooltip-bottom tooltip-accent badge badge-accent" :data-tip="cheese.regions">
        <p v-if="cheese.regions !== ''">{{ cheese.regions.length > 32 ? '...' : cheese.regions }}</p>
      </div>
      <div class="card-actions justify-end">
        <NuxtLink class="btn btn-primary" :to="'/cheeses/'+cheese.id">Détails</NuxtLink>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
  import { Database } from '~/lib/supabase_types'

  type Cheese = Database['public']['Tables']['fromages']['Insert']

  const props = defineProps<{cheese: Cheese}>();

</script>