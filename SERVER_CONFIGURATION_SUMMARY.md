# 📋 Server Configuration Summary - OH (51.15.115.36)

## 🌐 Server Information

**Server Name**: OH
**IP Address**: 51.15.115.36
**Operating System**: Ubuntu 24.04.3 LTS (Noble Numbat)
**Kernel**: Linux 6.8.0-90-generic
**Architecture**: x86_64

## 💾 Hardware Resources

- **CPU**: 4 cores (Intel/AMD x86_64)
- **RAM**: 7.7GB total (7.2GB available)
- **Storage**: 27GB SSD (/dev/vda1 with 17GB available)
- **Swap**: None configured

## 🔧 Software Versions

- **Python**: 3.12.3
- **Docker**: 28.2.2
- **Docker Compose**: 1.29.2
- **Nginx**: 1.24.0
- **PostgreSQL**: 15
- **Git**: Latest stable
- **Pip**: 24.0

## 🗃️ Database Configuration

### PostgreSQL Database
- **Database Name**: `discussit`
- **Username**: `discussit_user`
- **Password**: `discussit_password_2024`
- **Host**: `localhost`
- **Port**: `5432`
- **Connection String**: `postgres://discussit_user:discussit_password_2024@localhost:5432/discussit`

### Database Setup Commands
```bash
sudo -u postgres psql -c "CREATE DATABASE discussit;"
sudo -u postgres psql -c "CREATE USER discussit_user WITH PASSWORD 'discussit_password_2024';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE discussit TO discussit_user;"
```

## 📝 Environment Configuration (.env)

### Key Settings
```bash
ENVIRONMENT=production
SECRET_KEY=your-very-secure-secret-key-change-this-immediately-in-production
DEBUG=False
ALLOWED_HOSTS=51.15.115.36,localhost,OH,127.0.0.1
DATABASE_URL=postgres://discussit_user:discussit_password_2024@localhost:5432/discussit
CORS_ALLOWED_ORIGINS=http://51.15.115.36:8000,http://localhost:4200,http://127.0.0.1:4200
CSRF_TRUSTED_ORIGINS=http://51.15.115.36,http://localhost
```

## 🌐 Network Configuration

### Server Access
- **SSH**: `ssh root@51.15.115.36`
- **Application URL**: `http://51.15.115.36:8000`
- **Admin Panel**: `http://51.15.115.36:8000/admin`
- **API Endpoints**: `http://51.15.115.36:8000/api/`

### Firewall Rules
```bash
sudo ufw allow 22/tcp       # SSH
sudo ufw allow 80/tcp       # HTTP
sudo ufw allow 443/tcp      # HTTPS
sudo ufw allow 8000/tcp     # Django application
```

## 📁 Project Structure

- **Base Directory**: `/root/7/`
- **Static Files**: `/root/7/static/`
- **Media Files**: `/root/7/media/`
- **Templates**: `/root/7/templates/`
- **PostgreSQL Data**: `/var/lib/postgresql/15/main/`

## 🐳 Docker Configuration

### Docker Compose
```yaml
services:
  web:
    build: .
    ports:
      - "8000:8000"
    environment:
      - ALLOWED_HOSTS=51.15.115.36,localhost,OH
      - DATABASE_URL=postgres://discussit_user:discussit_password_2024@db:5432/discussit
    command: gunicorn --config gunicorn_config.py discussit.wsgi:application
    volumes:
      - .:/usr/src/app
```

## 🚀 Deployment Commands

### Start Application
```bash
sudo docker-compose build
sudo docker-compose up -d
```

### Database Migrations
```bash
sudo docker-compose exec web python manage.py migrate
```

### Create Superuser
```bash
sudo docker-compose exec web python manage.py createsuperuser
```

### Collect Static Files
```bash
sudo docker-compose exec web python manage.py collectstatic --noinput
```

## 🔐 Security Checklist

- [ ] Change SECRET_KEY in .env file
- [ ] Set up SSL certificate (Let's Encrypt)
- [ ] Configure firewall properly
- [ ] Change database password for production
- [ ] Set up regular backups
- [ ] Enable automatic security updates
- [ ] Configure Fail2Ban
- [ ] Change SSH port and disable root login

## 📚 Documentation Files

### Deployment Guides
1. **DEPLOYMENT_GUIDE.md** - Comprehensive deployment guide
2. **QUICK_START_DEPLOYMENT.md** - Quick reference guide
3. **DATABASE_SETUP_GUIDE.md** - Database setup instructions
4. **DATABASE_CHEAT_SHEET.md** - Quick database commands

### Configuration Files
1. **docker-compose.yml** - Docker configuration
2. **gunicorn_config.py** - Gunicorn settings
3. **.env** - Environment variables
4. **nginx/prod.conf** - Nginx configuration

## 🧪 Testing Commands

### Test Database Connection
```bash
psql -U discussit_user -d discussit -h localhost -p 5432 -c "SELECT version();"
```

### Test Application
```bash
curl http://51.15.115.36:8000
curl http://51.15.115.36:8000/api/health/
```

### Check Logs
```bash
sudo docker-compose logs -f
sudo tail -f /var/log/nginx/access.log
```

## 🔄 Backup Commands

### Database Backup
```bash
pg_dump -U discussit_user -d discussit -h localhost -p 5432 > backup_$(date +%Y-%m-%d).sql
```

### Database Restore
```bash
psql -U discussit_user -d discussit -h localhost -p 5432 -f backup.sql
```

## 📊 Monitoring Commands

### System Resources
```bash
top
free -h
df -h
```

### Docker Status
```bash
sudo docker ps -a
sudo docker stats
```

### Service Status
```bash
sudo systemctl status nginx
sudo systemctl status postgresql
```

## 🎯 Summary

This configuration summary provides all the essential information for our DiscussIt server (OH at 51.15.115.36). Use this as a quick reference for deployment, configuration, and troubleshooting.

**Remember**: Always keep your SECRET_KEY and database passwords secure!
