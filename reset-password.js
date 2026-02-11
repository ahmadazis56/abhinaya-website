const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function resetAdminPassword() {
  try {
    console.log('Resetting admin password...');
    
    // Hash new password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash('abhinaya97u', saltRounds);
    
    // Update existing admin
    const admin = await prisma.admin.update({
      where: { email: 'abhinaya12' },
      data: { 
        password: hashedPassword,
        role: 'ADMIN'
      }
    });
    
    console.log('Admin password reset successfully:', {
      id: admin.id,
      email: admin.email,
      role: admin.role
    });
    
    console.log('Login credentials:');
    console.log('Username: abhinaya12');
    console.log('Password: abhinaya97u');
    
  } catch (error) {
    console.error('Error resetting admin password:', error);
  } finally {
    await prisma.$disconnect();
  }
}

resetAdminPassword();
