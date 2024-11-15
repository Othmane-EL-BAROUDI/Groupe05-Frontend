import express from "express";
import { docteurList, createDocteur, deleteDocteur, updateDocteur, searchDocteur, searchDocteurByNameOrSpeciality } from "./controllers/docteurController.js";

const router = express.Router();

router.get("/docteurs", docteurList);  // Get all doctors
router.post("/docteurs", createDocteur);  // Create a new doctor
router.delete("/docteurs/:id", deleteDocteur);  // Delete a doctor by ID
router.put("/docteurs/:id", updateDocteur);  // Update a doctor by ID
router.get("/docteurs/:id", searchDocteur);  // Search for a doctor by ID
router.get("/docteurs/search", searchDocteurByNameOrSpeciality);  // Search doctors by name or specialty

export default router;
