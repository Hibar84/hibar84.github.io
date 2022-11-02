<template>
  <div class="p-6 max-w-max mx-auto bg-white rounded-xl shadow-lg space-x-4">
    
    <div class="flex justify-between mb-6">
      <h1 class="font-bold text-2xl">Administration</h1>
      <button class="btn bg-red-500 text-white" @click="logOut">Se déconnecter</button>
    </div>

    <div class="px-4 py-2 border-2 rounded mb-3">
      <h2 class="text-xl mb-3">Ajout d'utilisateur</h2>
      <div class="space-x-3">
        <input class="bg-white px-1 py-1 text-sm border-2" type="text" placeholder="Email" v-model="credentials.email" />
        <input class="bg-white px-1 py-1 text-sm border-2" type="password" placeholder="Mot de passe" v-model="credentials.password" />
        <button class="btn bg-slate-200" @click="signUp">Créer</button>
      </div>
    </div>

    <div class="px-4 py-2 border-2 rounded">
      <h2 class="text-xl mb-3">Gares visitées</h2>
      <div class="">
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    middleware: ["auth"],
  });
  
  const supabase = useSupabaseClient();
  const credentials = ref({});
  
  const logOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error;
      return navigateTo("/");
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  const signUp = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: credentials.value.email,
        password : credentials.value.password
      })
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };
</script>

<style lang="postcss" scoped>
.btn{
  @apply px-4 py-1 text-sm rounded-full ;
}
</style>