<template>
  <div class="p-6">
    <h1>Connexion</h1>
    <input type="text" v-model="credentials.email" />
    <input type="password" v-model="credentials.password" />
    <button @click="handleLogin">Se connecter</button>
  </div>
</template>

<script setup>
  const supabase = useSupabaseClient();
  const credentials = ref({});
  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.value.email,
        password : credentials.value.password
      })
      if (error) throw error;
      return navigateTo("/admin");
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };
</script>
