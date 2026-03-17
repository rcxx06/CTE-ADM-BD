const getFacturas = (req, res) => res.json({ ok: true, message: 'Ruta facturas funcionando' });
const createFactura = (req, res) => res.json({ ok: true, message: 'Factura creada' });

module.exports = { getFacturas, createFactura };
