# Automated Screenshots for Static Portfolio

This guide covers two practical approaches for automatically capturing real-time screenshots of your projects, perfect for static hosting like GitHub Pages.

## 🎯 Why Automated Screenshots?

- ✅ **Always Fresh**: Screenshots update automatically when projects change
- ✅ **No Manual Work**: Set it and forget it
- ✅ **Professional**: Shows your projects in their current state
- ✅ **Static-Friendly**: Works with GitHub Pages and other static hosts
- ✅ **Cost-Effective**: Uses free CI/CD or serverless functions

## 🚀 Option 1: GitHub Actions (Recommended)

**Best for**: GitHub Pages hosting, automatic updates, zero cost

### How It Works

1. **Triggers**: Runs on push to main, weekly schedule, or manual trigger
2. **Process**: Uses Playwright in GitHub's CI environment
3. **Output**: Commits screenshots directly to your repo
4. **Deployment**: Automatically deploys with your next push

### Setup

1. **The workflow is already created** in `.github/workflows/screenshot.yml`

2. **Enable GitHub Actions**:
   - Go to your repo → Settings → Actions → General
   - Enable "Allow all actions and reusable workflows"

3. **Test the workflow**:
   ```bash
   # Push to trigger the workflow
   git add .
   git commit -m "Add automated screenshot workflow"
   git push
   ```

4. **Check results**:
   - Go to Actions tab in your repo
   - Look for "Auto Screenshot Projects" workflow
   - Screenshots will be saved to `src/assets/`

### Configuration

Edit `.github/workflows/screenshot.yml` to customize:

```yaml
# Add/remove projects
const projects = [
  {
    name: 'your-project',
    url: 'https://your-project-url.com',
    filename: 'project-your-project.jpg'
  }
];

# Change schedule (cron format)
schedule:
  - cron: '0 2 * * 0' # Every Sunday at 2 AM UTC
```

### Benefits

- ✅ **Completely Free**: Uses GitHub's free CI minutes
- ✅ **Automatic**: Runs on schedule and code changes
- ✅ **Integrated**: Works seamlessly with GitHub Pages
- ✅ **Reliable**: GitHub's infrastructure is very stable
- ✅ **Versioned**: Screenshots are tracked in git history

## 🌐 Option 2: Vercel Serverless Function

**Best for**: On-demand updates, multiple hosting platforms, webhook integration

### How It Works

1. **Deploy**: Serverless function on Vercel with Playwright
2. **Trigger**: Call via HTTP POST with project URL
3. **Process**: Captures screenshot and returns base64 image
4. **Integration**: Use with Zapier, cron jobs, or manual calls

### Setup

1. **Deploy the serverless function**:
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy the function
   vercel --prod
   ```

2. **Update the script** with your Vercel URL:
   ```bash
   # Edit scripts/update-screenshots.js
   const SCREENSHOT_API_URL = 'https://your-app.vercel.app/api/screenshot';
   ```

3. **Test the function**:
   ```bash
   npm run screenshots:update
   ```

### Usage Examples

**Manual Update**:
```bash
npm run screenshots:manual
```

**Webhook Integration** (Zapier):
```
POST https://your-app.vercel.app/api/screenshot
{
  "url": "https://your-project.com",
  "projectName": "My Project"
}
```

**Cron Job**:
```bash
# Add to crontab
0 6 * * 0 cd /path/to/portfolio && npm run screenshots:update
```

### Benefits

- ✅ **On-Demand**: Capture screenshots whenever you want
- ✅ **Flexible**: Can be triggered by external services
- ✅ **Scalable**: Vercel handles the infrastructure
- ✅ **Real-time**: Get fresh screenshots instantly
- ✅ **Multi-platform**: Works with any static host

## 📊 Comparison

| Feature | GitHub Actions | Vercel Serverless |
|---------|---------------|-------------------|
| **Cost** | Free | Free tier available |
| **Trigger** | Push/Schedule | On-demand/Webhook |
| **Setup** | Simple | Moderate |
| **Reliability** | High | High |
| **Flexibility** | Limited | High |
| **Integration** | GitHub only | Any platform |

## 🛠️ Advanced Configuration

### Custom Viewport Sizes

Edit the screenshot dimensions in both approaches:

```javascript
// GitHub Actions (.github/workflows/screenshot.yml)
await page.setViewportSize({ width: 1440, height: 900 });

// Vercel Function (api/screenshot.js)
await page.setViewportSize({ width: 1440, height: 900 });
```

### Image Quality Settings

```javascript
// Higher quality (larger file size)
await page.screenshot({ 
  quality: 90,
  type: 'jpeg'
});

// Lower quality (smaller file size)
await page.screenshot({ 
  quality: 60,
  type: 'jpeg'
});
```

### Wait Conditions

```javascript
// Wait for specific element
await page.waitForSelector('.hero-section');

// Wait for network idle
await page.goto(url, { waitUntil: 'networkidle' });

// Custom wait time
await page.waitForTimeout(5000);
```

## 🔧 Troubleshooting

### Common Issues

**Screenshots not updating**:
- Check GitHub Actions logs
- Verify project URLs are accessible
- Ensure proper file permissions

**Serverless function errors**:
- Check Vercel function logs
- Verify Playwright is properly bundled
- Test with simple URLs first

**Large file sizes**:
- Reduce image quality (60-80)
- Use JPEG instead of PNG
- Compress images after capture

### Debug Mode

Add debug logging to both approaches:

```javascript
// GitHub Actions
console.log(`Navigating to: ${project.url}`);
console.log(`Screenshot saved: ${screenshotPath}`);

// Vercel Function
console.log(`Request received for: ${url}`);
console.log(`Screenshot captured successfully`);
```

## 🚀 Deployment Workflow

### Recommended Setup

1. **Use GitHub Actions** for automatic updates
2. **Keep Vercel function** for manual updates
3. **Test both** before going live

### Integration with Portfolio

Update your `Projects.tsx` to use the new screenshots:

```typescript
// Import new screenshots
import cuddlyFortnightScreenshot from '@/assets/project-cuddly-fortnight.jpg';
import portfolioScreenshot from '@/assets/project-portfolio.jpg';
import mintartScreenshot from '@/assets/project-mintart.jpg';

// Update project data
{
  id: 1,
  title: 'Cuddly Fortnight',
  image: cuddlyFortnightScreenshot, // Use new screenshot
  // ... rest of project data
}
```

## 📈 Monitoring

### GitHub Actions

- Check Actions tab for workflow status
- Monitor execution time and success rate
- Review logs for any errors

### Vercel Function

- Monitor function invocations in Vercel dashboard
- Check response times and error rates
- Set up alerts for failures

## 🎉 Next Steps

1. **Choose your approach** (GitHub Actions recommended)
2. **Test the setup** with a small change
3. **Monitor the results** for a few days
4. **Customize** viewport sizes and quality settings
5. **Deploy** and enjoy automated screenshots!

Your portfolio will now automatically stay up-to-date with fresh screenshots of your live projects! 🚀 