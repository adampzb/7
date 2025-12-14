# Docker Compose Troubleshooting Guide

## Common Issues and Solutions

### 1. ContainerConfig Error

**Error:**
```
KeyError: 'ContainerConfig'
```

**Cause:** Docker Compose v1.29.2 is incompatible with newer Docker Engine versions (24.0+).

**Solutions:**

#### Option A: Use Docker Compose v2
```bash
# Install Docker Compose v2
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Use the new syntax
docker compose up -d
```

#### Option B: Manual Workaround
```bash
docker-compose down --remove-orphans
docker-compose create
docker-compose start
```

#### Option C: Direct Docker Run
```bash
docker run -d -p 8000:8000 \
  --name django_app \
  -e ALLOWED_HOSTS="localhost,127.0.0.1" \
  -e DJANGO_SETTINGS_MODULE="discussit.settings" \
  -v $(pwd):/usr/src/app \
  ds_web
```

### 2. Buildx Requirement Error

**Error:**
```
compose build requires buildx 0.17 or later
```

**Solution:**
```bash
# Install buildx
sudo apt update
sudo apt install -y docker-buildx-plugin

# Or install manually
mkdir -p ~/.docker/cli-plugins/
curl -L https://github.com/docker/buildx/releases/download/v0.10.4/buildx-v0.10.4.linux-amd64 -o ~/.docker/cli-plugins/docker-buildx
chmod +x ~/.docker/cli-plugins/docker-buildx
```

### 3. Version Warning

**Warning:**
```
WARN[0000] /root/ds/docker-compose.yml: the attribute `version` is obsolete
```

**Solution:** Remove the `version` field from docker-compose.yml (already done).

## Recommended Setup

### For Development
```bash
# Build and run
docker-compose build
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### For Production
```bash
# Use Docker Compose v2
docker compose up -d --build

# Or use direct Docker commands for more control
docker build -t myapp:latest .
docker run -d -p 80:8000 myapp:latest
```

## Version Compatibility

| Docker Engine | Docker Compose v1 | Docker Compose v2 |
|---------------|-------------------|-------------------|
| 24.0+         | ❌ Not recommended | ✅ Recommended     |
| 20.10.x       | ✅ Works           | ✅ Works          |
| 19.03.x       | ✅ Works           | ❌ Not available  |

## Troubleshooting Steps

1. **Check versions:**
   ```bash
   docker --version
   docker-compose --version
   ```

2. **Clean environment:**
   ```bash
   docker system prune -a -f
   docker volume prune -f
   ```

3. **Check for conflicting containers:**
   ```bash
   docker ps -a
   docker rm -f <conflicting_containers>
   ```

4. **Try with minimal configuration** to isolate issues
