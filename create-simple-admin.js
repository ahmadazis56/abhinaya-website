const bcrypt = require('bcryptjs');

// Simulate database with in-memory storage
const users = [];

async function createAdmin() {
  try {
    console.log('Creating admin user...');
    
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    const admin = {
      id: 1,
      email: 'admin@abhinaya.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
      createdAt: new Date()
    };
    
    users.push(admin);
    
    console.log('Admin user created successfully!');
    console.log('Email: admin@abhinaya.com');
    console.log('Password: admin123');
    console.log('Role: ADMIN');
    
    return admin;
  } catch (error) {
    console.error('Error creating admin:', error);
  }
}

createAdmin();
