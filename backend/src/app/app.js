// app.js - Configuración principal de la app Express
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

module.exports = app;
