const express = require('express');
const router = express.Router();
const { getProveedores, createProveedor } = require('../controllers/proveedoresController');

router.get('/', getProveedores);
router.post('/', createProveedor);

module.exports = router;
