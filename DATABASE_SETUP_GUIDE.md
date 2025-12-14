# DiscussIt Database Setup Guide

This guide provides detailed instructions for setting up the PostgreSQL database for your DiscussIt application.

## 📋 Database Information

### Our Database Configuration

**Database Details:**
- **Database Name**: `discussit`
- **Database User**: `discussit_user`
- **Database Password**: `discussit_password_2024`
- **Database Host**: `localhost` (or `db` when using Docker)
- **Database Port**: `5432`

**Connection String:**
```
postgres://discussit_user:discussit_password_2024@localhost:5432/discussit
```

## 🛠️ Database Setup Instructions

### Method 1: Manual Database Setup (Current Server)

#### 1. Connect to PostgreSQL

```bash
sudo -u postgres psql
```

#### 2. Create Database

```sql
CREATE DATABASE discussit;
```

#### 3. Create Database User

```sql
CREATE USER discussit_user WITH PASSWORD 'discussit_password_2024';
```

#### 4. Grant Privileges

```sql
GRANT ALL PRIVILEGES ON DATABASE discussit TO discussit_user;
```

#### 5. Exit PostgreSQL

```sql
\q
```

### Method 2: Using Command Line (Recommended)

```bash
# Create database
sudo -u postgres psql -c "CREATE DATABASE discussit;"

# Create user
sudo -u postgres psql -c "CREATE USER discussit_user WITH PASSWORD 'discussit_password_2024';"

# Grant privileges
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE discussit TO discussit_user;"
```

### Method 3: Docker Database Setup

If using Docker, the database will be automatically created when you run:

```bash
sudo docker-compose up -d
```

The database credentials will be configured in your `.env` file.

## 🔧 Database Configuration

### Update Django Settings

Edit your `discussit/settings.py` file:

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

### Update Environment Variables

Edit your `.env` file:

```bash
DATABASE_URL=postgres://discussit_user:discussit_password_2024@localhost:5432/discussit
```

For Docker deployment:
```bash
DATABASE_URL=postgres://discussit_user:discussit_password_2024@db:5432/discussit
```

## 🔄 Database Management Commands

### Connect to Database

```bash
psql -U discussit_user -d discussit -h localhost -p 5432
```

You'll be prompted for the password: `discussit_password_2024`

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

## 🐳 Docker Database Setup

### Docker Compose Configuration

Your `docker-compose.yml` should include:

```yaml
services:
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: discussit
      POSTGRES_USER: discussit_user
      POSTGRES_PASSWORD: discussit_password_2024
    volumes:
      - postgres_data:/var/lib/postgresql/data/
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

### Start Database Container

```bash
sudo docker-compose up -d db
```

### Connect to Docker Database

```bash
sudo docker-compose exec db psql -U discussit_user -d discussit
```

## 🔐 Security Best Practices

### Change Database Password

```bash
sudo -u postgres psql -c "ALTER USER discussit_user WITH PASSWORD 'new_secure_password';"
```

### Create Backup User

```bash
sudo -u postgres psql -c "CREATE USER discussit_backup WITH PASSWORD 'backup_password';"
sudo -u postgres psql -c "GRANT CONNECT ON DATABASE discussit TO discussit_backup;"
```

### Restrict Database Access

Edit `pg_hba.conf` (usually at `/etc/postgresql/15/main/pg_hba.conf`):

```
# TYPE  DATABASE        USER            ADDRESS                 METHOD
local   discussit       discussit_user                              md5
host    discussit       discussit_user      127.0.0.1/32            md5
host    discussit       discussit_user      ::1/128                 md5
```

Then reload PostgreSQL:
```bash
sudo systemctl reload postgresql
```

## 🧪 Testing Database Connection

### Test Connection from Command Line

```bash
psql -U discussit_user -d discussit -h localhost -p 5432 -c "SELECT version();"
```

### Test Connection from Django

```bash
python manage.py check
python manage.py migrate --check
```

### Test Connection from Python

```python
import psycopg2

try:
    conn = psycopg2.connect(
        dbname="discussit",
        user="discussit_user",
        password="discussit_password_2024",
        host="localhost",
        port="5432"
    )
    print("✅ Database connection successful!")
    conn.close()
except Exception as e:
    print(f"❌ Database connection failed: {e}")
```

## 📋 Troubleshooting

### Common Issues and Solutions

**Issue: Authentication failed**
- Verify username and password
- Check `pg_hba.conf` for correct authentication methods
- Restart PostgreSQL: `sudo systemctl restart postgresql`

**Issue: Database does not exist**
- Create the database: `sudo -u postgres createdb discussit`
- Verify database exists: `sudo -u postgres psql -l`

**Issue: User does not exist**
- Create the user: `sudo -u postgres createuser discussit_user`
- Set password: `sudo -u postgres psql -c "ALTER USER discussit_user WITH PASSWORD 'discussit_password_2024';"`

**Issue: Permission denied**
- Grant privileges: `sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE discussit TO discussit_user;"`
- Grant schema privileges: `sudo -u postgres psql -d discussit -c "GRANT ALL ON SCHEMA public TO discussit_user;"`

**Issue: Connection refused**
- Check if PostgreSQL is running: `sudo systemctl status postgresql`
- Verify port: `netstat -tuln | grep 5432`
- Check firewall: `sudo ufw status`

## 🔄 Database Migration

### Apply Django Migrations

```bash
python manage.py migrate
```

### Create Database Schema

```bash
python manage.py makemigrations
python manage.py migrate
```

### Reset Database (Development Only)

```bash
python manage.py flush
python manage.py migrate --run-syncdb
```

## 📚 Useful PostgreSQL Commands

### List Databases
```bash
sudo -u postgres psql -l
```

### List Users
```bash
sudo -u postgres psql -c "\du"
```

### List Tables in Database
```bash
psql -U discussit_user -d discussit -h localhost -p 5432 -c "\dt"
```

### Show Database Size
```bash
psql -U discussit_user -d discussit -h localhost -p 5432 -c "SELECT pg_size_pretty(pg_database_size('discussit'));"
```

### Show Table Sizes
```bash
psql -U discussit_user -d discussit -h localhost -p 5432 -c "
SELECT table_name, pg_size_pretty(pg_total_relation_size(table_name)) as size 
FROM information_schema.tables WHERE table_schema='public';
"
```

## 🎯 Summary

You now have a fully configured PostgreSQL database for your DiscussIt application:

- **Database Name**: `discussit`
- **Username**: `discussit_user`
- **Password**: `discussit_password_2024`
- **Host**: `localhost` or `db` (Docker)
- **Port**: `5432`

Use these credentials in your Django settings and environment variables to connect your application to the database.
