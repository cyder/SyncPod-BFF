import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import resolvers from './resolvers';
import typeDefs from './typeDefs';
import SyncpodV1Api from './api/syncpodV1Api';

const CLIENT_HOST = new RegExp(process.env.CLIENT_HOST || '^http://localhost(:[0-9]+)?$');

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    syncpodV1API: new SyncpodV1Api(),
  }),
});

server.applyMiddleware({ app, cors: { credentials: true, origin: CLIENT_HOST } });

export default app;
export { server };
