import express from "express";
//import {Router} from "express"

import { 
    patientList,
    createPatient,
    deletePatient,
    updatePatient,
    searchPatient,
    searchPatientByNameOrEmail
     
} from "../controller/patientController.js";

const router = express.Router();

router.get("/", patientList);  // Get all doctors
router.post("/patient", createPatient);  // Create a new doctor
router.delete("/patient/:id", deletePatient);  // Delete a doctor by ID
router.put("/patient/:id", updatePatient);  // Update a doctor by ID
router.get("/patient/:id", searchPatient);  // Search for a doctor by ID
router.get("/patient/search", searchPatientByNameOrEmail);  // Search doctors by name or specialty

export default router;
