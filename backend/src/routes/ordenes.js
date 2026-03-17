const express = require('express');
const router = express.Router();
const { getOrdenes, createOrden } = require('../controllers/ordenesController');

router.get('/', getOrdenes);
router.post('/', createOrden);

module.exports = router;
