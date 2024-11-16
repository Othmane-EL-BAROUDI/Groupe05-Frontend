//Importer la base de donnee pour creer les modeles (modeles/administrateurC.js)
import database from "../configuration/connexion.js"

import { DataTypes, UUIDV4 } from "sequelize"

// Modele pour la table administrateurC
const administrateurC = database.define('administrateurC', {
    id_Admin : { type: DataTypes.UUID, 
        primaryKey: true, allowNull:false},
    nom_A: {type:DataTypes.STRING, allowNull:false, unique: false},
    prenom_A: {type:DataTypes.STRING, allowNull:false, unique: false},
    num_Tel_A: {type:DataTypes.STRING, allowNull: false, unique:true, validate:{
            //valider le format du telephone avec une expression reguliere
            //au format (000) 000-0000 ou 000-000-0000 ou 000 000 0000 ou (000)000-0000
            args:[/^(?:\(\d{3}\)\s?|\d{3}[-\s]?)\d{3}[-\s]?\d{4}$/], 
            msg:"Le numero de telephone n'est pas valide, format accepter : 000 000 0000"
         }},
    couriel_A: {type: DataTypes.STRING, allowNull: false, unique: true, validate:{
        is: {
            //
            args: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/],
            msg: "L'adresse email n'est pas valide. format: exemple@exemple.com"
        }
    }},
    fonction_A: {type:DataTypes.STRING, allowNull:false, unique: false}
    
})

export default administrateurC