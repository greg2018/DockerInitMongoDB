https://www.thetopsites.net/article/52891417.shtml

#01) 
docker-compose up --build -d mongodb

#02) 
docker-compose -f docker-compose.yml up

#03)Shell script/command line  for MongoDB  example
mongo -u admin -p 123456 --eval "printjson(db.serverStatus())"

#04) Shell script/command line create user  for MongoDB  example1
mongo -u admin -p 123456 < demo.js

#05) Shell script/command line create user  for MongoDB  example2
mongo -u admin -p 123456 < demo.js