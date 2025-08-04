# Railway Deployment Guide - Michelle Almonte Website

/**
 * @file: railway-deployment-guide.md
 * @path: docs/railway-deployment-guide.md
 * @created: 2025-08-04
 * @modified: 2025-08-04
 * @description: Complete guide for deploying Michelle Almonte website to Railway.app
 * @author: Randolfo Fermin
 * @module: Documentation - Deployment Guide
 */

## RAILWAY DEPLOYMENT OVERVIEW

Railway.app will host both your backend (Node.js + Express) and frontend (Next.js) from the same repository using Railway's monorepo support. This guide covers complete setup from project creation to live deployment.

---

## STEP 1: RAILWAY ACCOUNT AND PROJECT SETUP

### 1.1 Create Railway Account
1. Visit [railway.app](https://railway.app)
2. Sign up with GitHub account (recommended for automatic deployments)
3. Verify email address

### 1.2 Install Railway CLI
```bash
# Install Railway CLI globally
npm install -g @railway/cli

# Login to Railway
railway login

# Verify installation
railway --version
```

---

## STEP 2: PROJECT REPOSITORY STRUCTURE

### 2.1 Monorepo Structure for Railway
Your repository should be structured as follows:
```
michellealmonte-website/
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── frontend/
│   ├── package.json
│   ├── next.config.js
│   ├── src/
│   └── public/
├── railway.json          # Railway configuration
├── package.json          # Root package.json
└── README.md
```

### 2.2 Create Root Package.json
Create `package.json` in your root directory:
```json
{
  "name": "michellealmonte-website",
  "version": "1.0.0",
  "description": "Michelle Almonte Image Consulting Website",
  "scripts": {
    "install:backend": "cd backend && npm install",
    "install:frontend": "cd frontend && npm install",
    "install:all": "npm run install:backend && npm run install:frontend",
    "dev:backend": "cd backend && npm run dev",
    "dev:frontend": "cd frontend && npm run dev",
    "build:frontend": "cd frontend && npm run build",
    "start:backend": "cd backend && npm start",
    "start:frontend": "cd frontend && npm start"
  },
  "repository": {
    "type": "git",
    "url": "your-github-repo-url"
  },
  "author": "Randolfo Fermin",
  "license": "ISC"
}
```

### 2.3 Create Railway Configuration
Create `railway.json` in your root directory:
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

---

## STEP 3: RAILWAY PROJECT CREATION

### 3.1 Create New Railway Project
```bash
# Initialize Railway project in your root directory
cd michellealmonte-website
railway init

# Follow prompts:
# - Create new project: Yes
# - Project name: michellealmonte-website
# - Connect to GitHub: Yes (recommended)
```

### 3.2 Create Services
Railway requires separate services for backend and frontend:

```bash
# Create backend service
railway add --name backend

# Create frontend service  
railway add --name frontend

# Add MySQL database
railway add --name database --plugin mysql
```

---

## STEP 4: DATABASE CONFIGURATION

### 4.1 Railway MySQL Setup
Railway will automatically create MySQL database. Access credentials:

```bash
# View database credentials
railway variables --service database

# Connect to database (optional)
railway connect database
```

### 4.2 Database Schema Deployment
Create `backend/database/deploy-schema.js`:
```javascript
/**
 * @file: deploy-schema.js
 * @path: backend/database/deploy-schema.js
 * @created: 2025-08-04
 * @modified: 2025-08-04
 * @description: Deploy database schema to Railway MySQL
 * @author: Randolfo Fermin
 * @module: Backend - Database Deployment
 */

const mysql = require('mysql2/promise');
require('dotenv').config();

/**
 * @function deploySchema
 * @description Deploys database schema to Railway MySQL
 * 
 * @returns {Promise<void>} Schema deployment result
 * 
 * @throws {Error} Database deployment error
 */
const deploySchema = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQLHOST,
      port: process.env.MYSQLPORT,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE
    });

    const schema = `
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(20),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(100) UNIQUE NOT NULL,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        active BOOLEAN DEFAULT TRUE
      );
    `;

    await connection.execute(schema);
    console.log('Database schema deployed successfully!');
    await connection.end();
  } catch (error) {
    console.error('Schema deployment failed:', error);
    process.exit(1);
  }
};

deploySchema();

// End of File: deploy-schema.js
```

---

## STEP 5: BACKEND DEPLOYMENT CONFIGURATION

### 5.1 Backend Environment Variables
Set backend environment variables in Railway:

