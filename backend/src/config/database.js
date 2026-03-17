require('dotenv').config();

const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');
const { PrismaClient } = require('../../generated/prisma/client');

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./dev.db',
});

let prisma;

if (!global.prisma) {
  global.prisma = new PrismaClient({ adapter });
}

prisma = global.prisma;

module.exports = prisma;