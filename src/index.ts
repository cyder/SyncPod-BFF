import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import resolvers from './resolvers';
import typeDefs from './typeDefs';

const CLIENT_HOST = new RegExp(process.env.CLIENT_HOST || '^http://localhost(:[0-9]+)?$');
const PORT = process.env.PORT || 4000;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, cors: { credentials: true, origin: CLIENT_HOST } });

if (process.env.NODE_ENV !== 'test') {
  app.listen({ port: PORT }, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀  Server ready at localhost:${PORT}${server.graphqlPath}`);
  });
}

export default server;

export { typeDefs, resolvers };
