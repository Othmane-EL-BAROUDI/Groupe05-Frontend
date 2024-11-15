//Importer la base de donnee pour creer les modeles (modeles/docteur.js)
import database from "../configuration/connexion.js"

import { DataTypes } from "sequelize"

// Modele pour la table docteur
const docteur = database.define('docteur', {
    id_Docteur : { type: DataTypes.UUID, defaultValue:uuidv4, primaryKey: true, allowNull:false},
    nom_D: {type:DataTypes.STRING, allowNull:false, unique: false},
    prenom_D: {type:DataTypes.STRING, allowNull:false, unique: false},
    specialite_D: {type:DataTypes.STRING, allowNull:false, unique: false},
    num_Tel_D: {type:DataTypes.STRING, allowNull: false, unique:true, validate:{
            //valider le format du telephone avec une expression reguliere
            //au format (000) 000-0000 ou 000-000-0000 ou 000 000 0000 ou (000)000-0000
            args:[/^(?:\(\d{3}\)\s?|\d{3}[-\s]?)\d{3}[-\s]?\d{4}$/], 
            msg:"Le numero de telephone n'est pas valide, format accepter : 000 000 0000"
         }},
    couriel_D: {type: DataTypes.STRING, allowNull: false, unique: true, validate:{
        is: {
            //
            args: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/],
            msg: "L'adresse email n'est pas valide. format: exemple@exemple.com"
        }
    }},
    disponibilite_D:{type: DataTypes.STRING, allowNull: false, validate:{
        isIn:['Disponible', 'Occupé', 'Indisponible', 'En pause', 'Rendez-vous complet', 'En ligne', 'En retard']
    }}
})

