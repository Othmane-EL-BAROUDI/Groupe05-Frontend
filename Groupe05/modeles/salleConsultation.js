//Importer la base de donnee pour creer les modeles (modeles/salleConsultation.js)
import database from "../configuration/connexion.js"

import { DataTypes } from "sequelize"

// Modele pour la table salleConsultation
const salleConsultation = database.define('salleConsultation', {
    id_Salle : { type: DataTypes.UUID, defaultValue:uuidv4, primaryKey: true, allowNull:false},
    numero_S: {type: DataTypes.STRING, allowNull: false, unique: true,  
            validate: {
            notEmpty: true
        }},
    etage_S: {type: DataTypes.STRING, allowNull: false, unique: true,  
        validate: {
        notEmpty: true
    }},
    capacite_S: {type: DataTypes.INTEGER, allowNull: false,  
           validate: {
            isInt: true, 
            min: 1
        }},
    dispon_S: {type:DataTypes.STRING, allowNull:false, unique: false}
    
})