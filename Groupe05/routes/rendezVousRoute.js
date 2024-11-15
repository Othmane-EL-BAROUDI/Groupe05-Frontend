import express from "express";
import { 
    rendezVousList, 
    createRendezVous, 
    deleteRendezVous, 
    updateRendezVous, 
    searchRendezVous 
} from "./controllers/rendezVousController.js";

const router = express.Router();

// Routes
router.get("/rendezVous", rendezVousList);  // Liste des rendez-vous
router.post("/rendezVous", createRendezVous);  // Créer un rendez-vous
router.delete("/rendezVous/:id", deleteRendezVous);  // Supprimer un rendez-vous
router.put("/rendezVous/:id", updateRendezVous);  // Modifier un rendez-vous
router.get("/rendezVous/:id", searchRendezVous);  // Recherche d'un rendez-vous

export default router;
