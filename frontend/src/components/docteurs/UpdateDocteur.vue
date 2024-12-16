<template>
    <main>
        <h1>Ajout d'un docteur</h1>
        <form @submit.prevent="envoyer">
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input v-model="docteur.nom_D" type="text" class="form-control" id="nom" required>
            </div>
            <div class="mb-3">
                <label for="prenom" class="form-label">Prénom</label>
                <input v-model="docteur.prenom_D" type="text" class="form-control" id="prenom" required>
            </div>
            <div class="mb-3">
                <label for="specialite" class="form-label">Spécialité</label>
                <input v-model="docteur.specialite_D" type="text" class="form-control" id="specialite" required>
            </div>
            <div class="mb-3">
                <label for="numTel" class="form-label">Numéro de téléphone</label>
                <input v-model="docteur.num_Tel_D" type="text" class="form-control" id="numTel" required>
            </div>
            <div class="mb-3">
                <label for="couriel" class="form-label">Email</label>
                <input v-model="docteur.couriel_D" type="email" class="form-control" id="couriel" required>
            </div>
            <div class="mb-3">
                <label for="disponibilite" class="form-label">Disponibilité</label>
                <select v-model="docteur.disponibilite_D" class="form-control" id="disponibilite">
                    <option>Disponible</option>
                    <option>Occupé</option>
                    <option>Indisponible</option>
                    <option>En pause</option>
                    <option>Rendez-vous complet</option>
                    <option>En ligne</option>
                    <option>En retard</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="photo" class="form-label">Photo</label>
                <input v-model="docteur.photo" type="text" class="form-control" id="photo">
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </main>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Initialisation des données du docteur
const docteur = ref({
    nom_D: '',
    prenom_D: '',
    specialite_D: '',
    num_Tel_D: '',
    couriel_D: '',
    disponibilite_D: 'Disponible',
    photo: ''
});

// Utilisation du router pour la redirection
const router = useRouter();

// Fonction pour envoyer les données
const envoyer = () => {
    const url = import.meta.env.VITE_SERVER_URL + '/docteur';
    axios.post(url, docteur.value)
        .then(res => {
            console.log(res);
            router.push('/docteur'); // Rediriger après l'ajout
        })
        .catch(err => console.log(err));
};
</script>

<style lang="css" scoped></style>
