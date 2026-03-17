const getGarantias = (req, res) => res.json({ ok: true, message: 'Ruta garantias funcionando' });
const createGarantia = (req, res) => res.json({ ok: true, message: 'Garantia creada' });

module.exports = { getGarantias, createGarantia };
