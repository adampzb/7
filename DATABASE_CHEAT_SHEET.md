# 🗃️ DiscussIt Database Cheat Sheet

## 🔑 Database Credentials

**Our Database Configuration:**
```bash
Database Name: discussit
Username:      discussit_user
Password:      discussit_password_2024
Host:          localhost
Port:          5432
```

**Connection String:**
```bash
postgres://discussit_user:discussit_password_2024@localhost:5432/discussit
```

## 🚀 Quick Commands

### Connect to Database
```bash
psql -U discussit_user -d discussit -h localhost -p 5432
```

### Backup Database
```bash
pg_dump -U discussit_user -d discussit -h localhost -p 5432 > backup.sql
```

### Restore Database
```bash
psql -U discussit_user -d discussit -h localhost -p 5432 -f backup.sql
```

### List Tables
```bash
psql -U discussit_user -d discussit -h localhost -p 5432 -c "\dt"
```

## 📝 Django Configuration

### settings.py
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'discussit',
        'USER': 'discussit_user',
        'PASSWORD': 'discussit_password_2024',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

### .env file
```bash
DATABASE_URL=postgres://discussit_user:discussit_password_2024@localhost:5432/discussit
```

### Docker .env
```bash
DATABASE_URL=postgres://discussit_user:discussit_password_2024@db:5432/discussit
```

## 🔧 Database Management

### Apply Migrations
```bash
python manage.py migrate
```

### Create Migrations
```bash
python manage.py makemigrations
```

### Check Database Connection
```bash
python manage.py check
python manage.py dbshell
```

### Reset Database (Dev Only)
```bash
python manage.py flush
```

## 🐳 Docker Commands

### Start Database Container
```bash
sudo docker-compose up -d db
```

### Connect to Docker DB
```bash
sudo docker-compose exec db psql -U discussit_user -d discussit
```

### View Database Logs
```bash
sudo docker-compose logs db
```

## 🧪 Testing Connection

### From Command Line
```bash
psql -U discussit_user -d discussit -h localhost -p 5432 -c "SELECT version();"
```

### From Python
```python
import psycopg2
conn = psycopg2.connect(
    dbname="discussit",
    user="discussit_user", 
    password="discussit_password_2024",
    host="localhost",
    port="5432"
)
print("✅ Connected!")
conn.close()
```

## 🔐 Security

### Change Password
```bash
sudo -u postgres psql -c "ALTER USER discussit_user WITH PASSWORD 'new_password';"
```

### Create Backup User
```bash
sudo -u postgres psql -c "CREATE USER backup_user WITH PASSWORD 'backup_pass';"
sudo -u postgres psql -c "GRANT CONNECT ON DATABASE discussit TO backup_user;"
```

## 📊 Database Info

### List Databases
```bash
sudo -u postgres psql -l
```

### Show Database Size
```bash
psql -U discussit_user -d discussit -h localhost -p 5432 -c "SELECT pg_size_pretty(pg_database_size('discussit'));"
```

### Show Table Sizes
```bash
psql -U discussit_user -d discussit -h localhost -p 5432 -c "SELECT table_name, pg_size_pretty(pg_total_relation_size(table_name)) FROM information_schema.tables WHERE table_schema='public';"
```

## 🎯 Quick Reference

**Database**: `discussit`
**User**: `discussit_user`  
**Pass**: `discussit_password_2024`
**Host**: `localhost`
**Port**: `5432`

Use these credentials in all your Django and deployment configurations!
