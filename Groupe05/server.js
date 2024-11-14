import'dotenv/config';

import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
//Pour l'importation la variable import'dotenv/config' doit etre toujour en premier

//creation du serveur
const app = express();


//Ajouter des middlewares a noter que (app.use(json)) doit etre en dernier
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(json())

//lancer le serveur
app.listen(process.env.PORT);
console.info('serveur demarer:')
console.info('http://localhost:' + process.env.PORT)