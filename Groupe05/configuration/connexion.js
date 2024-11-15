//importer le module promise-msql dans le fichier 
import mysql from 'promise-mysql'

//Connexion a la base de donne
import { Sequelize } from 'sequelize'

//Importer les variable de connexion
import dotenv from 'dotenv'

//// Chargement des variables d'environnement depuis un fichier .env à l'aide de la bibliothèque dotenv
const ENV = dotenv.config().parsed

//Création d'une nouvelle instance de Sequelize pour se connecter à la base de données
const connexion = new Sequelize (ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD, {
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT,
    // port:ENV.DB_PORT
})


/* L'instance de `connexion` est exportée afin qu'elle puisse être utilisée ailleurs dans l'application.
 Cela permet d'établir une connexion à la base de données depuis d'autres fichiers ou modules.*/
export default connexion