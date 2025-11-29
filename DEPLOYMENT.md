# Deployment Guide

The user stories website is ready for deployment to multiple platforms. Choose the option that works best for you.

## Option 1: Vercel (Recommended)

**Why Vercel?**
- Free tier with generous limits
- Automatic deployments from GitHub
- Custom domain support
- Fast global CDN
- Zero configuration needed

**Steps:**

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import from GitHub: `Ovalsoft-Technologies/Renewed-Hope-Youth-Ambassadors-User-Stories`
4. Vercel will auto-detect the configuration from `vercel.json`
5. Click "Deploy"
6. Your site will be live at: `https://renewed-hope-user-stories.vercel.app`

**Custom Domain:**
- After deployment, go to Project Settings → Domains
- Add your custom domain (e.g., `stories.renewedhope2027.com`)
- Follow DNS configuration instructions

---

## Option 2: Netlify

**Why Netlify?**
- Simple drag-and-drop deployment
- Free tier with good limits
- Automatic HTTPS
- Form handling (if needed later)

**Steps:**

### Method A: GitHub Integration
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select the repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
5. Click "Deploy"

### Method B: Manual Deploy
1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag and drop the entire repository folder to the Netlify dashboard
3. Site will be live immediately

---

## Option 3: Cloudflare Pages

**Why Cloudflare Pages?**
- Unlimited bandwidth
- Excellent performance
- Free tier is very generous
- Built-in analytics

**Steps:**

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Sign in and click "Create a project"
3. Connect to GitHub and select the repository
4. Build settings:
   - Framework preset: None
   - Build command: (leave empty)
   - Build output directory: `/`
5. Click "Save and Deploy"

---

## Option 4: GitHub Pages (Already Configured)

The site is already live at:
https://ovalsoft-technologies.github.io/Renewed-Hope-Youth-Ambassadors-User-Stories/

To enable/verify:
1. Go to repository Settings → Pages
2. Source: Deploy from branch `master`
3. Folder: `/` (root)
4. Save

---

## Option 5: Render

**Why Render?**
- Simple setup
- Free tier available
- Good for static sites

**Steps:**

1. Go to [render.com](https://render.com) and sign in
2. Click "New" → "Static Site"
3. Connect to GitHub and select the repository
4. Settings:
   - Build command: (leave empty)
   - Publish directory: `.`
5. Click "Create Static Site"

---

## Option 6: Surge.sh (Command Line)

**Why Surge?**
- Fastest deployment (single command)
- Free custom domains
- No signup needed initially

**Steps:**

```bash
# Install Surge globally
npm install -g surge

# Navigate to the repository
cd /home/ubuntu/renewed-hope-youth-ambassadors-user-stories

# Deploy
surge . renewed-hope-user-stories.surge.sh
```

---

## Recommended Configuration

### Custom Domain Setup

Once deployed, you can add a custom domain like:
- `stories.renewedhope2027.com`
- `userstories.renewedhope.ng`
- `requirements.renewedhope.com.ng`

**DNS Configuration:**
1. Add a CNAME record pointing to your deployment platform:
   - Vercel: `cname.vercel-dns.com`
   - Netlify: `[your-site].netlify.app`
   - Cloudflare Pages: Automatic if domain is on Cloudflare
2. Wait for DNS propagation (5-30 minutes)
3. SSL certificate will be automatically provisioned

### Environment Variables

This is a static site with no backend, so no environment variables are needed.

### Performance Optimization

The site is already optimized:
- ✅ Minified CSS (can be further compressed)
- ✅ No external dependencies
- ✅ Vanilla JavaScript (no framework overhead)
- ✅ Responsive images (none used, all SVG)
- ✅ Dark mode with localStorage

**Optional Enhancements:**
1. Enable Brotli compression on your platform
2. Set cache headers for CSS/JS files
3. Add a CDN if deploying to Render/Surge

---

## Monitoring & Analytics

### Add Google Analytics

Add this to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Add Plausible Analytics (Privacy-Friendly)

Add this to `index.html` before `</head>`:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## Troubleshooting

### Site not loading
- Check DNS propagation: https://dnschecker.org
- Verify build logs on your platform
- Ensure `index.html` is in the root directory

### Dark mode not working
- Clear browser cache
- Check localStorage is enabled
- Verify CSS is loading correctly

### Search/filters not working
- Check browser console for JavaScript errors
- Ensure `js/data.js` and `js/app.js` are loading
- Verify paths are correct (relative paths used)

---

## Cost Estimate

All recommended platforms offer free tiers sufficient for this project:

| Platform | Free Tier | Custom Domain | Bandwidth |
|----------|-----------|---------------|-----------|
| Vercel | ✅ Yes | ✅ Yes | 100GB/month |
| Netlify | ✅ Yes | ✅ Yes | 100GB/month |
| Cloudflare Pages | ✅ Yes | ✅ Yes | Unlimited |
| GitHub Pages | ✅ Yes | ✅ Yes | 100GB/month |
| Render | ✅ Yes | ✅ Yes | 100GB/month |
| Surge | ✅ Yes | ✅ Yes | Unlimited |

**Recommendation:** Start with Vercel for the best developer experience and automatic GitHub deployments.

---

## Support

For deployment issues:
- **Vercel**: https://vercel.com/docs
- **Netlify**: https://docs.netlify.com
- **Cloudflare Pages**: https://developers.cloudflare.com/pages

For website issues:
- Open an issue on GitHub
- Contact Ovalsoft Technologies

---

**Last Updated:** November 29, 2025
