<template>
  <div class="drawer">
    
    <input id="drawer" type="checkbox" class="drawer-toggle" /> 
    
    <div class="drawer-content flex flex-col">
      
      <!-- Navbar -->
      <div class="navbar">
        
        
        <div class="navbar-start">
          <!-- Icon menu -->
          <div class="flex-none lg:hidden navbar-start">
            <label for="drawer" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
        </div> 
        
        <div class="navbar-center">
          <!-- Icone du site -->
          <NuxtLink to="/">
            <div class="p-6 font-mono text-3xl">Ī</div>
          </NuxtLink>
        </div>
        
        <div class="navbar-end">
          <!-- Menu -->
          <div class="flex-none hidden lg:block navbar-end">
            <ul class="menu menu-horizontal">
              <li>
                <NuxtLink to="/cv">
                  À propos de moi
                </NuxtLink>
              </li>
              <li>
                <details>
                  <summary>Mes projets</summary>
                  <ul class="bg-base-200">
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
                </details>
              </li>
            </ul> 
          </div>

          <!-- Theme switcher -->
          <label class="px-2 swap swap-rotate">
            
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" data-toggle-theme="mylight,mydark" data-act-class="ACTIVECLASS"/>
            
            <!-- sun icon -->
            <Icon class="swap-off" fill="none" name="material-symbols:sunny-outline-rounded" size="30"/>
            
            <!-- moon icon -->
            <Icon class="swap-on" name="material-symbols:dark-mode-outline-rounded" size="30"/>
            
          </label>
        </div>
      </div>
      
      <!-- Page content here -->
      <slot />

    </div> 

    <!-- Drawer -->
    <div class="drawer-side">
      <label for="drawer" class="drawer-overlay"></label> 
      <ul class="menu p-4 w-80 h-full bg-base-200">
        <li>
          <NuxtLink to="/">
            Accueil
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/cv">
            À propos de moi
          </NuxtLink>
        </li>
        <li>
          <details open>
            <summary>Mes projets</summary>
            <ul>
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
          </details>
        </li>
      </ul>
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