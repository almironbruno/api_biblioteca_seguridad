const express = require('express');
const app = express();
const { auth } = require("express-oauth2-jwt-bearer");

app.use(express.json());

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
    audience: 'http://localhost:3000/libros',
    issuerBaseURL: 'https://dev-bc57am3bq18cxcm8.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });

//Importamos el Router de libros
const librosRouter= require('./routes/libros');

//Importamos el Middleware Error Handler
const errorHandler = require('./middlewares/errorHandler');

app.use('/libros', autenticacion, librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000')
});