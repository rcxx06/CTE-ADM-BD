// server.js - Punto de entrada del backend
require('dotenv').config();
const app = require('./app/app');

// Rutas
app.use('/api/auth', require('./routes/modules/auth/auth'));
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/tecnicos', require('./routes/tecnicos'));
app.use('/api/equipos', require('./routes/equipos'));
app.use('/api/ordenes', require('./routes/ordenes'));
app.use('/api/repuestos', require('./routes/repuestos'));
app.use('/api/proveedores', require('./routes/proveedores'));
app.use('/api/facturas', require('./routes/facturas'));
app.use('/api/garantias', require('./routes/garantias'));

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
