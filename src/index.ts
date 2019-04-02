import { ApolloServer, gql } from 'apollo-server-express';
import * as fs from 'fs';
import * as path from 'path';
import express from 'express';

import resolvers from './resolvers';

const CLIENT_HOST = new RegExp(process.env.CLIENT_HOST || '^http://localhost(:[0-9]+)?$');
const PORT = process.env.PORT || 4000;

// The GraphQL schema
const typeDefs = gql`
  scalar DateTime
  scalar Date
  scalar Time

  ${fs.readFileSync(path.resolve(__dirname, '..', 'graphql', 'types.graphql'), 'utf-8')}

  type Query {
    ping: String
    recentlyJoinedRooms(limit: Int): [Room!]!
    roomById(id: Int!): Room!
    roomByKey(key: String!): Room!
    popularRooms: [Room!]!
    searchVideos(keyword: String!, pageToken: String): VideoPageInfo!
    videoById(id: String!): Video!
  }

  type Mutation {
    login(email: String!, password: String!): User!
    signup(email: String!, password: String!): User!
    createRoom(name: String!, description: String!, public: Boolean!): Room!
    createUserReport(message: String!): UserReport!
    uploadUserIcon: User! # Not implement yet
  }
`;

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
