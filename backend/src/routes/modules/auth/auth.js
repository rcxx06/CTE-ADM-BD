const express = require('express');
const router = express.Router();

// Controladores
const { register, login } = require('../../../controllers/authController');

// Rutas
router.post('/register', register);
router.post('/login', login);

module.exports = router;
