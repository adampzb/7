# DiscussIt Deployment Guide

This guide provides step-by-step instructions for deploying DiscussIt on a remote server and accessing it from another device.

## Server Specifications

### Our Current Server Configuration

This deployment guide is tailored for our specific server configuration:

**Basic Information:**
- **Hostname**: OH
- **IP Address**: 51.15.115.36
- **Operating System**: Ubuntu 24.04.3 LTS (Noble Numbat)
- **Kernel**: Linux 6.8.0-90-generic
- **Architecture**: x86_64

**Hardware Resources:**
- **CPU**: 4 cores (Intel/AMD x86_64)
- **RAM**: 7.7GB total (7.2GB available)
- **Storage**: 27GB SSD (/dev/vda1 with 17GB available)
- **Swap**: None configured

**Network Configuration:**
- **Primary Interface**: ens2 (de:00:00:60:cd:c5)
- **IPv4 Address**: 51.15.115.36/32
- **IPv6 Address**: 2001:bc8:1640:5b61:dc00:ff:fe60:cdc5/64
- **Docker Network**: 172.17.0.1/16 (docker0 interface)

**Software Versions:**
- **Python**: 3.12.3
- **Docker**: 28.2.2
- **Docker Compose**: 1.29.2
- **Nginx**: 1.24.0
- **PostgreSQL**: 15 (installed and running)
- **Git**: Latest stable version
- **Pip**: 24.0

**Database Configuration:**
- **Database Name**: discussit
- **Database User**: discussit_user
- **Database Password**: discussit_password_2024
- **Database Host**: localhost (or db for Docker)
- **Database Port**: 5432
- **Connection String**: postgres://discussit_user:discussit_password_2024@localhost:5432/discussit

**Filesystem Layout:**
- **Root**: 27GB ext4 filesystem on /dev/vda1
- **Boot**: 881MB ext4 on /dev/vda16
- **EFI**: 105MB vfat on /dev/vda15
- **PostgreSQL Data**: /var/lib/postgresql/15/main/

**Project Location:**
- **Base Directory**: /root/7/
- **Static Files**: /root/7/static/
- **Media Files**: /root/7/media/
- **Templates**: /root/7/templates/

This configuration represents our exact production environment, ensuring that the deployment instructions are perfectly tailored to our server setup.

## Table of Contents

