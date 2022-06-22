## To run the API locally:

     npm run dev

## To start the database localy with Docker:

 1. run `docker compose up -d`  on your terminal
 2. visit  [http://localhost:5050/](http://localhost:5050/) 
 3.  connect the pgadmin with the credentials on the yml file 
 4.  use the postgres db credentials on the yml file to add the server

## To generate a new ERD:

[https://github.com/keonik/prisma-erd-generator](https://github.com/keonik/prisma-erd-generator)

     npx prisma generate

##  GraphQL Code Generator

I'm using [GraphQL Code Generator](https://www.graphql-code-generator.com/) for type checking with Typescript, this solution helps tremendously with graphql typdef, the only con side is you need to update the typed files each time you modifiy the typdefs of your modules by runing

    npm run generate

( this will overwrite all previous types as I mentioned on the yaml file)

