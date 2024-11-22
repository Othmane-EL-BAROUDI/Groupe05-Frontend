import express from "express";
//import {Router} from "express"


import { docteurList, createDocteur, deleteDocteur, updateDocteur, searchDocteur, searchDocteurByNameOrSpeciality } from "../controller/docteurController.js";

const router2 = express.Router();

router2.get("/", docteurList);  // Get all doctors
router2.post("/add", createDocteur);  // Create a new doctor
router2.delete("/doctDelete", deleteDocteur);  // Delete a doctor by ID
router2.put("/doctUpdate", updateDocteur);  // Update a doctor by ID
router2.get("/doctSearchID", searchDocteur);  // Search for a doctor by ID
router2.get("/doctSearchSp", searchDocteurByNameOrSpeciality);  // Search doctors by name or specialty

export default router2;



