<script setup lang="ts">
  
  const regions = useRegions();

  const legende = ref('')
  const stats = ref({});

  interface Props {
    data: any
  }

  const props = defineProps<Props>();

  function updateLegende(departement){
    legende.value = departement
    if (Object.keys(props.data).includes(departement)){
      stats.value = props.data[departement];
    } else {
      stats.value = {
        erreur: "Pas de données disponibles"
      }
    }
    
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

</script>

<template>
  <div class="stats flex flex-col shadow min-h-fit w-screen md:w-1/2">
    <div class="p-4">
      <h1 class="stat-title opacity-90">
        Légende : {{ legende }}
      </h1>
      <div>
        <p v-for="key in Object.keys(stats)" :key="key">{{ capitalizeFirstLetter(key) }}: {{ stats[key] }}</p>
      </div>
    </div>
    <div class="stat">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 667 578" xml:space="preserve">
        <g v-for="region in regions" :key="region.code" :data-nom="region.nom" :data-code_insee="region.code">
          <path v-for="departement in region.departements" :key="departement.code" :d="departement.path" :data-nom="departement.nom" :data-numerodepartement="departement.code" @mouseover="updateLegende(departement.nom)"></path>
        </g>
      </svg>
    </div>
	</div>
</template>

<style type="text/css">
  path {
    stroke: #000000;
    stroke-width: 1px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-opacity: .25;
    fill: #e2e8f0;
  }
  g:hover path {
    fill: #cbd5e1;
  }
  g path:hover {
    fill: #94a3b8;
  }
</style>