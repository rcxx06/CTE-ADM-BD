const getProveedores = (req, res) => res.json({ ok: true, message: 'Ruta proveedores funcionando' });
const createProveedor = (req, res) => res.json({ ok: true, message: 'Proveedor creado' });

module.exports = { getProveedores, createProveedor };
