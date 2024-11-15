//Importer la base de donnee pour creer les modeles (modeles/patient.js)
import database from "../configuration/connexion.js"

import { DataTypes } from "sequelize"

// Modele pour la table patient
const patient = database.define('patient', {
    id_Patient : { type: DataTypes.UUID, defaultValue:uuidv4, primaryKey: true, allowNull:false},
    nom_P: {type:DataTypes.STRING, allowNull:false, unique: false},
    prenom_P: {type:DataTypes.STRING, allowNull:false, unique: false},
    date_Nais_P: { type: DataTypes.DATEONLY,  // Utilisation de DATEONLY pour une date sans l'heure
    allowNull: false,  // La date de naissance est obligatoire
    validate: {
      isDate: true,  // Validation pour s'assurer que c'est bien une date
      isBefore: {
        args: new Date().toISOString(),  // Validation pour que la date de naissance soit avant aujourd'hui
        msg: "La date de naissance ne peut pas être dans le futur"
      }
    }
    },
    adresse_P: {type:DataTypes.STRING, allowNull:false},
    num_Tel_P: {type:DataTypes.STRING, allowNull: false, unique:true, validate:{
            //valider le format du telephone avec une expression reguliere
            //au format (000) 000-0000 ou 000-000-0000 ou 000 000 0000 ou (000)000-0000
            args:[/^(?:\(\d{3}\)\s?|\d{3}[-\s]?)\d{3}[-\s]?\d{4}$/], 
            msg:"Le numero de telephone n'est pas valide, format accepter : 000 000 0000"
         }},
    couriel_P: {type: DataTypes.STRING, allowNull: false, unique: true, validate:{
        is: {
            //
            args: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/],
            msg: "L'adresse email n'est pas valide. format: exemple@exemple.com"
        }
    }},
    historique_P: {type:DataTypes.STRING, allowNull:false, unique: false}
    
})

