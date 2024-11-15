import express from "express";
import { 
    administrateursList, 
    createAdministrateur, 
    deleteAdministrateur, 
    updateAdministrateur, 
    searchAdministrateur 
} from "./controllers/administrateurController.js";

const router = express.Router();

// Routes for Administrateurs
router.get("/administrateurs", administrateursList);  // Liste des administrateurs
router.post("/administrateurs", createAdministrateur);  // Créer un administrateur
router.delete("/administrateurs/:id", deleteAdministrateur);  // Supprimer un administrateur
router.put("/administrateurs/:id", updateAdministrateur);  // Modifier un administrateur
router.get("/administrateurs/:id", searchAdministrateur);  // Recherche d'un administrateur

export default router;
