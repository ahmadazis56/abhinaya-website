export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          🎉 Website Abhinaya Berhasil!
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Halaman test ini berhasil diakses
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Informasi Website:</h2>
          <ul className="text-left space-y-2">
            <li>✅ Next.js Berhasil</li>
            <li>✅ Vercel Deployment Berhasil</li>
            <li>✅ Halaman Public Bisa Diakses</li>
            <li>✅ Tidak Perlu Login</li>
          </ul>
        </div>
        <div className="mt-8">
          <a 
            href="/" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kembali ke Halaman Utama
          </a>
        </div>
      </div>
    </div>
  );
}
