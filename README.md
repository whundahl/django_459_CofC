# 459-Class Django Application in Docker
Assignment #4 

## Developmet Dependencies

Django v1.11
Docker
psycopg2-binary v2.7.5
gunicorn v19.6.0
celery v4.2.0
redis v2.10.6
django-tables2 v.Latest
requests v.Latest
requests_oauthlib v.Latest


### Docker Compose Application 

This application consists of 4 docker containers that serve a web application to front end users. Users can log in and create accounts, using secure authentication offered through django. 

Docker compose builds the application based on the docker files that are present in each of the directories listed below, with explinations of each. 

REDIS: This container provides the caching for the message passing between the database and the web container. Redis is a powerful caching software when coupled with web applications and dramatically improves performance by providing the user with faster load times based on past requests made by the browser. 

WEB: The web frameword container holds the source information for the django application and is the driving force behind the presentation layer of the web application. The web container interfaces with the databse layer to provide the user with a presentation of the correct data from within the database, delivered through sveral linked templates. This provides the user with the ability to interact with the database layer of the application. 

POSTGRES: The Database Container contains a Postgres image that is spun up to interact with the server layer, and enevitably the web layer, where the calls to the model are made. This database is set up in conjuction with the django framework to provide easy production of models, in order to persist the data within the application. 

NGINX: The nginx layer contains the server that controls all of the requests for the application and all HTTP calls are handled in this container. When requests are made from the web containter they are then passed to the nginx container which serves the assets to the web container and in turn the browser. 

##### New Build from docker-compose.yml 
`docker-compose up --build`

##### De-compose the application and clean up
`docker-compose down`

##### To Migrate the database after creating new models and views 
Run these commands to enter the terminal inside the docker web container and migrate the databse for a givin app

`docker exec -it <parent_dir_name>_web_1 /bin/bash` Then- `./manage.py migrate <your_app_name>`

To Delete an application from your django project run this command:
`./manage.py migrate <your_app_name> zero`

# Docker Django Project for CSCI-459

### Requirements 
Defined in src/equirements.pip
- Django 1.10  
- gunicorn 19.6.0  
- psycopg2 2.7.5
- celery 4.2.1
- redis 2.10.6

### Basic Usage of Application 
To start the project locally, run these two commands:


### Architechture Behind the Docker-django Web App
I have worked with django several times before and the web framework provides a ModelViewController architectural pattern, making it a fairley easy framework to develop with. I find myself using python for more projects each day and this one is no different. Django when coupled with redis and postgreSQL, presents a microservice architectural pattern. 

Finally, I realized that there is a need to have a fully deployable application without the hassle of having to set up the boilerplate code each time, with the architecture I define. Of course, every project is different and needs a defined architechture but when working with several django projects it can be hard to spin up new instances of differnt applications because of the need to create a virtual environment for development. Docker solves this for us, and provides us with a way to test and develop many applications at one time from a single machine. Additionally, It makes for easier deployment. 


