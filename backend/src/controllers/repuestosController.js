const getRepuestos = (req, res) => res.json({ ok: true, message: 'Ruta repuestos funcionando' });
const createRepuesto = (req, res) => res.json({ ok: true, message: 'Repuesto creado' });

module.exports = { getRepuestos, createRepuesto };
