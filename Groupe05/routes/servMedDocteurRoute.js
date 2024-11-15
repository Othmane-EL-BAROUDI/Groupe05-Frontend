import express from "express";
import { 
    servMedDocteurList, 
    createServMedDocteur, 
    deleteServMedDocteur, 
    updateServMedDocteur, 
    searchServMedDocteur 
} from "./controllers/servMedDocteurController.js";

const router = express.Router();

// Routes
router.get("/servMed", servMedDocteurList);  // Liste de toutes les relations service médical pour docteurs
router.post("/servMed", createServMedDocteur);  // Créer une nouvelle relation service médical pour un docteur
router.delete("/servMed/:id", deleteServMedDocteur);  // Supprimer une relation service médical pour un docteur
router.put("/servMed/:id", updateServMedDocteur);  // Modifier une relation service médical pour un docteur
router.get("/servMed/:id", searchServMedDocteur);  // Rechercher une relation service médical pour un docteur

export default router;