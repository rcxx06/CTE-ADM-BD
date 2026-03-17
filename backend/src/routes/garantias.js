const express = require('express');
const router = express.Router();
const { getGarantias, createGarantia } = require('../controllers/garantiasController');

router.get('/', getGarantias);
router.post('/', createGarantia);

module.exports = router;
