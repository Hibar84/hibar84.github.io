<template>
  <div class="self-center">
    <menu class="flex flex-row">
      <ul>
        <NuxtLink to="/" class="menu-item">
          Home
        </NuxtLink>
      </ul>
      <ul>
        <NuxtLink to="/gares" class="menu-item">
          Mes gares
        </NuxtLink>
      </ul>
    </menu>
  </div>
</template>


<style lang="postcss" scoped>
.menu-item{
  @apply text-gray-700 block px-4 py-2 text-sm hover:bg-slate-300 hover:rounded-full hover:text-white focus:text-red-900
}
</style>