const getTecnicos = (req, res) => res.json({ ok: true, message: 'Ruta tecnicos funcionando' });
const createTecnico = (req, res) => res.json({ ok: true, message: 'Tecnico creado' });

module.exports = { getTecnicos, createTecnico };
