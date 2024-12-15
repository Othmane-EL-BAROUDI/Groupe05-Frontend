<template>
  <div class="container">
    <h1 class="text-center my-4">Ajouter un Docteur</h1>
    <!-- Formulaire pour ajouter un docteur -->
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="nom_docteur" class="form-label">Nom du Docteur</label>
        <input
          type="text"
          class="form-control"
          id="nom_docteur"
          v-model="state.nom_docteur"
          placeholder="Entrez le nom"
        />
        <span class="text-danger" v-if="v$.nom_docteur.$error">
          {{ v$.nom_docteur.$errors[0].$message }}
        </span>
      </div>
      <div class="mb-3">
        <label for="prenom_docteur" class="form-label">Prénom du Docteur</label>
        <input
          type="text"
          class="form-control"
          id="prenom_docteur"
          v-model="state.prenom_docteur"
          placeholder="Entrez le prénom"
        />
        <span class="text-danger" v-if="v$.prenom_docteur.$error">
          {{ v$.prenom_docteur.$errors[0].$message }}
        </span>
      </div>
      <div class="mb-3">
        <label for="specialite" class="form-label">Spécialité</label>
        <input
          type="text"
          class="form-control"
          id="specialite"
          v-model="state.specialite"
          placeholder="Entrez la spécialité"
        />
      </div>
      <div class="mb-3">
        <label for="num_tel_docteur" class="form-label"
          >Numéro de Téléphone</label
        >
        <input
          type="tel"
          class="form-control"
          id="num_tel_docteur"
          v-model="state.num_tel_docteur"
          placeholder="Entrez le numéro"
        />
      </div>
      <div class="mb-3">
        <label for="courriel_docteur" class="form-label">Courriel</label>
        <input
          type="email"
          class="form-control"
          id="courriel_docteur"
          v-model="state.courriel_docteur"
          placeholder="Entrez le  courriel"
        />
        <span class="text-danger" v-if="v$.courriel_docteur.$error">
          {{ v$.courriel_docteur.$errors[0].$message }}
        </span>
      </div>
      <button type="submit" class="btn btn-primary">Ajouter</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "AjouterDocteur",
  setup() {
    const state = reactive({
      nom_docteur: "",
      prenom_docteur: "",
      specialite: "",
      num_tel_docteur: "",
      courriel_docteur: "",
    });

    const rules = computed(() => ({
      nom_docteur: { required },
      prenom_docteur: { required },
      specialite: { required },
      courriel_docteur: { required, email },
    }));

    const v$ = useValidate(rules, state);

    const handleSubmit = () => {
      v$.$validate();
      if (!v$.$error) {
        console.log("Docteur ajouté :", state);
        Object.keys(state).forEach((key) => (state[key] = ""));
      }
    };

    return { state, v$, handleSubmit };
  },
};
</script>

<style>
.container {
  max-width: 800px;
  margin: auto;
}
</style>
