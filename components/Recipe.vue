<template>
  <div class="flex flex-row gap-3 items-baseline">
    <button class="btn btn-circle btn-sm" @click="select()">
      <Icon name="material-symbols:add" size="20"/>
    </button>
    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div class="collapse-title text-xl font-medium">
        {{ recipe.name }}
      </div>
      <div class="collapse-content">
        
        <div class="card">
          <figure><nuxt-img width="320" :src="recipe.images[1]" :alt="recipe.name"/></figure>
          <div class="card-body">
            <div class="flex flex-row gap-1 mb-2">
              <div class="badge">{{recipe.people}} personnes/portions</div>
              <div class="badge">{{recipe.totalTime}}min</div>
            </div>

            <ul class="list-disc">
              <li v-for="item in recipe.ingredients" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits(['select'])

  const props = defineProps({
    recipe:{
      type: Object
    }
  })

  function select() {
    emit('select');
  }
</script>