```bash
# Set backend service context
railway service backend

# Set environment variables
railway variables --set "NODE_ENV=production"
railway variables --set "PORT=5000"
railway variables --set "JWT_SECRET=6f8d3b2e9c4a1e7f5d0b8c6a3e2f9d1c7b4a8e6f2c3d9b7a1e5f0c8d6b3a2e9f"
railway variables --set "JWT_EXPIRES_IN=24h"

# Database variables (Railway sets these automatically)
railway variables --set "DB_HOST=${{database.MYSQLHOST}}"
railway variables --set "DB_USER=${{database.MYSQLUSER}}"
railway variables --set "DB_PASSWORD=${{database.MYSQLPASSWORD}}"
railway variables --set "DB_NAME=${{database.MYSQLDATABASE}}"
railway variables --set "DB_PORT=${{database.MYSQLPORT}}"

# Email configuration (update with your credentials)
railway variables --set "EMAIL_SERVICE=zoho"
railway variables --set "EMAIL_USER=noreply@725dev.net"
railway variables --set "EMAIL_PASS=Rfh031@027@"
railway variables --set "EMAIL_HOST=smtp.zoho.com"
railway variables --set "EMAIL_PORT=587"
railway variables --set "EMAIL_SECURE=false"
railway variables --set "EMAIL_FROM=noreply@725dev.net"
```

### 5.2 Backend Railway Configuration
Create `backend/nixpacks.toml`:
```toml
[phases.setup]
nixPkgs = ['nodejs_18']

[phases.install]
cmds = ['npm ci']

[phases.build]
cmds = ['echo "Backend build complete"']

[start]
cmd = 'npm start'
```

### 5.3 Update Backend Package.json
Ensure your `backend/package.json` includes:
```json
{
  "engines": {
    "node": ">=18.0.0"
  },
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "deploy": "node database/deploy-schema.js"
  }
}
```

---

## STEP 6: FRONTEND DEPLOYMENT CONFIGURATION

### 6.1 Frontend Environment Variables
```bash
# Set frontend service context
railway service frontend

# Set environment variables
railway variables --set "NODE_ENV=production"
railway variables --set "NEXT_PUBLIC_API_URL=${{railway.RAILWAY_PUBLIC_DOMAIN}}"
```

### 6.2 Frontend Railway Configuration  
Create `frontend/nixpacks.toml`:
```toml
[phases.setup]
nixPkgs = ['nodejs_18']

[phases.install]
cmds = ['npm ci']

[phases.build]
cmds = ['npm run build']

[start]
cmd = 'npm start'
```

### 6.3 Update Frontend Package.json
Ensure your `frontend/package.json` includes:
```json
{
  "engines": {
    "node": ">=18.0.0"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "node .next/standalone/server.js",
    "lint": "next lint"
  }
}
```

