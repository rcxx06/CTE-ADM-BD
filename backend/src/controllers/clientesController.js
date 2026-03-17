// Controlador para Clientes
const prisma = require('../config/database');

const getClientes = async (req, res) => {
	try {
		const clientes = await prisma.cliente.findMany();
		res.json({ ok: true, data: clientes });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al obtener clientes' });
	}
};

const createCliente = async (req, res) => {
	try {
		const data = req.body;
		const cliente = await prisma.cliente.create({ data });
		res.status(201).json({ ok: true, data: cliente });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error al crear cliente' });
	}
};

module.exports = { getClientes, createCliente };