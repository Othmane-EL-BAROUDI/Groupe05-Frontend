<template>
  <div class="container">
    <h1 class="text-center my-4">Liste des Patients</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Nom</th>
          <th scope="col">Prénom</th>
          <th scope="col">Date de Naissance</th>
          <th scope="col">Numéro de Téléphone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patients" :key="patient.id">
          <td>{{ patient.nom }}</td>
          <td>{{ patient.prenom }}</td>
          <td>{{ patient.date_naissance }}</td>
          <td>{{ patient.num_tel }}</td>
          <td>
            <button class="btn btn-info" @click="viewPatient(patient.id)">
              Modifier
            </button>
            <button class="btn btn-danger" @click="deletePatient(patient.id)">
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Liste-patients",
  data() {
    return {
      // Exemple de données patients
      patients: [
        {
          id: 1,
          nom: "Dupont",
          prenom: "Jean",
          date_naissance: "1990-05-12",
          num_tel: "0123456789",
        },
        {
          id: 2,
          nom: "Durand",
          prenom: "Marie",
          date_naissance: "1985-10-25",
          num_tel: "0987654321",
        },
      ],
    };
  },
  methods: {
    viewPatient(id) {
      console.log(`Voir les détails du patient avec l'ID: ${id}`);
    },
    deletePatient(id) {
      console.log(`Supprimer le patient avec l'ID: ${id}`);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
}

.table {
  margin-top: 20px;
}

button {
  margin-right: 5px;
}
</style>
