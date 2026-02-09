const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    console.log('Creating admin users...');

    const hashedPassword = await bcrypt.hash('admin123', 10);

    const superAdmin = await prisma.admin.upsert({
      where: { email: 'admin@abhinaya.com' },
      update: {},
      create: {
        email: 'admin@abhinaya.com',
        password: hashedPassword,
        role: 'SUPER_ADMIN'
      }
    });

    const admin = await prisma.admin.upsert({
      where: { email: 'manager@abhinaya.com' },
      update: {},
      create: {
        email: 'manager@abhinaya.com',
        password: hashedPassword,
        role: 'ADMIN'
      }
    });

    console.log('Admin users created successfully!');
    console.log('Super Admin: admin@abhinaya.com / admin123');
    console.log('Admin: manager@abhinaya.com / admin123');

  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
