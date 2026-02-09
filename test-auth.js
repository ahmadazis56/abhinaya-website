// Test authentication
const testLogin = async () => {
  try {
    const response = await fetch('https://abhinaya-website.vercel.app/api/auth/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'admin@abhinaya.com',
        password: 'admin123'
      })
    });

    const data = await response.json();
    console.log('Response status:', response.status);
    console.log('Response data:', data);

    if (data.token) {
      console.log('✅ Login successful! Token:', data.token.substring(0, 20) + '...');
      
      // Test API with token
      const testResponse = await fetch('https://abhinaya-website.vercel.app/api/admin/gallery', {
        headers: {
          'Authorization': `Bearer ${data.token}`,
          'Content-Type': 'application/json',
        }
      });
      
      console.log('Gallery API status:', testResponse.status);
      const galleryData = await testResponse.json();
      console.log('Gallery data:', galleryData);
    } else {
      console.log('❌ Login failed:', data.error);
    }
  } catch (error) {
    console.error('Test error:', error);
  }
};

testLogin();
