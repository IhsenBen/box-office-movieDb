to run the api locally:
npm run dev


to start the database localy with pgadmin:

1- docker compose up -d
2- visit  http://localhost:5050/
3- connect the pgadmin with the credentials on the yml file
4- use the postgres db credentials on the yml file to add the server

to generate a new ERD:

https://github.com/keonik/prisma-erd-generator

 npx prisma generate