import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { createServer } from 'http';
import { application } from './graphql/modulesLoder';

const startServer = async () => {
  const app = express();
  const httpServer = createServer(app);

  //create a schema given the loaded modules in modulesLoder
  const schema = application.createSchemaForApollo();

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({
    app,
    path: '/api',
  });

  httpServer.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(`✨Server listening on localhost:4000${server.graphqlPath}✨`)
  );
};

startServer();
