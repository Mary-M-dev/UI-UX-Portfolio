# Deployment Guide - Mary Mwirigi Portfolio

## Quick Start

Your portfolio is ready to deploy! Here are the fastest ways to get it live.

## Option 1: Deploy to Netlify (Recommended)

### Prerequisites
- GitHub account (optional but recommended)
- Netlify account (free at netlify.com)

### Method A: Using GitHub (Easiest)

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/mary-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your repository
   - Build settings will auto-fill:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Your site is live!** Netlify will give you a URL like `https://your-site-name.netlify.app`

### Method B: Using Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

3. **Follow the prompts** to authorize and deploy

### Method C: Drag & Drop

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Go to [netlify.com](https://netlify.com)**
   - Drag and drop the `dist` folder onto the page
   - Your site is instantly live!

## Option 2: Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live

## Option 3: Deploy to GitHub Pages

1. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/mary-portfolio/', // Replace with your repo name
     // ... rest of config
   })
   ```

2. **Build and deploy**
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "GitHub Pages"
   - Select "Deploy from a branch"
   - Choose `main` branch and `/dist` folder
   - Save

## Post-Deployment

### Custom Domain

**For Netlify:**
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain
4. Update DNS records (Netlify will provide instructions)

**For Vercel:**
1. Go to Settings → Domains
2. Add your custom domain
3. Update DNS records

### Environment Variables

No environment variables needed for this portfolio. If you add backend features later:

1. Create `.env.local` file (never commit this)
2. Add variables: `VITE_API_URL=https://api.example.com`
3. Access in code: `import.meta.env.VITE_API_URL`

### Analytics

**Add Google Analytics:**

1. Get your tracking ID from Google Analytics
2. Add to `index.html` before closing `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>
   ```

## Monitoring & Maintenance

### Check Build Status
- **Netlify**: Dashboard shows build logs and status
- **Vercel**: Dashboard shows deployment history

### Update Content
1. Edit files locally
2. Commit and push to GitHub
3. Deployment happens automatically (if connected to GitHub)

### Performance
- Check Lighthouse scores in browser DevTools
- Monitor Core Web Vitals in Google Search Console
- Use Netlify Analytics for traffic insights

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Site Shows Old Content
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Check deployment logs for errors

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check domain registrar settings

## Next Steps

1. **Add real content**
   - Replace emoji placeholders with actual images
   - Update project descriptions with real case studies
   - Add actual social media links

2. **Optimize images**
   - Use WebP format for better compression
   - Compress images before uploading
   - Use responsive image sizes

3. **Add contact form backend**
   - Use Netlify Forms (easiest)
   - Or connect to Formspree, EmailJS, etc.

4. **Set up email notifications**
   - Get notified when someone submits the contact form
   - Configure in Netlify Forms settings

## Support

- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev

---

**Your portfolio is production-ready. Deploy with confidence!** 🚀
