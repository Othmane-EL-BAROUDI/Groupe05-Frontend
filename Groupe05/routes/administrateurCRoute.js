
//import {Router} from "express"
import express from "express";


import { 
    administrateurList, 
    addAdmin, 
    deleteAdmin, 
    updateAdmin, 
    searchAdministrateur 
} from "../controller/administrateurCController.js";




const router1 = express.Router();

// Routes for Administrateurs
router1.get("/administrateurC", administrateurList);  // Liste des administrateurs
router1.post("/administrateurC", addAdmin);  // Créer un administrateur
router1.delete("/administrateurC", deleteAdmin);  // Supprimer un administrateur
router1.put("/administrateurC", updateAdmin);  // Modifier un administrateur
router1.get("/administrateursC", searchAdministrateur);  // Recherche d'un administrateur

export default router1;
