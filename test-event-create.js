const { PrismaClient } = require('@prisma/client');
const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');

const adapter = new PrismaBetterSqlite3({ url: './dev.db' }, {});
const prisma = new PrismaClient({ adapter });

async function testCreateEvent() {
  try {
    const event = await prisma.event.create({
      data: {
        title: 'Test Event',
        description: 'Test Description'
      }
    });
    console.log('Created event:', event);
    
    const events = await prisma.event.findMany();
    console.log('All events:', events);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testCreateEvent();
