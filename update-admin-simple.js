const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function updateAdminCredentials() {
  try {
    console.log('Updating admin credentials...');
    
    // Hash new password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash('abhinaya97u', saltRounds);
    
    // Update existing admin or create new one
    const admin = await prisma.admin.upsert({
      where: { email: 'abhinaya12' },
      update: { 
        password: hashedPassword,
        role: 'ADMIN'
      },
      create: {
        email: 'abhinaya12',
        password: hashedPassword,
        role: 'ADMIN'
      }
    });
    
    console.log('Admin credentials updated successfully:', {
      id: admin.id,
      email: admin.email,
      role: admin.role
    });
    
    console.log('New login credentials:');
    console.log('Username: abhinaya12');
    console.log('Password: abhinaya97u');
    
  } catch (error) {
    console.error('Error updating admin credentials:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateAdminCredentials();
