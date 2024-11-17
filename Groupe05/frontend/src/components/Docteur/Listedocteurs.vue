<template>
  <div class="container">
    <h1 class="text-center my-4">Liste des Docteurs</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Nom</th>
          <th scope="col">Prénom</th>
          <th scope="col">Spécialité</th>
          <th scope="col">Numéro de Téléphone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="docteur in docteurs" :key="docteur.id">
          <td>{{ docteur.nom }}</td>
          <td>{{ docteur.prenom }}</td>
          <td>{{ docteur.specialite }}</td>
          <td>{{ docteur.num_tel_docteur }}</td>
          <td>
            <button class="btn btn-info" @click="viewDocteur(docteur.id)">
              Modifier
            </button>
            <button class="btn btn-danger" @click="deleteDocteur(docteur.id)">
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
  name: "ListeDocteurs",
  data() {
    return {
      // Exemple de données docteurs
      docteurs: [
        {
          id: 1,
          nom: "Martin",
          prenom: "Pierre",
          specialite: "Cardiologue",
          num_tel_docteur: "0123456789",
        },
        {
          id: 2,
          nom: "Lemoine",
          prenom: "Claire",
          specialite: "Pédiatre",
          num_tel_docteur: "0987654321",
        },
      ],
    };
  },
  methods: {
    viewDocteur(id) {
      console.log(`Voir les détails du docteur avec l'ID: ${id}`);
    },
    deleteDocteur(id) {
      console.log(`Supprimer le docteur avec l'ID: ${id}`);
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
