const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../config/database');

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';

// Registro de usuario
const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'username and password required' });

    const existing = await prisma.user.findUnique({ where: { username } });
    if (existing) return res.status(409).json({ error: 'Usuario ya existe' });

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({ data: { username, password: hashedPassword } });
    res.status(201).json({ message: 'Usuario registrado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en registro' });
  }
};

// Login de usuario
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'username and password required' });

    const user = await prisma.user.findUnique({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en login' });
  }
};

// Ruta de prueba
const getAuth = (req, res) => res.json({ ok: true, message: 'Ruta auth funcionando' });
const createAuth = (req, res) => res.json({ ok: true, message: 'Auth creado' });

module.exports = { register, login, getAuth, createAuth };
