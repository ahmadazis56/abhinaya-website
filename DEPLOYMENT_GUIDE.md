# Panduan Deployment Otomatis Abhinaya Website

## 🚀 Setup Deployment Otomatis

### 1. Push ke GitHub
Pastikan kode sudah di-push ke repository GitHub:

```bash
git remote add origin https://github.com/username/abhinaya.git
git push -u origin main
```

### 2. Deploy ke Vercel

#### Cara 1: Via Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy project
vercel

# Follow prompts untuk setup project
```

#### Cara 2: Via Dashboard Vercel
1. Buka [vercel.com](https://vercel.com)
2. Sign in dengan GitHub
3. Click "Add New..." → "Project"
4. Import repository GitHub Anda
5. Vercel akan otomatis detect Next.js configuration
6. Click "Deploy"

### 3. Environment Variables
Set environment variables di Vercel Dashboard:

```
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-secret-key
DATABASE_URL=your-database-url (jika menggunakan external DB)
```

### 4. Auto-Setup
Setelah deployment pertama, setiap push ke branch `main` akan otomatis:
- Build aplikasi
- Deploy ke production
- Update website langsung

## 🔧 Konfigurasi Tambahan

### Custom Domain
1. Di Vercel Dashboard → Project → Settings → Domains
2. Add custom domain Anda
3. Update DNS records sesuai instruksi Vercel

### Environment Variables untuk Production
```bash
# Generate NEXTAUTH_SECRET
openssl rand -base64 32
```

## 📱 Workflow Auto-Deployment

Setiap kali Anda melakukan perubahan kode:

```bash
# 1. Add changes
git add .

# 2. Commit changes
git commit -m "Update feature X"

# 3. Push to main branch
git push origin main
```

**Result:** Website otomatis terupdate dalam 1-3 menit!

## 🛠️ Troubleshooting

### Build Error
- Check `package.json` scripts
- Verify all dependencies installed
- Check environment variables

### Database Issues
- Pastikan Prisma migrations sudah di-run
- Check database connection string
- Verify database accessible dari Vercel

### Domain Issues
- DNS propagation memakan waktu 24-48 jam
- Check DNS records dengan `nslookup`
- Pastikan SSL certificate aktif

## 📊 Monitoring

### Vercel Analytics
- Real-time performance metrics
- Error tracking
- Visitor analytics

### Uptime Monitoring
- Setup uptime monitoring
- Alert untuk downtime
- Performance tracking

## 🔄 Backup & Recovery

### Database Backup
```bash
# Backup SQLite database
cp prisma/dev.db backup/dev-$(date +%Y%m%d).db
```

### Code Backup
- GitHub menyimpan semua versi kode
- Tags untuk release versions
- Branches untuk development

---

**Support:** Jika ada masalah, check Vercel logs dan GitHub Actions logs untuk detail error.
