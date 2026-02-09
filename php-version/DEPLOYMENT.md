# PHP Version Deployment Guide

## 📋 Requirements
- Share Hosting dengan PHP 7.4+
- MySQL/MariaDB database
- File upload permissions

## 🚀 Deployment Steps

### 1. Database Setup
1. Buat database di cPanel (MySQL/MariaDB)
2. Import `database/schema.sql`
3. Update database credentials di `backend/config/database.php`

### 2. File Upload
1. Upload seluruh folder `php-version` ke hosting
2. Set permissions:
   - `uploads/` folder: 755
   - `api/` folder: 755
   - `admin/` folder: 755

### 3. Configuration
1. Update `backend/config/database.php`:
   ```php
   private $host = 'localhost';
   private $db_name = 'your_database_name';
   private $username = 'your_username';
   private $password = 'your_password';
   ```

### 4. Access
- **Frontend**: `https://yourdomain.com/frontend/`
- **Admin Panel**: `https://yourdomain.com/admin/`
- **API Endpoints**: `https://yourdomain.com/api/`

## 🔧 Default Login
- Username: `admin`
- Password: `admin123`

## 📁 Folder Structure
```
public_html/
├── php-version/
    ├── frontend/          # Static website
    ├── admin/             # Admin panel
    ├── api/               # API endpoints
    ├── backend/           # Database config
    ├── uploads/           # File uploads
    └── database/          # SQL schema
```

## ⚠️ Important Notes
- Pastikan PHP extensions: PDO, MySQL, File Upload
- Set max upload size di php.ini
- Enable CORS untuk API calls
- Regular backup database

## 🔍 Testing
1. Test admin login
2. Test create/read/delete operations
3. Test file uploads
4. Test frontend API integration
