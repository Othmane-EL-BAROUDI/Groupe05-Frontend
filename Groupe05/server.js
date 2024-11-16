import'dotenv/config';

import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser'; 
import dotenv from 'dotenv'


//Pour l'importation la variable import'dotenv/config' doit etre toujour en premier

//creation du serveur
const app = express();

// importer la connexion a la base de donnees
import database from "../Groupe05/configuration/connexion.js"


import administrateurCRoute from "./routes/administrateurCRoute.js"
import docteurRoute from "./routes/docteurRoute.js"
import patientRoute from "./routes/patientRoute.js"
import rendezVousRoute from "./routes/rendezVousRoute.js"
import salleConsultation from "./routes/salleConsultationRoute.js"
import servMedDocteur from "./routes/servMedDocteurRoute.js"



//Ajouter des middlewares a noter que (app.use(json)) doit etre en dernier
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(json())
// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }))

//Generation des tables 

app.use('/api/', administrateurCRoute)
app.use('/api/', docteurRoute)
app.use('/api/', patientRoute)
app.use('/api/', rendezVousRoute)
app.use('/api/', salleConsultation)

app.use('/api/', servMedDocteur)
//app.use('/api/departments', departmentRoute)

//app.use('/api/login', authRoute)


//lancer le serveur
dotenv.config()
/*const PORT = process.env.PORT || 3000;  // Utilisation de process.env.PORT avec une valeur par défaut
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur le port ${PORT}`);
  });*/
//const PORT = ENV.PORT

//app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`)) 

app.listen(process.env.PORT);
console.info('serveur demarer:')
console.info('http://localhost:' + process.env.PORT)