1. [Server Specifications](#server-specifications)
2. [Prerequisites](#prerequisites)
3. [Server Setup](#server-setup)
4. [Deployment Methods](#deployment-methods)
   - [Method 1: Docker Deployment (Recommended)](#method-1-docker-deployment-recommended)
   - [Method 2: Manual Deployment](#method-2-manual-deployment)
5. [Domain and Network Configuration](#domain-and-network-configuration)
6. [Accessing from Another Device](#accessing-from-another-device)
7. [Testing Functionality](#testing-functionality)
8. [Troubleshooting](#troubleshooting)
9. [Security Best Practices](#security-best-practices)

## Prerequisites

### Remote Server Requirements
- **Operating System**: Ubuntu 24.04.3 LTS (Noble Numbat) - This is the exact OS used in our deployment
- **Kernel**: Linux 6.8.0-90-generic (x86_64)
- **CPU**: 4 cores (Intel/AMD x86_64 architecture)
- **RAM**: 8GB (7.7GB total, 7.2GB available)
- **Storage**: 27GB SSD (/dev/vda1 with 17GB available)
- **Network**: Public IP address 51.15.115.36 with ports 80, 443, and 8000 accessible
- **Hostname**: OH (as configured in /etc/hostname)

### Current Server Configuration (Reference)
This guide is based on the exact server configuration we're currently using:
- **Server IP**: 51.15.115.36
- **Server Name**: OH
- **Ubuntu Version**: 24.04.3 LTS
- **Python Version**: 3.12.3
- **Docker Version**: 28.2.2
- **Docker Compose Version**: 1.29.2
- **Nginx Version**: 1.24.0

### Local Machine Requirements
- SSH client
- Git
- Basic command line knowledge

### Tools You'll Need
- SSH client (OpenSSH, PuTTY, etc.)
- Text editor (nano, vim, etc.)
- Domain name (optional but recommended)

## Server Setup

### 0. Database Setup (Already Completed)

Our PostgreSQL database has been set up with the following credentials:

**Database Information:**
- **Database Name**: `discussit`
- **Username**: `discussit_user`
- **Password**: `discussit_password_2024`
- **Host**: `localhost`
- **Port**: `5432`

The database was created using these commands:
```bash
sudo -u postgres psql -c "CREATE DATABASE discussit;"
sudo -u postgres psql -c "CREATE USER discussit_user WITH PASSWORD 'discussit_password_2024';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE discussit TO discussit_user;"
```

You can verify the database exists:
```bash
sudo -u postgres psql -l
```

### 1. Connect to Your Remote Server

```bash
ssh root@51.15.115.36
```

For our specific server, use:
```bash
ssh root@51.15.115.36
```

Replace `root` with your actual username if different. The server hostname is `OH`.

### 2. Update System Packages

```bash
sudo apt update && sudo apt upgrade -y
```

### 3. Install Required Dependencies

```bash
sudo apt install -y git python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx certbot python3-certbot-nginx docker.io docker-compose
```

### 4. Configure Firewall

```bash
sudo ufw allow 22/tcp       # SSH
sudo ufw allow 80/tcp       # HTTP
sudo ufw allow 443/tcp      # HTTPS
sudo ufw allow 8000/tcp     # Django application
sudo ufw enable
```

## Deployment Methods

### Method 1: Docker Deployment (Recommended)

This is the easiest and most reliable method using the provided Docker configuration.

#### Step 1: Clone the Repository

```bash
git clone https://github.com/your-repo/discussit.git
cd discussit
```

#### Step 2: Configure Environment Variables

Create a `.env` file based on the example:

```bash
cp .env.example .env
```

Edit the `.env` file with your specific configuration:

```bash
nano .env
```

Update these key variables (with our server-specific values):
```
ALLOWED_HOSTS=51.15.115.36,localhost,OH
SECRET_KEY=your-very-secure-secret-key-here-change-this-immediately
DEBUG=False
DATABASE_URL=postgres://discussit_user:secure_password@db:5432/discussit
CORS_ALLOWED_ORIGINS=http://51.15.115.36:8000,http://localhost:4200
CSRF_TRUSTED_ORIGINS=http://51.15.115.36
```

For our specific server configuration:
- **Server IP**: 51.15.115.36
- **Server Hostname**: OH
- **Database**: PostgreSQL (will be containerized with Docker)
- **Frontend**: Angular on port 4200 (for development)

#### Step 3: Build and Start Containers

```bash
sudo docker-compose build
sudo docker-compose up -d
```

#### Step 4: Apply Database Migrations

```bash
sudo docker-compose exec web python manage.py migrate
```

#### Step 5: Create Superuser (Admin)

```bash
sudo docker-compose exec web python manage.py createsuperuser
```

#### Step 6: Collect Static Files

```bash
sudo docker-compose exec web python manage.py collectstatic --noinput
```

### Method 2: Manual Deployment

If you prefer not to use Docker, follow these steps:

#### Step 1: Set Up Python Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
```

#### Step 2: Install Python Dependencies

```bash
pip install -r requirements.txt
```

#### Step 3: Configure PostgreSQL

```bash
sudo -u postgres psql
```

In PostgreSQL shell:
```sql
CREATE DATABASE discussit;
CREATE USER discussit_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE discussit TO discussit_user;
\q
```

#### Step 4: Configure Django Settings

Edit `discussit/settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'discussit',
        'USER': 'discussit_user',
        'PASSWORD': 'secure_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

ALLOWED_HOSTS = ['your_domain.com', 'your_server_ip', 'localhost']
DEBUG = False
SECRET_KEY = 'your-very-secure-secret-key-here'
```

#### Step 5: Run Database Migrations

```bash
python manage.py migrate
```

#### Step 6: Create Superuser

```bash
python manage.py createsuperuser
```

#### Step 7: Collect Static Files

```bash
python manage.py collectstatic --noinput
```

#### Step 8: Start Gunicorn

```bash
gunicorn --config gunicorn_config.py discussit.wsgi:application
```

For production, use a process manager like systemd:

```bash
sudo nano /etc/systemd/system/discussit.service
```

Add this content:
```ini
[Unit]
Description=DiscussIt Gunicorn Server
After=network.target

[Service]
User=your_username
Group=www-data
WorkingDirectory=/path/to/discussit
ExecStart=/path/to/venv/bin/gunicorn --config gunicorn_config.py discussit.wsgi:application
Restart=always

[Install]
WantedBy=multi-user.target
```

Then enable and start the service:
```bash
sudo systemctl daemon-reload
sudo systemctl start discussit
sudo systemctl enable discussit
```

## Domain and Network Configuration

### Configure Nginx as Reverse Proxy

```bash
sudo nano /etc/nginx/sites-available/discussit
```

Add this configuration (for our specific server):
```nginx
server {
    listen 80;
    server_name 51.15.115.36 OH;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /static/ {
        alias /root/7/static/;
    }

    location /media/ {
        alias /root/7/media/;
    }
}
```

For our server:
- **Server IP**: 51.15.115.36
- **Server Name**: OH
- **Project Path**: /root/7/
- **Static Files**: /root/7/static/
- **Media Files**: /root/7/media/

Enable the configuration:
```bash
sudo ln -s /etc/nginx/sites-available/discussit /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Set Up SSL with Let's Encrypt

```bash
sudo certbot --nginx -d your_domain.com
```

Follow the prompts to complete SSL setup.

## Accessing from Another Device

### Method 1: Using Server IP Address

1. On another device, open a web browser
2. Enter: `http://51.15.115.36:8000` (or `https://your_domain.com` if using domain)
3. You should see the DiscussIt application

For our specific server:
- **Direct Access**: `http://51.15.115.36:8000`
- **Server Name Access**: `http://OH:8000` (if DNS is configured)
- **Local Network**: If on the same network, you can also use the local IP

### Method 2: Using Domain Name (Recommended)

1. Configure DNS to point your domain to the server IP
2. Wait for DNS propagation (usually 5-30 minutes)
3. Access: `https://your_domain.com`

### Method 3: Local Network Testing

If testing within the same local network:
1. Find your server's local IP: `ip a` or `ifconfig`
2. On another device on the same network, access: `http://local_server_ip:8000`

## Testing Functionality

### Basic Functionality Tests

1. **Homepage Access**: Verify the homepage loads
2. **User Registration**: Create a test user account
3. **Login/Logout**: Test authentication flow
4. **Post Creation**: Create a test post
5. **Comment System**: Add comments to posts
6. **Search Functionality**: Test search features
7. **Admin Panel**: Access `/admin` and verify admin interface

### API Testing

Use tools like Postman or curl to test API endpoints:

```bash
# Test API health
curl -X GET http://your_server_ip:8000/api/health/

# Test authentication
curl -X POST http://your_server_ip:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"testpass"}'
```

### Performance Testing

```bash
# Simple load test
ab -n 100 -c 10 http://your_server_ip:8000/
```

## Troubleshooting

### Common Issues and Solutions

**Issue: Connection refused on port 8000**
- Check if Gunicorn is running: `sudo systemctl status discussit`
- Verify firewall rules: `sudo ufw status`
- Check if the application is bound to the correct IP

**Issue: Database connection errors**
- Verify PostgreSQL is running: `sudo systemctl status postgresql`
- Check database credentials in `.env` or `settings.py`
- Ensure the database exists and user has permissions

**Issue: Static files not loading**
- Run: `python manage.py collectstatic --noinput`
- Verify Nginx static file configuration
- Check file permissions: `sudo chown -R www-data:www-data static/`

**Issue: 502 Bad Gateway**
- Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`
- Verify Gunicorn is running and accessible on localhost:8000
- Check for syntax errors in Nginx configuration

### Debugging Commands

```bash
# Check running containers (Docker)
sudo docker ps -a

# View container logs
sudo docker logs discussit_web

# Check application logs
sudo tail -f /var/log/gunicorn/discussit.log

# Check Nginx access logs
sudo tail -f /var/log/nginx/access.log

# Check system resource usage
top
hhtop
free -h
```

## Security Best Practices

### Essential Security Measures

1. **Change SSH Port**: Edit `/etc/ssh/sshd_config` and change `Port 22` to a different port
2. **Disable Root SSH**: Set `PermitRootLogin no` in SSH config
3. **Use SSH Keys**: Set up SSH key authentication instead of passwords
4. **Regular Updates**: Keep system and dependencies updated
5. **Database Backups**: Set up automated database backups
6. **Fail2Ban**: Install and configure Fail2Ban for brute force protection

### Additional Security Configuration

```bash
# Install and configure Fail2Ban
sudo apt install fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

# Set up automated security updates
sudo apt install unattended-upgrades
sudo dpkg-reconfigure unattended-upgrades
```

## Maintenance Tasks

### Regular Maintenance Commands

```bash
# Update application
cd /path/to/discussit
git pull origin main
sudo docker-compose down
sudo docker-compose build
sudo docker-compose up -d

# Database backup
sudo docker-compose exec db pg_dump -U postgres discussit > backup_$(date +%Y-%m-%d).sql

# Clear Django cache
python manage.py clear_cache

# Check for security updates
sudo apt update
sudo apt list --upgradable
```

## Conclusion

You now have a fully deployed DiscussIt application accessible from any device. Remember to:

1. Regularly update your application and server
2. Monitor application logs for errors
3. Backup your database regularly
4. Test new features in a staging environment before production

For additional help, refer to the official Django and Docker documentation or consult the project's README.md file.
