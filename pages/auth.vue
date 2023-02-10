<script setup>
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  const loading = ref(false);
  const email = ref('');

  const handleLogin = async () => {
    try {
      loading.value = true
      const { error } = await supabase.auth.signInWithOtp({ email: email.value})
      if (error) throw error
      alert('Vérifie tes mails!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      loading.value = false
    }
  };

  const handleSignOut = async () => {
    try {
      loading.value = true
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      alert('Déconnecté!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      loading.value = false
    }
  };

</script>

<template>
  <div class="hero rounded bg-base-200">
    <div class="hero-content flex-col" @submit.prevent="handleLogin">
      <div>
        <input class="input" type="email" placeholder="Email" v-model="email" />
      </div>
      <div class="btn-group">
        <button
          @click="handleLogin"
          class="btn"
          :disabled="loading">Se connecter</button>
        <button
          @click="handleSignOut"
          class="btn"
          :disabled="loading">Se déconnecter</button>
      </div>
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>