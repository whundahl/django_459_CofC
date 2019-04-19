FROM python:3.6-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

RUN mkdir /src
WORKDIR /src

RUN pip install --upgrade pip
ADD requirements.txt /src/
RUN easy_install certifi
RUN pip install -r requirements.txt

ENV HTTP_PROXY "http://root:pass4root@192.168.1.79:3128"
ENV https_proxy "https://root:pass4root@192.168.1.79:3128"