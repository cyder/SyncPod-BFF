import { gql } from 'apollo-server-express';
import * as fs from 'fs';
import * as path from 'path';

export default gql`
  scalar DateTime
  scalar Date
  scalar Time

  ${fs.readFileSync(
    path.resolve(__dirname, '..', 'graphql', 'types.graphql'),
    'utf-8',
  )}

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
    signup(email: String!, password: String!, name: String!): User!
    createRoom(name: String!, description: String!, public: Boolean!): Room!
    createUserReport(message: String!): UserReport!
    uploadUserIcon: User! # Not implement yet
  }
`;
