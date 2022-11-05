<template>
  <div class="p-6 min-w-full flex flex-row justify-between shadow-md">

    <!-- Logo du site / titre -->
    <NuxtLink to="/">
      <div 
        class=" rounded-full bg-red-900 flex items-center justify-center font-serif text-4xl text-white" 
        style="height: 60px; width: 60px;"
      >
        Ī
      </div>
    </NuxtLink>

    <!-- Menu du site -->
    <SiteMenu />
  </div>
</template>