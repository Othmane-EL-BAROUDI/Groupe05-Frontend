<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- Liens de navigation pour les administrateurs -->
        <RouterLink to="/administrateurs">Liste des administrateurs</RouterLink>
        <RouterLink to="/administrateurs/ajouter">Ajouter un administrateur</RouterLink>

        <!-- Liens de navigation pour les docteurs -->
        <RouterLink to="/docteur">Liste des docteurs</RouterLink>
        <RouterLink to="/docteur/ajouter">Ajouter un docteur</RouterLink>

        <!-- Liens de navigation pour les patients -->
        <RouterLink to="/patients">Liste des patients</RouterLink>
        <RouterLink to="/patients/ajouter">Ajouter un patient</RouterLink>

        <!-- Liens de navigation pour les services médicaux -->
        <RouterLink to="/services">Liste des services médicaux</RouterLink>
        <RouterLink to="/services/ajouter">Ajouter un service médical</RouterLink>

         <!-- Liens de navigation pour les salles de consultations-->
         <RouterLink to="/salles">Liste des salles de consultation</RouterLink>
        <RouterLink to="/salles/ajouter">Ajouter une salle de consultation</RouterLink>


        <!-- Liens de navigation pour les rendez vous-->
        <RouterLink to="/rendezvous">Liste des rendez-vous</RouterLink>
        <RouterLink to="/rendezvous/ajouter">Ajouter un rendez-vous</RouterLink>
      </nav>
    </div>
  </header>

  <!-- Contenu des routes -->
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
/* Style pour l'en-tête */
header {
  background-color: #f8f9fa;
  padding: 1em 0;
  border-bottom: 1px solid #ddd;
}

/* Style pour le wrapper du menu */
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1em;
}

/* Style pour le menu de navigation */
nav {
  display: flex;
  justify-content: flex-start;
  gap: 2em;
}

/* Style pour les liens */
a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

/* Style pour le contenu principal */
main {
  padding: 2em 1em;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
