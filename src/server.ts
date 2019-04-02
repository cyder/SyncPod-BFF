import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import resolvers from './resolvers';
import typeDefs from './typeDefs';

const CLIENT_HOST = new RegExp(process.env.CLIENT_HOST || '^http://localhost(:[0-9]+)?$');

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, cors: { credentials: true, origin: CLIENT_HOST } });

export default app;
