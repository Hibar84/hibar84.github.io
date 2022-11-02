<template>
  <div class="p-6">

    <!-- Header -->
    <div class="px-4 py-2 border-2 rounded mb-3 flex flex-row justify-between">
      <div class="flex flex-row justify-start space-x-4">
        <img class="block h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Logo_SNCF_2011.svg/1920px-Logo_SNCF_2011.svg.png">
        <h1 class="font-bold text-3xl">Mes gares SNCF</h1>
      </div>
      <NuxtLink class="px-4 py-1 bg-slate-200 rounded-full" to="/admin">Administration</NuxtLink>
    </div>
    
    <!-- Statistiques -->
    <div class="px-4 py-2 border-2 rounded mb-3">
      <h1 class="font-bold text-2xl">Statistiques</h1>
    </div>

    <!-- Carte -->
    <div class="px-4 py-2 border-2 rounded mb-3">
      <h1 class="font-bold text-2xl">Carte</h1>
    </div>

  </div>
</template>