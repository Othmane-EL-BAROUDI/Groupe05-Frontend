<template>
  <div class="container">
    <h1 class="text-center my-4">Accueil</h1>
    <div class="row">
      <!-- Boutons de navigation -->
      <div class="col-md-6 mb-3">
        <router-link to="/ajouterpatient" class="btn btn-primary btn-block">
          Ajouter un Patient
        </router-link>
      </div>
      <div class="col-md-6 mb-3">
        <router-link to="/listepatients" class="btn btn-secondary btn-block">
          Voir les Patients
        </router-link>
      </div>
    </div>

    <!-- Section avec les informations récentes -->
    <div class="mb-4">
      <h2>Derniers Patients Ajoutés</h2>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="patient in recentPatients"
          :key="patient.id"
        >
          <div class="d-flex justify-content-between">
            <span>{{ patient.nom }} {{ patient.prenom }}</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- Section avec des statistiques (exemple) -->
    <div class="mt-4">
      <h3>Statistiques</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Total Patients</h5>
              <p class="card-text">{{ totalPatients }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Patients par Mois</h5>
              <p class="card-text">{{ patientsByMonth }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ho-me",
  data() {
    return {
      // Exemple de données
      recentPatients: [
        { id: 1, nom: "Dupont", prenom: "Jean" },
        { id: 2, nom: "Martin", prenom: "Claire" },
        { id: 3, nom: "Durand", prenom: "Paul" },
      ],
      totalPatients: 150,
      patientsByMonth: 10,
    };
  },
  methods: {
    viewPatient(patientId) {
      this.$router.push({ name: "PatientDetail", params: { id: patientId } });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: auto;
}
.card {
  margin-bottom: 15px;
}
</style>
