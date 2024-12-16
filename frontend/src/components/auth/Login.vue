


<template>
  <div class="login-container">
    <h2 class="mb-4">Connexion</h2>
    <form @submit.prevent="connecter">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="loginInfo.email"
          :class="{ 'is-invalid': erreurs.email }"
          required
        />
        <div v-if="erreurs.email" class="invalid-feedback">
          {{ erreurs.email }}
        </div>
      </div>
      <div class="mb-3">
        <label for="mot_de_passe" class="form-label">Mot de passe</label>
        <input
          type="password"
          class="form-control"
          id="mot_de_passe"
          v-model="loginInfo.mot_de_passe"
          :class="{ 'is-invalid': erreurs.mot_de_passe }"
          required
        />
        <div v-if="erreurs.mot_de_passe" class="invalid-feedback">
          {{ erreurs.mot_de_passe }}
        </div>
      </div>
      <button type="submit" class="btn btn-primary w-100">Se connecter</button>
    </form>
    <RouterLink to="/AddAdmin" class="mt-3 d-block text-center">Nouveau? Créer un compte.</RouterLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useAuth from "@/services/auth/serviceAuth";
import useAuthStore from "@/stores/auth/authStore";
import { useRouter } from "vue-router";

const { login } = useAuth();
const { setUser, setToken } = useAuthStore();

const loginInfo = ref({
  couriel_A: "",
  mot_de_passe: "",
});

const erreurs = ref({});

const router = useRouter();

const connecter = () => {
  erreurs.value = {}; // Réinitialiser les erreurs
  login(loginInfo.value)
    .then((res) => {
      setToken(res.token);
      setUser(res.data);
      router.push("/login");
    })
    .catch((err) => {
      const backendErrors = err.response.data.errors || [];
      backendErrors.forEach((error) => {
        erreurs.value[error.path] = error.msg;
      });
    });
};

</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}
</style>

