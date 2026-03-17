const express = require('express');
const router = express.Router();
const { getClientes, createCliente } = require('../controllers/clientesController');

router.get('/', getClientes);
router.post('/', createCliente);

module.exports = router;