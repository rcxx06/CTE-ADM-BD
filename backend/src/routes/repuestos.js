const express = require('express');
const router = express.Router();
const { getRepuestos, createRepuesto } = require('../controllers/repuestosController');

router.get('/', getRepuestos);
router.post('/', createRepuesto);

module.exports = router;