### 6.4 Next.js Configuration
Create/update `frontend/next.config.js`:
```javascript
/**
 * @file: next.config.js
 * @path: frontend/next.config.js
 * @created: 2025-08-04
 * @modified: 2025-08-04
 * @description: Next.js configuration for Railway deployment
 * @author: Randolfo Fermin
 * @module: Frontend - Configuration
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: '/app',  // Fixed: make absolute path
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    if (!apiUrl) return [];
    
    const baseUrl = apiUrl.startsWith('http') 
      ? apiUrl 
      : `https://${apiUrl}`;
      
    return [
      {
        source: '/api/:path*',
        destination: `${baseUrl}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;

// End of File: next.config.js
```

---

## STEP 7: DEPLOYMENT CONFIGURATION FILES

### 7.1 Backend Procfile (Alternative)
Create `backend/Procfile`:
```
web: npm start
```

### 7.2 Frontend Procfile (Alternative)
Create `frontend/Procfile`:
```
web: npm start
```

### 7.3 Root Level .gitignore
Update your `.gitignore`:
```
# Dependencies
node_modules/
*/node_modules/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build outputs
.next/
out/
dist/

# Railway
.railway/

# IDE
.vscode/
.DS_Store

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.log
```

---

## STEP 8: DEPLOYMENT PROCESS

### 8.1 Deploy Backend Service
```bash
# Switch to backend service
railway service backend

# Deploy backend
railway up backend

# Check deployment status
railway status

# View logs
railway logs
```

### 8.2 Deploy Database Schema
```bash
# Run schema deployment (one time only)
railway run node database/deploy-schema.js
```

### 8.3 Deploy Frontend Service
```bash
# Switch to frontend service
railway service frontend

# Deploy frontend
railway up frontend

# Check deployment status
railway status

# View logs
railway logs
```

---

## STEP 9: DOMAIN CONFIGURATION

### 9.1 Custom Domain Setup
```bash
# Add custom domain to frontend service
railway service frontend
railway domain add michellealmonte.com

# Add www subdomain (optional)
railway domain add www.michellealmonte.com
```

### 9.2 DNS Configuration
In your domain registrar, add these DNS records:
```
Type: CNAME
Name: www
Value: your-frontend-service.railway.app

Type: A
Name: @
Value: [Railway IP - check Railway dashboard]
```

---

## STEP 10: ENVIRONMENT VARIABLES CHECKLIST

### Backend Variables ✅
- [ ] `NODE_ENV=production`
- [ ] `PORT=5000`
- [ ] `JWT_SECRET=your_secure_secret`
- [ ] `JWT_EXPIRES_IN=24h`
- [ ] `DB_HOST=${{database.MYSQLHOST}}`
- [ ] `DB_USER=${{database.MYSQLUSER}}`
- [ ] `DB_PASSWORD=${{database.MYSQLPASSWORD}}`
- [ ] `DB_NAME=${{database.MYSQLDATABASE}}`
- [ ] `DB_PORT=${{database.MYSQLPORT}}`
- [ ] `EMAIL_SERVICE=gmail`
- [ ] `EMAIL_USER=your-email@gmail.com`
- [ ] `EMAIL_PASS=your-app-password`

### Frontend Variables ✅
- [ ] `NODE_ENV=production`
- [ ] `NEXT_PUBLIC_API_URL=${{backend.RAILWAY_PUBLIC_DOMAIN}}`

---

## STEP 11: DEPLOYMENT VERIFICATION

### 11.1 Backend Health Check
```bash
# Test backend API
curl https://your-backend-service.railway.app/api/health

# Expected response: {"status": "OK", "timestamp": "..."}
```

### 11.2 Frontend Health Check
```bash
# Test frontend
curl https://your-frontend-service.railway.app

# Expected: HTML response with your website
```

### 11.3 Database Connection Test
```bash
# Run from Railway CLI
railway run node -e "
const db = require('./config/database.js');
db.execute('SELECT 1 as test')
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('DB Error:', err));
"
```

---

## STEP 12: CONTINUOUS DEPLOYMENT SETUP

### 12.1 GitHub Integration
Railway automatically deploys when you push to your main branch:

1. Connect Railway to your GitHub repository
2. Set deployment triggers:
   - Backend: Deploy on changes to `backend/` directory
   - Frontend: Deploy on changes to `frontend/` directory

### 12.2 Deployment Webhooks (Optional)
Set up deployment notifications in Railway dashboard:
- Slack integration
- Email notifications
- Discord webhooks

---

## STEP 13: PRODUCTION OPTIMIZATION

### 13.1 Backend Production Settings
Update `backend/server.js` for production:
```javascript
/**
 * @deployment: Railway.com
 * @environment: Production
 * @description: Express server configured for Railway deployment
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://michellealmonte.com',
  credentials: true
}));

// Health check endpoint for Railway
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV 
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server running on port ${PORT}`);
});
```

### 13.2 Frontend Production Settings
Update `frontend/package.json`:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p $PORT",
    "lint": "next lint"
  }
}
```

---

## STEP 14: SSL AND SECURITY

### 14.1 SSL Certificate
Railway automatically provides SSL certificates for:
- *.railway.app domains
- Custom domains (once DNS is properly configured)

### 14.2 Security Headers
Railway automatically adds basic security headers. Additional security is configured in your backend code.

---

## STEP 15: MONITORING AND MAINTENANCE

### 15.1 Railway Dashboard Monitoring
Monitor your deployment via Railway dashboard:
- Service metrics
- Build logs
- Runtime logs  
- Resource usage

### 15.2 Database Monitoring
```bash
# Check database metrics
railway service database
railway logs

# Database connection monitoring
railway metrics
```

### 15.3 Application Logs
```bash
# View backend logs
railway service backend
railway logs --tail

# View frontend logs
railway service frontend  
railway logs --tail
```

---

## STEP 16: TROUBLESHOOTING COMMON ISSUES

### 16.1 Build Failures
**Issue**: Build fails during deployment
**Solution**:
1. Check `railway logs` for specific error
2. Verify all dependencies in package.json
3. Ensure Node.js version compatibility
4. Check for missing environment variables

### 16.2 Database Connection Issues
**Issue**: Backend cannot connect to database
**Solution**:
1. Verify database service is running: `railway status`
2. Check database variables: `railway variables --service database`
3. Test connection locally with Railway database credentials
4. Ensure database service is linked to backend service

