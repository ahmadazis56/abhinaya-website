# Admin Dashboard Abhinaya

Sistem admin untuk mengatur website Abhinaya dengan fitur lengkap dan keamanan berlapis.

## 🚀 Fitur Admin

### 🔐 Authentication & Security
- **Login Admin**: Akses aman dengan JWT token
- **Role-Based Access Control**: 3 level hak akses (USER, ADMIN, SUPER_ADMIN)
- **Permission System**: Kontrol granular untuk setiap fitur
- **Activity Logging**: Tracking semua aktivitas admin

### 📊 Dashboard Analytics
- **Real-time Statistics**: Monitor visitor, page views, bounce rate
- **Traffic Sources**: Analisis sumber traffic
- **Top Pages**: Halaman paling populer
- **Daily Trends**: Grafik kunjungan harian

### 👥 Manajemen User
- **Create/Edit/Delete Users**: Kelola user sistem
- **Role Assignment**: Atur hak akses user
- **Permission Management**: Kontrol fitur yang bisa diakses

### 🖼️ Manajemen Gallery
- **Upload Images**: Upload foto dengan drag & drop
- **Categorization**: Organisasi gallery per kategori
- **Bulk Operations**: Edit/hapus multiple items
- **Image Optimization**: Auto-resize dan compression

### 🏢 Manajemen Klien & Partner
- **Client Management**: Kelola informasi klien
- **Partner Directory**: Daftar partner bisnis
- **Logo Management**: Upload dan manage logo

### 📝 Manajemen Konten
- **Hero Slides**: Edit slider homepage
- **Content Pages**: Manage static pages
- **SEO Settings**: Optimasi meta tags

## 🛠️ Cara Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Database Setup
```bash
npm run db:migrate
npm run db:generate
```

### 3. Create Admin User
```bash
node create-admin.js
```

### 4. Start Development Server
```bash
npm run dev
```

## 🔑 Login Credentials

Setelah menjalankan `create-admin.js`, gunakan credentials berikut:

**Super Admin:**
- Email: `admin@abhinaya.com`
- Password: `admin123`

**Admin:**
- Email: `manager@abhinaya.com`  
- Password: `admin123`

## 📱 Access Admin Dashboard

Buka browser dan navigasi ke:
```
http://localhost:3000/admin/login
```

## 🔐 Security Features

### JWT Authentication
- Token expiration: 24 hours
- Secure token storage di localStorage
- Auto-logout saat token expired

### Role-Based Access
- **SUPER_ADMIN**: Full access ke semua fitur
- **ADMIN**: Access ke manajemen konten, klien, partner, gallery
- **USER**: Limited access (read-only)

### Permission System
- `MANAGE_USERS`: Kelola user sistem
- `MANAGE_CONTENT`: Edit konten website
- `MANAGE_CLIENTS`: Kelola data klien
- `MANAGE_PARTNERS`: Kelola partner
- `MANAGE_GALLERY`: Kelola gallery
- `VIEW_ANALYTICS`: Lihat analytics
- `SYSTEM_SETTINGS`: Pengaturan sistem

### Activity Logging
Semua aktivitas admin di-log:
- Login/logout
- Create/update/delete operations
- IP address & user agent tracking
- Timestamp untuk setiap action

## 📁 Struktur File

```
app/
├── (auth)/admin/
│   └── login/
│       └── page.tsx          # Login page
├── admin/
│   ├── layout.tsx            # Admin layout dengan navigation
│   ├── dashboard/
│   │   └── page.tsx          # Main dashboard
│   ├── users/
│   │   └── page.tsx          # User management
│   ├── gallery/
│   │   └── page.tsx          # Gallery management
│   └── analytics/
│       └── page.tsx          # Analytics dashboard
└── api/
    ├── auth/admin/
    │   └── login/
    │       └── route.ts      # Login API
    └── admin/
        ├── dashboard/
        │   └── stats/
        │       └── route.ts  # Dashboard stats API
        ├── users/
        │   └── route.ts      # User management API
        ├── gallery/
        │   └── route.ts      # Gallery API
        ├── upload/
        │   └── route.ts      # File upload API
        └── analytics/
            └── route.ts      # Analytics API
```

## 🎨 UI/UX Features

- **Responsive Design**: Optimal di desktop & mobile
- **Modern UI**: Clean dan intuitive interface
- **Loading States**: Smooth loading indicators
- **Error Handling**: User-friendly error messages
- **Confirmation Dialogs**: Prevent accidental deletions
- **Toast Notifications**: Feedback untuk user actions

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/admin/login` - Admin login

### Dashboard
- `GET /api/admin/dashboard/stats` - Dashboard statistics

### Users
- `GET /api/admin/users` - List users
- `POST /api/admin/users` - Create user
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user

### Gallery
- `GET /api/admin/gallery` - List gallery items
- `POST /api/admin/gallery` - Create gallery item
- `PUT /api/admin/gallery/:id` - Update gallery item
- `DELETE /api/admin/gallery/:id` - Delete gallery item

### Upload
- `POST /api/admin/upload` - Upload file

### Analytics
- `GET /api/admin/analytics` - Get analytics data

## 🚀 Production Deployment

### Environment Variables
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="https://your-domain.com"
```

### Security Checklist
- [ ] Change default admin passwords
- [ ] Set strong JWT secret
- [ ] Enable HTTPS
- [ ] Set up database backups
- [ ] Configure CORS properly
- [ ] Set rate limiting
- [ ] Enable logging and monitoring

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

Jika ada masalah atau pertanyaan:
1. Cek documentation ini
2. Lihat error logs di browser console
3. Check server logs untuk API errors
4. Contact development team

---

**Note**: Admin dashboard ini dirancang untuk memberikan kontrol penuh atas website Abhinaya dengan tetap menjaga keamanan dan user experience yang baik.
