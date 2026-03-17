const express = require('express');
const router = express.Router();
const { getTecnicos, createTecnico } = require('../controllers/tecnicosController');

router.get('/', getTecnicos);
router.post('/', createTecnico);

module.exports = router;
