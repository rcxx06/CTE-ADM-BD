const getOrdenes = (req, res) => res.json({ ok: true, message: 'Ruta ordenes funcionando' });
const createOrden = (req, res) => res.json({ ok: true, message: 'Orden creada' });

module.exports = { getOrdenes, createOrden };
