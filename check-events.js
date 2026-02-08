require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');

const adapter = new PrismaBetterSqlite3({ url: './dev.db' }, {});

const prisma = new PrismaClient({
  adapter: adapter
});

async function checkEvents() {
  try {
    const events = await prisma.event.findMany();
    console.log('Events in database:', events.length);
    console.log(JSON.stringify(events, null, 2));
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkEvents();
