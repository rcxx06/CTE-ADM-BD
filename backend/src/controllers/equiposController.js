const getEquipos = (req, res) => res.json({ ok: true, message: 'Ruta equipos funcionando' });
const createEquipo = (req, res) => res.json({ ok: true, message: 'Equipo creado' });

module.exports = { getEquipos, createEquipo };
