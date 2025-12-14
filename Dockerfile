# pull the official base image
FROM python:3.12-slim

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV SECRET_KEY 'secret_key'

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# install dependencies
COPY ./requirements.txt /usr/src/app
RUN pip install --no-cache-dir -r requirements.txt

# copy project
COPY . /usr/src/app

# Create necessary directories
RUN mkdir -p /usr/src/app/logs /usr/src/app/staticfiles /usr/src/app/media

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
