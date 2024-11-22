//import'dotenv/config';

import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser'; 
import dotenv from 'dotenv'
import database from '../Groupe05/configuration/connexion.js';

//const ENV = dotenv.config().parsed
dotenv.config()
//Pour l'importation la variable import'dotenv/config' doit etre toujour en premier

//creation du serveur
const app = express();

// importer la connexion a la base de donnees
//import database from "../Groupe05/configuration/connexion.js"


//Ajouter des middlewares a noter que (app.use(json)) doit etre en dernier
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(json())
// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }))


//routes

import administrateurCRoute from "../Groupe05/routes/administrateurCRoute.js"
import docteurRoute from "../Groupe05/routes/docteurRoute.js"
import patientRoute from "../Groupe05/routes/patientRoute.js"
import rendezVousRoute from "../Groupe05/routes/rendezVousRoute.js"
import salleConsultation from "../Groupe05/routes/salleConsultationRoute.js"
//import servMedDocteur from "./routes/servMedDocteurRoute.js"
import serviceMedical from '../Groupe05/routes/serviceMedicalRoute.js'








//Generation des tables 

app.use('/administrateurs', administrateurCRoute)
app.use('/api/docteurs', docteurRoute)
app.use('/api/pat', patientRoute)
app.use('/api/rend', rendezVousRoute)
app.use('/api/salle', salleConsultation)

//app.use('/api/', servMedDocteur)

app.use('/api/servMed', serviceMedical)

//app.use('/api/departments', departmentRoute)

//app.use('/api/login', authRoute)


database.sync({ alter: true })

//lancer le serveur



/*const PORT = process.env.PORT || 3000;  // Utilisation de process.env.PORT avec une valeur par défaut
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur le port ${PORT}`);
  });*/
//const PORT = ENV.PORT

//app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`)) 

app.listen(process.env.PORT);
console.info('serveur demarer:')
console.info('http://localhost:' + process.env.PORT)

