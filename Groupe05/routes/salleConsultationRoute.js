//import{Router} from "express"
import express from "express";
import { salleConsultationList, 
    createSalleConsultation, 
    deleteSalleConsultation, 
    updateSalleConsultation, 
    searchSalleConsultation, 
    searchSalleConsultationByNumberOrFloor
 } from "../controller/salleConsultationController.js";

const router = express.Router();

// Routes
router.get("/", salleConsultationList);  // Get all consultation rooms
router.post("/sal", createSalleConsultation);  // Create a new consultation room
router.delete("/salles/:id", deleteSalleConsultation);  // Delete a consultation room by ID
router.put("/salles/:id", updateSalleConsultation);  // Update a consultation room by ID
router.get("/salles/:id", searchSalleConsultation);  // Search for a consultation room by ID
router.get("/salles/search", searchSalleConsultationByNumberOrFloor);  // Search consultation rooms by number or floor

export default router;
