//Importer la base de donnee pour creer les modeles (modeles/administrateurC.js)
import database from "../configuration/connexion.js"

import { DataTypes, UUIDV4 } from "sequelize"

// Modele pour la table administrateurC
const administrateurC = database.define('administrateurC', {
   /* id_Admin: {
        type: DataTypes.CHAR(36),
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },*/
    nom_A: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    prenom_A: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    num_Tel_A: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isValidPhoneNumber(value) {
                // Validation personnalisée pour le numéro de téléphone
                const regex = /^(?:\(\d{3}\)\s?|\d{3}[-\s]?)\d{3}[-\s]?\d{4}$/;
                if (!regex.test(value)) {
                    throw new Error("Le numéro de téléphone n'est pas valide, format accepté : (000) 000-0000 ou 000-000-0000");
                }
            }
        }
    },
    couriel_A: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isValidEmail(value) {
                // Validation personnalisée pour l'email
                const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!regex.test(value)) {
                    throw new Error("L'adresse email n'est pas valide. Format: exemple@exemple.com");
                }
            }
        }
    },
    fonction_A: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    }
});


export default administrateurC