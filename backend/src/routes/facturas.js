const express = require('express');
const router = express.Router();
const { getFacturas, createFactura } = require('../controllers/facturasController');

router.get('/', getFacturas);
router.post('/', createFactura);

module.exports = router;
