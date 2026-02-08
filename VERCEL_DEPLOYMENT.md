# Vercel Deployment Instructions

## 🚀 Quick Deployment Steps

### 1. Login to Vercel
```bash
vercel login
# Visit: https://vercel.com/oauth/device?user_code=FTWP-GZDJ
```

### 2. Import Repository
- Go to [Vercel Dashboard](https://vercel.com/dashboard)
- Click "Add New..." → "Project"
- Import GitHub repository: `ahmadazis56/abhinaya-website`

### 3. Configure Project
- Framework: **Next.js** (auto-detected)
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### 4. Environment Variables
Add these in Vercel Project Settings:
```
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=lIOFWTo5z0rTV8ufZqNszkiuhQBY8sXFbsKo9gZCluo=
NODE_ENV=production
```

### 5. Deploy
- Click "Deploy"
- Wait for build completion
- Get your production URL

## 🔄 Auto-Deployment Setup

After first deployment:
1. Go to Project → Settings → Git
2. Enable "Auto-Deploy" for main branch
3. Every push to main = automatic deployment

## 🌐 Custom Domain (Optional)

1. Go to Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## 📊 Monitoring

- **Build Logs**: Vercel Dashboard → Project → Logs
- **Analytics**: Vercel Analytics (enable in settings)
- **Performance**: Lighthouse integration

## 🛠️ Troubleshooting

### Build Errors
- Check build logs in Vercel Dashboard
- Verify all dependencies in package.json
- Ensure environment variables are set

### Runtime Errors
- Check function logs
- Verify API routes are working
- Check database connectivity

### Performance Issues
- Enable Vercel Analytics
- Check Core Web Vitals
- Optimize images and assets

---

**Production URL**: (Will be provided after first deployment)
**Repository**: https://github.com/ahmadazis56/abhinaya-website
