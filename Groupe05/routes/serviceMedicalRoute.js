import express from 'express';

import {
    getAllServices,
    createServiceMedical,
    deleteServiceMedical,
    updateServiceMedical,
    searchServices
} from '../controller/serviceMedicalController.js'

const router = express.Router();

// 1. Route pour lister tous les services médicaux
router.get('/servAll', getAllServices);

// 2. Route pour créer un nouveau service médical
router.post('/servCreate', createServiceMedical);

// 3. Route pour supprimer un service médical par son ID
router.delete('/servDelete', deleteServiceMedical);

// 4. Route pour modifier un service médical par son ID
router.put('/servUpdate', updateServiceMedical);

// 5. Route pour rechercher des services médicaux par nom
router.get('/servSearch', searchServices);

// Exportation des routes
export default router;