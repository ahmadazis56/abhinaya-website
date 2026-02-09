# 🚀 XAMPP Local Testing Setup

## 📁 Folder yang Harus Dipindahkan

**Pindahkan folder ini ke `C:/xampp/htdocs/`:**
```
d:\abhinaya\php-version\
```

**Hasilnya:**
```
C:/xampp/htdocs/php-version/
```

## 🔧 XAMPP Setup Instructions

### 1. Copy Folder
```bash
# Copy folder php-version ke htdocs
Copy: d:\abhinaya\php-version\
To:   C:\xampp\htdocs\php-version\
```

### 2. Start XAMPP Services
1. Buka XAMPP Control Panel
2. Start **Apache** 
3. Start **MySQL**
4. Pastikan kedua service running (hijau)

### 3. Database Setup via phpMyAdmin
1. Buka browser: `http://localhost/phpmyadmin`
2. Buat database baru:
   - Nama: `abhinaya_db`
   - Collation: `utf8mb4_unicode_ci`
3. Import SQL schema:
   - Klik database `abhinaya_db`
   - Tab "Import"
   - Pilih file: `C:/xampp/htdocs/php-version/database/schema.sql`
   - Click "Go"

### 4. Update Database Config
**Option A: Gunakan config XAMPP**
```bash
# Rename file
C:/xampp/htdocs/php-version/backend/config/database-xampp.php 
→ database.php
```

**Option B: Edit manual**
Edit `C:/xampp/htdocs/php-version/backend/config/database.php`:
```php
private $host = 'localhost';
private $db_name = 'abhinaya_db';
private $username = 'root';
private $password = '';
```

### 5. Set Permissions (Windows)
```bash
# Buka Command Prompt as Administrator
cd C:/xampp/htdocs/php-version
mkdir uploads\events
mkdir uploads\gallery  
mkdir uploads\flyers
```

### 6. Test Setup
Buka browser:
- **Setup Test**: `http://localhost/php-version/deploy-shared-hosting.php`
- **Frontend**: `http://localhost/php-version/frontend/`
- **Admin Panel**: `http://localhost/php-version/admin/`

## 🔐 Default Login
- **Username**: `admin`
- **Password**: `admin123`

## 📁 Struktur Folder di htdocs
```
C:/xampp/htdocs/php-version/
├── frontend/                 # Static website
├── admin/                    # Admin panel
├── api/                      # API endpoints
├── backend/
│   └── config/
│       └── database.php      # Database config
├── uploads/                  # File uploads
├── database/
│   └── schema.sql           # SQL schema
└── deploy-shared-hosting.php # Setup script
```

## 🧪 Testing URLs

### Frontend
- Home: `http://localhost/php-version/frontend/`
- About: `http://localhost/php-version/frontend/about.html`
- Gallery: `http://localhost/php-version/frontend/gallery.html`

### Admin Panel  
- Login: `http://localhost/php-version/admin/login.php`
- Dashboard: `http://localhost/php-version/admin/dashboard.php`
- Events: `http://localhost/php-version/admin/manage-events.php`

### API Endpoints
- Events: `http://localhost/php-version/api/events.php`
- Gallery: `http://localhost/php-version/api/gallery.php`
- Flyers: `http://localhost/php-version/api/flyers.php`

## 🔧 Troubleshooting XAMPP

### Port 80 Already in Use
```bash
# Stop Skype atau aplikasi lain yang pakai port 80
# Atau change Apache port:
# Edit C:/xampp/apache/conf/httpd.conf
# Listen 80 → Listen 8080
```

### Database Connection Failed
```bash
# Check MySQL service running
# Verify database name: abhinaya_db
# Check username: root (no password)
```

### Permission Denied
```bash
# Right-click folder → Properties → Security
# Add "Everyone" with Full Control
# Atau run Command Prompt as Administrator
```

### 403 Forbidden
```bash
# Check .htaccess file
# Ensure Apache mod_rewrite enabled
# Restart Apache service
```

## 🎯 Quick Start Commands

### 1. Copy & Setup
```cmd
copy "d:\abhinaya\php-version" "C:\xampp\htdocs\"
cd C:\xampp\htdocs\php-version
mkdir uploads\events uploads\gallery uploads\flyers
```

### 2. Database Import
```sql
-- Di phpMyAdmin:
CREATE DATABASE abhinaya_db;
USE abhinaya_db;
-- Import schema.sql
```

### 3. Test
```cmd
start http://localhost/php-version/deploy-shared-hosting.php
start http://localhost/php-version/admin/login.php
```

## 🎉 Success Indicators
✅ Apache & MySQL running  
✅ Database `abhinaya_db` created  
✅ Schema imported successfully  
✅ Setup script shows all green  
✅ Admin panel accessible  
✅ Can create events/gallery items  

---

**Selamat testing!** 🚀
