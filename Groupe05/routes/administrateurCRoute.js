
//import {Router} from "express"
import express from "express";


import { 
    administrateurList, 
    addAdmin, 
    deleteAdmin, 
    updateAdmin, 
    searchAdministrateur 
} from "../controller/administrateurCController.js";




const router = express.Router();

// Routes for Administrateurs
router.get("/", administrateurList);  // Liste des administrateurs
router.post("/add", addAdmin);  // Créer un administrateur
router.delete("/adminDelete", deleteAdmin);  // Supprimer un administrateur
router.put("/adminUpdate", updateAdmin);  // Modifier un administrateur
router.get("/:idSearch", searchAdministrateur);  // Recherche d'un administrateur

export default router;
