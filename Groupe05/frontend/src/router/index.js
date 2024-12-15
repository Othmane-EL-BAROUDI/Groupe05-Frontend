import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Signup from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
import Ajouterpatient from "@/views/Ajouterpatient.vue";
import Listepatients from "@/views/Listepatients.vue";
import Ajouterdocteur from "@/views/Ajouterdocteur.vue";
import Listedocteurs from "@/views/Listedocteurs.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sign-up",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Ajouterpatient",
    name: "Ajouterpatient",
    component: Ajouterpatient,
  },
  {
    path: "/Listepatients",
    name: "Listepatients",
    component: Listepatients,
  },
  {
    path: "/Ajouterdocteur",
    name: "Ajouterdocteur",
    component: Ajouterdocteur,
  },
  {
    path: "/Listedocteurs",
    name: "Listedocteurs",
    component: Listedocteurs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
