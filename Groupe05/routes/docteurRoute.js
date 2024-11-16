import express from "express";
//import {Router} from "express"


import { docteurList, createDocteur, deleteDocteur, updateDocteur, searchDocteur, searchDocteurByNameOrSpeciality } from "../controller/docteurController.js";

const router2 = express.Router();

router2.get("/docteurController", docteurList);  // Get all doctors
router2.post("/docteurController", createDocteur);  // Create a new doctor
router2.delete("/docteurController/:id", deleteDocteur);  // Delete a doctor by ID
router2.put("/docteurController/:id", updateDocteur);  // Update a doctor by ID
router2.get("/docteurController/:id", searchDocteur);  // Search for a doctor by ID
router2.get("/docteurController/search", searchDocteurByNameOrSpeciality);  // Search doctors by name or specialty

export default router2;



