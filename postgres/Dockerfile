FROM postgres:latest

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=portal

COPY portal.sql /docker-entrypoint-initdb.d/portal.sql
RUN chmod 777 /docker-entrypoint-initdb.d/portal.sql
