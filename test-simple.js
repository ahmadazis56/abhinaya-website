// Test without auth
const testGallery = async () => {
  try {
    console.log('Testing gallery API without auth...');
    
    const response = await fetch('https://abhinaya-website.vercel.app/api/admin/gallery', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', data);
  } catch (error) {
    console.error('Test error:', error);
  }
};

testGallery();
