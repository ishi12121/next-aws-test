# Deploying to AWS Amplify

This guide will help you deploy your Next.js app to AWS Amplify with SSR support.

## Prerequisites

1. An AWS account
2. AWS CLI installed and configured (optional, but recommended)
3. GitHub repository (already done ✓)

## Deployment Steps

### Option 1: Deploy via AWS Amplify Console (Recommended)

1. **Go to AWS Amplify Console**
   - Visit [https://console.aws.amazon.com/amplify/](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"

2. **Connect Your Repository**
   - Select "GitHub" as your Git provider
   - Authenticate with GitHub if needed
   - Select your repository: `ishi12121/next-aws-test`
   - Select the branch: `main`

3. **Configure Build Settings**
   - Amplify should auto-detect the `amplify.yml` configuration
   - The configuration is already set up for Next.js SSR
   - Leave the settings as detected

4. **Configure Advanced Settings (Optional)**
   - Add environment variables if needed
   - Configure custom domain if desired

5. **Review and Deploy**
   - Review your settings
   - Click "Save and deploy"
   - Wait for the deployment to complete (5-10 minutes)

6. **Access Your App**
   - Once deployed, you'll get a URL like: `https://main.xxxxx.amplifyapp.com`
   - Your API endpoints will be available at:
     - `https://your-url/api/test`
     - `https://your-url/api/users`
     - `https://your-url/api/posts`

### Option 2: Deploy via AWS CLI

```bash
# Install Amplify CLI if not already installed
npm install -g @aws-amplify/cli

# Configure AWS credentials
amplify configure

# Initialize Amplify in your project
amplify init

# Add hosting
amplify add hosting

# Publish your app
amplify publish
```

## SSR Support

Your app is configured with Next.js App Router, which means:
- ✅ Server-Side Rendering (SSR) is enabled
- ✅ API routes work seamlessly
- ✅ Dynamic routes are supported
- ✅ Streaming and React Server Components work

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch will trigger an automatic deployment
- You can see build logs in the Amplify Console
- Failed builds will not affect your live app

## Monitoring

In the Amplify Console, you can:
- View deployment history
- Monitor app performance
- Check logs and errors
- Set up custom domains
- Configure environment variables

## Testing Your API Endpoints

After deployment, test your endpoints:

```bash
# Health check
curl https://your-url/api/test

# Get users
curl https://your-url/api/users

# Create a user
curl -X POST https://your-url/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com"}'

# Get posts
curl https://your-url/api/posts

# Create a post
curl -X POST https://your-url/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Post","content":"This is a test","author":"Test User"}'
```

## Cost

- AWS Amplify offers a free tier:
  - 1,000 build minutes per month
  - 15 GB served per month
  - 5 GB stored per month
- After free tier, pay-as-you-go pricing applies

## Troubleshooting

If deployment fails:
1. Check the build logs in Amplify Console
2. Ensure all dependencies are in `package.json`
3. Verify `amplify.yml` configuration
4. Check that Node.js version is compatible (Amplify uses Node 18 by default)

## Next Steps

- Add authentication with AWS Cognito
- Add a database with AWS AppSync
- Set up custom domain
- Configure CI/CD workflows
- Add monitoring and analytics
