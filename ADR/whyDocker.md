# Why Docker-Compose, Dockerfiles, and Containers
# Date: 2/5/2019

# Status: Accepted
# Decision makers: William Hundahl

## Dockerfiles coupled with the docker-compose.yml file

- With the combination of Dockerfiles and docker-compose an application can be quickly built simply by executing the single docker-compose file. This compose file calls the Dockerfiles which then pull a docker image from the docker hub, containing the database program. These Images are built into separate containers which are then linked to each other. The linking and environment variables are set with in the docker-compose file.

- I find this to be especially handy because the application is incredibly modular which is a result of the Docker architecture, and made possible by the docker engine. Unfortunatly in order to run the application the host machine needs to be provisioned with docker ahead of time to take advantage of containerized environments. 

## Why this is good for this application

- In regards to this application - building this in docker allowed for separation of systems. Meaning my DB, Webserver, and templating code are all within their own containers. This isolation was extremely helpful for me during development:
  