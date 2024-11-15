//Importer la base de donnee pour creer les modeles (modeles/rendezVous.js)
import database from "../configuration/connexion.js"

import { DataTypes } from "sequelize"

import patient from "/patient.js"
import administrateurC from "/administrateurC.js"
import salleConsultation from "/salleConsultation.js"
import docteur from "/docteur.js"
//import rendezVous from "/rendezVous.js"


//import{ docteur, patient, administrateurC, salleConsultation } from "./modeles"


const rendezVous = connexion.define('rendezVous', {
    id_Rendez: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,  // Pour une date sans l'heure
      allowNull: false,
    },
    heure: {
      type: DataTypes.TIME,  // Heure du rendez-vous
      allowNull: false,
    },
    motif: {
      type: DataTypes.STRING,
      allowNull: true,  // Le motif peut être optionnel
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'en attente', // Par défaut, le statut est 'en attente'
    },
    
    // Clés étrangères pour relier le rendez-vous aux entités concernées
    id_Docteur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: docteur,  // Référence à la table Doctor
        key: 'id_Docteur',
      },
    },
    id_Patient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: patient,  // Référence à la table Patient
        key: 'id_Patient',
      },
    },
    id_Admin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: administrateurC,  // Référence à la table Admin
        key: 'id_Admin',
      },
    },
    id_Salle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: salleConsultation,  // Référence à la table Room (Salle)
        key: 'id_Salle',
      },
    },
  })