### 16.3 Frontend API Connection Issues
**Issue**: Frontend cannot reach backend API
**Solution**:
1. Verify backend service is deployed and running
2. Check `NEXT_PUBLIC_API_URL` environment variable
3. Ensure CORS is configured correctly in backend
4. Test API endpoints directly

### 16.4 Domain Configuration Issues
**Issue**: Custom domain not working
**Solution**:
1. Verify DNS records are correct and propagated
2. Check Railway domain configuration
3. Ensure SSL certificate is active
4. Wait 24-48 hours for full DNS propagation

---

## STEP 17: DEPLOYMENT CHECKLIST

### Pre-Deployment Checklist ✅
- [ ] GitHub repository created and code pushed
- [ ] Railway account created and CLI installed
- [ ] Project structure organized as monorepo
- [ ] Database schema ready for deployment
- [ ] Environment variables documented
- [ ] Configuration files created

### Deployment Checklist ✅
- [ ] Railway project created
- [ ] Backend service deployed
- [ ] Database service configured
- [ ] Frontend service deployed
- [ ] Environment variables set
- [ ] Database schema deployed
- [ ] SSL certificate active
- [ ] Custom domain configured (if applicable)

### Post-Deployment Checklist ✅
- [ ] Backend health check passing
- [ ] Frontend loading correctly
- [ ] Database connectivity verified
- [ ] Contact form functionality tested
- [ ] Newsletter subscription tested
- [ ] API endpoints responding correctly
- [ ] Responsive design verified
- [ ] Cross-browser compatibility tested

---

## STEP 18: MAINTENANCE AND UPDATES

### 18.1 Deploying Updates
```bash
# Update backend
git add backend/
git commit -m "FEAT: Update backend functionality"
git push origin main  # Automatically triggers Railway deployment

# Update frontend
git add frontend/
git commit -m "FEAT: Update frontend design"
git push origin main  # Automatically triggers Railway deployment
```

### 18.2 Database Migrations
For future database changes:
```bash
# Create migration file
touch backend/database/migrations/001_add_new_table.sql

# Run migration on Railway
railway run node backend/database/run-migration.js
```

### 18.3 Monitoring Performance
- Use Railway dashboard for resource monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Monitor application logs regularly
- Review database performance monthly

---

## RAILWAY DEPLOYMENT COMMANDS REFERENCE

```bash
# Essential Railway CLI commands
railway login                              # Login to Railway
railway init                               # Initialize project
railway add                                # Add service
railway up [directory]                     # Deploy service
railway service [service-name]             # Switch service context
railway variables                          # View environment variables
railway variables set KEY=value            # Set environment variable
railway logs                               # View service logs
railway logs --tail                        # Live tail logs
railway status                             # Check service status
railway connect [service]                  # Connect to service
railway run [command]                      # Run command in Railway environment
railway domain add [domain]                # Add custom domain
railway metrics                            # View service metrics
```

---

## COST OPTIMIZATION TIPS

1. **Database**: Use Railway's shared CPU database for development/small projects
2. **Services**: Monitor resource usage and scale appropriately
3. **Storage**: Optimize images and static assets
4. **Bandwidth**: Implement caching strategies
5. **Idle Prevention**: Railway may sleep services on free tier

---

## BACKUP AND DISASTER RECOVERY

### Database Backup
```bash
# Create database backup
railway connect database
mysqldump --single-transaction --routines --triggers > backup.sql
```

### Code Backup
- GitHub repository serves as primary code backup
- Use Railway's deployment history for rollbacks
- Tag releases for stable deployment points

---

## RESUME FOR FOLLOW-UP

**Project**: Michelle Almonte Image Consulting Website Railway Deployment
**Status**: Complete deployment guide created
**Key Components**: Monorepo structure, dual service deployment, MySQL database, custom domain setup
**Tech Stack**: Node.js + Express backend, Next.js + Ant Design frontend, MySQL database
**Next Actions**: 
1. Follow Step 1-3 to create Railway project
2. Configure services and environment variables (Steps 4-6)
3. Deploy and test (Steps 7-11)
4. Configure custom domain and monitoring (Steps 12-15)

**Critical Files to Create**:
- `railway.json` (root)
- `nixpacks.toml` (backend & frontend)
- `next.config.js` (frontend)
- `deploy-schema.js` (backend/database)

**Estimated Deployment Time**: 2-3 hours for initial setup, 30 minutes for subsequent deployments

// End of File: railway-deployment-guide.md