## Webserver: nginx
# Date: 1/22/2019

# Status: Accepted
# Decision makers: William Hundahl

#Contextual outline:

Using nginx and Django to build a full web application was an easy decision and allowed for quick development startup with reliable usage and stable, publically supported code for server settings. The nginx container is built from an nginx image pulled from the Docker Hub within the docker-compose file under the project root. 

#Decision:

My choice of django was logically based upon the popularity of the framework. A web framework that is written upon one of the most popular languages today, Python, and as a result finding information regarding documented errors is much easier. I am learning the web framework slowely, but have spent time with React before and thought that it would be adventagous to learn the python based 'equivilant'.

The Choice of nginx was fairly straightforward, as it seems to be the most popular choice amungst the Django community. It is easy to set up, light-weight and has outstanding performance, while being backed by a strong opensource community. Additonally, Django has opensorce backend support for nginx and which allows for easy configuration. 


