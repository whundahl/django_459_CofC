#!/bin/bash
apt-get update
apt-get install -y netcat

while ! nc -w 1 -z db 5432
do
	sleep 1
done

python manage.py makemigrations
python manage.py migrate --noinput
echo "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', 'pass4admin')" | python manage.py shell
python manage.py runserver 0.0.0.0:8000
