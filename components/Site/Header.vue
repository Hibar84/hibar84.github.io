<template>
  <div class="navbar bg-base-100">
    
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
          <li>
            <NuxtLink to="/cv">
              À propos de moi
            </NuxtLink>
          </li>
          <li tabindex="0">
            <span>Mes projets</span>
            <ul class="rounded-box p-2 bg-base-200">
              <li>
                <NuxtLink to="/gares">
                  Mes gares
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/cheeses">
                  Mon plateau de fromages
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/ideabox">
                  Boîte à idées
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/christmas">
                  Films de Noël
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/recettes">
                  Mes recettes
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="navbar-center">
      <NuxtLink to="/">
        <div class="p-6 font-mono text-3xl">Ī</div>
      </NuxtLink>
    </div>

    <div class="navbar-end">
      <label class="p-6 swap swap-rotate">
        
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" data-toggle-theme="mylight,mydark" data-act-class="ACTIVECLASS"/>
        
        <!-- sun icon -->
        <Icon class="swap-off" name="material-symbols:sunny-outline-rounded" size="30"/>
        
        <!-- moon icon -->
        <Icon class="swap-on" name="material-symbols:dark-mode-outline-rounded" size="30"/>
        
      </label>


    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'
import { themeChange } from 'theme-change'

export default {
  setup() {
    onMounted(() => {
      themeChange(false)
    })
  },
}
</script>

