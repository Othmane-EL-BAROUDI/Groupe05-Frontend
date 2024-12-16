<template>
    <main>
        <h1>Liste des docteurs</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Spécialité</th>
                    <th>Email</th>
                    <th>Disponibilité</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="docteur in docteurs" :key="docteur.id_Docteur">
                    <td>{{ docteur.id_Docteur }}</td>
                    <td>{{ docteur.nom_D }}</td>
                    <td>{{ docteur.prenom_D }}</td>
                    <td>{{ docteur.specialite_D }}</td>
                    <td>{{ docteur.couriel_D }}</td>
                    <td>{{ docteur.disponibilite_D }}</td>
                    <td>
                        <button @click="allerEditerDocteur(docteur.id_Docteur)" class="btn btn-primary">Éditer</button>
                        <button @click="allerDetailsDocteur(docteur.id_Docteur)" class="btn btn-success">Détails</button>
                        <button @click="supprimerDocteur(docteur.id_Docteur)" class="btn btn-danger">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="allerAjoutDocteur" class="btn btn-primary">Ajouter</button>
    </main>
</template>

<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

// Liste réactive des docteurs
const docteurs = ref([]);

// Router pour naviguer entre les pages
const router = useRouter();

// Fonction pour récupérer les docteurs
function lireDocteurs() {
    const url = import.meta.env.VITE_SERVER_URL + '/docteur';
    axios.get(url)
        .then(res => {
            docteurs.value = res.data.data;
        })
        .catch(err => {
            console.error(err);
        });
}

// Fonction pour supprimer un docteur
function supprimerDocteur(id) {
    const url = import.meta.env.VITE_SERVER_URL + '/docteur/' + id;
    axios.delete(url)
        .then(() => {
            lireDocteurs(); // Rafraîchir la liste après suppression
        })
        .catch(err => {
            console.error(err);
        });
}

// Navigation vers la page d'édition
function allerEditerDocteur(id) {
    router.push(`/docteur/${id}`);
}

// Navigation vers la page de détails
function allerDetailsDocteur(id) {
    router.push(`/docteur/details/${id}`);
}

// Navigation vers la page d'ajout
function allerAjoutDocteur() {
    router.push('/docteur/ajouter');
}

// Charger les docteurs avant que le composant ne soit monté
onBeforeMount(() => {
    lireDocteurs();
});
</script>

<style lang="css" scoped></style>
