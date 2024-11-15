//Importer la base de donnee pour creer les modeles (modeles/servMedDocteur.js)
import database from "../configuration/connexion.js"



import { DataTypes } from "sequelize"

import docteur from "./docteur.js"
import serviceMedical from "./serviceMedical.js"

// Modele pour la table serviceMedical
const servMedDocteur = database.define('servMedDocteur', {
    id_SerMD : { type: DataTypes.UUID, defaultValue:uuidv4, primaryKey: true, allowNull:false},
    id_Docteur: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: docteur,  // Référence à la table docteur
          key: 'id_Docteur',      // Clé primaire de la table docteur
        },
      },
      id_Service: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: serviceMedical, // Référence à la table service medicale
          key: 'id_Service',      // Clé primaire de la table service medicale
        },
      }   
})