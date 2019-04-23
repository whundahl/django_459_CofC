## Database: PostreSQL
# Date: 1/22/2019

# Status: Accepted
# Decision makers: William Hundahl 

#Contextual outline:

Using a Dockerfile within database containere to pull an image of PostreSQL, create environment variables, load the configuration data into the application's database. This is called upon when starting the application up with the docker-compose file. 

#Decision:

-Mysql VS mariaDB
The latest version of mariaDB is compatible with PHP while the mysql is slightly dated and less documented online.
Also I've worked in mariaDB before and comfortable with its use.
Lastly from what I've  mariaDB seems to work more naturally with my webserver nginx.   

-data
The data.sql file is a simple create statement that then populates the database.
I did this simply because it was the fastest and easiest way to launch to database.
#consequence:
-data
Since it's a simple set of sql statements the database will only be able to be read.
For future projects I'll need to rebuild the database and how its composed to allows for read and write
