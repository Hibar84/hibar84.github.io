<template>

<div class="p-6 flex flex-col">

  <!-- Photo -->
  <div class="avatar self-center mb-3">
    <div class="w-36 mask mask-squircle">
      <nuxt-img width="200" height="200" src="/cv.png"/>
    </div>
  </div>

  <!-- Header -->
  <div class="hero mb-3">
    <div class="hero-content text-center flex flex-col">
        <h1 class="text-3xl font-bold">Lucas GUILHEN</h1>
        <div class="flex flex-row justify-evenly">
          <div>
            <Icon name="material-symbols:location-city" size="20"/>
            <p class="align-middle">Paris, FR</p>
          </div>
          <div class="divider divider-horizontal"></div>
          <div>
            <Icon name="material-symbols:computer-outline" size="20"/>
            <p class="align-middle">Chef de projet, DNUM</p>
          </div>
          <div class="divider divider-horizontal"></div>
          <div>
            <Icon name="mdi:github" size="20"/>
            <p class="align-middle"><a href="https://github.com/Hibar84" target="_blank">Hibar84</a></p>
          </div>
          <div class="divider divider-horizontal"></div>
          <div>
            <Icon name="mdi:linkedin" size="20"/>
            <p class="align-middle"><a href="https://www.linkedin.com/in/lucas-guilhen/" target="_blank">Linkedin</a></p>
          </div>
        </div>
        <p class="text-justify">Ingénieur généraliste (Arts et Métiers, Polytechnique Montréal), mes capacités d’adaptation et ma curiosité me permettent de m’intégrer dans de nombreux domaines industriels. Je suis particulièrement intéressé par la gestion de projet opérationnel dans des entreprises ou organismes disposant de fortes valeurs et ayant à coeur de répondre aux défis sociétaux et environnementaux d’aujourd’hui et de demain.</p>
    </div>
  </div>

  <!-- Technologies -->
  <div class="flex flex-wrap text-center bg-base-200 rounded-box self-center justify-center mb-3">
    <div class="p-6 transform transition hover:scale-125" v-for="techno in technologies" :key=techno>
      <div class="tooltip" :data-tip="techno.level">
        <Icon :name="techno.icon" size="40"/>
      </div>
      <p class="text-xs">{{techno.name}}</p>
    </div>
  </div>

  <!-- Expériences -->
  <h1 class="font-semibold text-xl self-center mb-3">Mes expériences</h1>

  <div class="self-center">
    <ul class="steps steps-vertical">
      <li class="step" data-content="●">
        <div class="p-4 bg-base-200 rounded-box min-w-full text-left">
          <div class="text-xl font-medium mb-3">
            Chef de projet
            <div class="badge badge-primary mx-2"><a href="https://www.interieur.gouv.fr/ministere/secretariat-general/direction-du-numerique">Direction du Numérique</a></div>
            <div class="badge badge-accent mx-2">Paris</div>
            <div class="badge mx-2">2022 - </div>
          </div>
          <div class="px-4">
            <ul class="list-disc">
              <li>Mise en œuvre et conduite de plusieurs projets SI depuis leur conception jusqu'à la réception et l'exploitation des application.</li>
              <li>Travail sous les normes et référentiels publics, sur un large éventail de solutions techniques (API, téléservices, progiciels, CRM, Cloud, …).</li>
              <li>Respect des exigences en termes de qualité, de performances, de coût, de délai et de sécurité.</li>
            </ul>
          </div>      
        </div>
      </li>

      <li class="step" data-content="●">
        <div class="p-4 bg-base-200 rounded-box min-w-full text-left">
          <div class="text-xl font-medium mb-3">
            Product Owner
            <div class="badge badge-primary mx-2"><a href="https://www.senioradom.com">SeniorAdom</a></div>
            <div class="badge badge-accent mx-2">Malakoff</div>
            <div class="badge mx-2">2021</div>
          </div>
          <div class="px-4">
            <ul class="list-disc">
              <li>Réalisation d’un audit du service client.</li>
              <li>Conduite du projet de développement d’un outil CRM.</li>
              <li>Intégration à l’équipe MOA : définition des besoins utilisateurs, rédaction du cahier des charges, recettage, communication et conduite du changement.</li>
            </ul>
          </div>      
        </div>
      </li>

      <li class="step" data-content="●">
        <div class="p-4 bg-base-200 rounded-box min-w-full text-left">
          <div class="text-xl font-medium mb-3">
            Chargé de projet
            <div class="badge badge-primary mx-2"><a href="https://www.expertisefromagere.com/le-cefq/">CEFQ</a></div>
            <div class="badge badge-accent mx-2">Montréal</div>
            <div class="badge mx-2">2020</div>
          </div>
          <div class="px-4">
            <ul class="list-disc">
              <li>Gestion d’un projet de recherche (livrables, ressources, communications).</li>
              <li>Construction d'une cartographie des processus d’affaires.</li>
              <li>Développement d'une ontologie du pilotage de la transformation fromagère.</li>
              <li>Veille technologique sur les systèmes d’informations spécialisés</li>
            </ul>
          </div>      
        </div>
      </li>
    </ul>
  </div>

</div>
</template>

<script setup>
useHead({
    title: 'About me'
  })

let technologies = [
  {
    name: "HTML",
    level: "4/5",
    icon: "mdi:language-html5"
  },
  {
    name: "CSS",
    level: "2/5",
    icon: "mdi:language-css3"
  },
  {
    name: "JS",
    level: "4/5",
    icon: "mdi:language-javascript"
  },
  {
    name: "Nuxt 3",
    level: "4/5",
    icon: "mdi:nuxt"
  },
  {
    name: "Python",
    level: "4/5",
    icon: "mdi:language-python"
  },
  {
    name: "Supabase",
    level: "3/5",
    icon: "simple-icons:supabase"
  },
  {
    name: "Git",
    level: "2/5",
    icon: "mdi:git"
  },
  {
    name: "Jira",
    level: "4/5",
    icon: "mdi:jira"
  },
  {
    name: "Illustrator",
    level: "4/5",
    icon: "simple-icons:adobeillustrator"
  },
  {
    name: "Bureautique",
    level: "5/5",
    icon: "mdi:microsoft-office"
  },


]

</script>