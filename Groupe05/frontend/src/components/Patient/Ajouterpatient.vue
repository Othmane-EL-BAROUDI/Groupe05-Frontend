<template>
  <div class="container">
    <h1 class="text-center my-4">Ajouter un Patient</h1>
    <!-- Formulaire pour ajouter un patient -->
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="nom_patient" class="form-label">Nom du Patient</label>
        <input
          type="text"
          class="form-control"
          id="nom_patient"
          v-model="state.nom_patient"
          placeholder="Entrez le nom"
        />
        <span class="text-danger" v-if="v$.nom_patient.$error">
          {{ v$.nom_patient.$errors[0].$message }}
        </span>
      </div>
      <div class="mb-3">
        <label for="prenom_patient" class="form-label">Prénom du Patient</label>
        <input
          type="text"
          class="form-control"
          id="prenom_patient"
          v-model="state.prenom_patient"
          placeholder="Entrez le prénom"
        />
        <span class="text-danger" v-if="v$.prenom_patient.$error">
          {{ v$.prenom_patient.$errors[0].$message }}
        </span>
      </div>
      <div class="mb-3">
        <label for="date_naissance" class="form-label">Date de Naissance</label>
        <input
          type="date"
          class="form-control"
          id="date_naissance"
          v-model="state.date_naissance"
        />
        <span class="text-danger" v-if="v$.date_naissance.$error">
          {{ v$.date_naissance.$errors[0].$message }}
        </span>
      </div>
      <div class="mb-3">
        <label for="adresse" class="form-label">Adresse</label>
        <input
          type="text"
          class="form-control"
          id="adresse"
          v-model="state.adresse"
          placeholder="Entrez l'adresse"
        />
      </div>
      <div class="mb-3">
        <label for="num_tel" class="form-label">Numéro de Téléphone</label>
        <input
          type="tel"
          class="form-control"
          id="num_tel"
          v-model="state.num_tel"
          placeholder="Entrez le numéro"
        />
      </div>
      <div class="mb-3">
        <label for="courriel" class="form-label">Courriel</label>
        <input
          type="email"
          class="form-control"
          id="courriel"
          v-model="state.courriel"
          placeholder="Entrez le courriel"
        />
        <span class="text-danger" v-if="v$.courriel.$error">
          {{ v$.courriel.$errors[0].$message }}
        </span>
      </div>
      <div class="mb-3">
        <label for="historique" class="form-label">Historique</label>
        <textarea
          class="form-control"
          id="historique"
          rows="3"
          v-model="state.historique"
          placeholder="Entrez l'historique médical"
        ></textarea>
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
  name: "AjouterPatient",
  setup() {
    const state = reactive({
      nom_patient: "",
      prenom_patient: "",
      date_naissance: "",
      adresse: "",
      num_tel: "",
      courriel: "",
      historique: "",
    });

    const rules = computed(() => ({
      nom_patient: { required },
      prenom_patient: { required },
      date_naissance: { required },
      courriel: { required, email },
    }));

    const v$ = useValidate(rules, state);

    const handleSubmit = () => {
      v$.$validate();
      if (!v$.$error) {
        // Ajouter le patient ici (par exemple, appeler une API pour enregistrer le patient)
        console.log("Patient ajouté :", state);
        // Réinitialiser le formulaire
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
