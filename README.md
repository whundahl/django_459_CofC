# Docker Django Project at The College of Charleston CSCI-459

## Requirements
Most updated development dependencies are Defined in web/requirements.txt
- Docker
- Django 1.11
- psycopg2-binary 2.7.5
- gunicorn 19.6.0
- celery 4.2.0
- redis 2.10.6
- django-tables2
- requests 
- requests_oauthlib
- materialize.css UI/UX Framework 

### Docker Compose Application 

###### The suggested login information is:

- To Log into the web APP as an admin please use `willtest:pass4admin`

- Of course you can still opt to create your own account and use the application from there.

For any questions about the composition of this appliation please refer to the Django Documentation: https://docs.djangoproject.com/en/1.11/

This application consists of 4 docker containers that serve a web application to front end users. Users can log in and create accounts, using secure authentication offered through django. 

Docker compose builds the application based on the docker files that are present in each of the directories listed below, with explanations of each. 

REDIS: This container provides the caching for the message passing between the database and the web container. Redis is a powerful caching software when coupled with web applications and dramatically improves performance by providing the user with faster load times based on past requests made by the browser. 

WEB: The web framework container holds the source information for the django application and is the driving force behind the presentation layer of the web application. The web container interfaces with the database layer to provide the user with a presentation of the correct data from within the database, delivered through several linked templates. This provides the user with the ability to interact with the database layer of the application. 

POSTGRES: The Database Container contains a Postgres image that is spun up to interact with the server layer, and inevitably the web layer, where the calls to the model are made. This database is set up in conjunction with the django framework to provide easy production of models, in order to persist the data within the application. 

NGINX: The nginx layer contains the server that controls all of the requests for the application and all HTTP calls are handled in this container. When requests are made from the web container they are then passed to the nginx container which serves the assets to the web container and in turn the browser. 

- Please refer to the ADR Directory for more information on the application 

- To Log into the web APP as an admin please use `admin:pass4admin`

## Building the Applicaiton 

##### New Build from docker-compose.yml 
`docker-compose up --build`

##### De-compose the application and clean up
`docker-compose down`

##### To Migrate the database after creating new models and views 
Run these commands to enter the terminal inside the docker web container and migrate the database for a givin app

`docker exec -it <parent_dir_name>_web_1 /bin/bash` then `./manage.py makemigrations` and finally `./manage.py migrate <your_app_name>`

##### Working with the applications in the project 
To Delete an application from your django project run this command:
`./manage.py migrate <your_app_name> zero`

To Add an application to your django project run this command: 
`./manage.py startapp <my_app>`

### Architecture Behind the Docker-django Web App
I have worked with django several times before and the web framework provides a ModelViewController architectural pattern, making it a fairly easy framework to develop with. I find myself using python for more projects each day and this one is no different. Django when coupled with redis and postgreSQL, presents a microservice architectural pattern. 

Finally, I realized that there is a need to have a fully deployable application without the hassle of having to set up the boilerplate code each time, with the architecture I define. Of course, every project is different and needs a defined architecture but when working with several django projects it can be hard to spin up new instances of different applications because of the need to create a virtual environment for development. Docker solves this for us, and provides us with a way to test and develop many applications at one time from a single machine. Additionally, It makes for easier deployment. 

### Rubrics

##### Assignment 1

1. Completeness (20%) Did you complete all the tasks listed above and provide all files necessary to make the application run? Does the application run?

2. ADRs (40%) 
You will be evaluated on:
- Generating an appropriate set of ADRs for your environment. Do you have ADRs for all the key components?
- How well you explain your choices in the ADRs. Why did you select this database (or whatever)? Familiarity with the item is a valid partial justification but there should be more to it than just that.

3. Use of containers (40%)
We will be using containers a lot this semester. For this assignment you will be evaluated on how easily the Dockerfiles can be used to produce a running application

##### Assignment 2

1. Completeness (40%)
Did you complete all the tasks listed above and provide all files necessary to make the application run? Does the application run?

2. ADRs(60%)
You will be evaluated on how well you explain and justify your CRUD, REST,ACID/BASE and container usage.

##### Assignment 4

1. Completeness (60%)
- Did you complete all the tasks listed above?
- Did you provide all the files necessary to make the application run using docker-compose?
- Does the application run?
- Is the data persisted across stops/starts of the containers?
- Is the application packaged as a git repository?

2. ADRs(40%)
- Did you include new ADRs for operational and configuration data?
- Do the ADRs provide justification for your choices with respect to operational and configuration data?