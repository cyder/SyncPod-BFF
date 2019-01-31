import { ApolloServer, gql } from "apollo-server-express";
import * as fs from "fs";
import * as path from "path";
import express from "express";
import { GraphQLDateTime, GraphQLDate, GraphQLTime } from "graphql-iso-date";

const API_HOST = process.env.NODE_ENV === "production" ? "https://api.sync-pod.com" : "http://localhost:3000s";
const PORT = 4000;

// The GraphQL schema
const typeDefs = gql`
  scalar DateTime
  scalar Date
  scalar Time

  ${fs.readFileSync(path.resolve(__dirname, "..", "graphql", "types.graphql"), "utf-8")}

  type Query {
    ping: String
    recentlyJoinedRooms(limit: Int): [Room!]!
    roomById(id: Int!): Room!
    roomByKey(key: String!): Room!
    popularRooms: [Room!]!
  }

  type Mutation {
    login(email: String!, password: String!): User!
    createRoom(name: String!, description: String!, public: Boolean!): Room!
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    ping: () => "pong",
    recentlyJoinedRooms: (root: any, args: any, context: any, info: any) => {
      return [
        {
          id: 790,
          name: "MyString",
          description: "MyText",
          key: "rvS5ovc8",
          public: false,
          nowPlayingVideo: null, // あとで変更する
          lastPlayedVideo: null, // あとで変更する
          onlineUsers: [], // あとで変更する
        },
        {
          id: 928,
          name: "MyString",
          description: "MyText",
          key: "rvS5ovc8",
          public: true,
          nowPlayingVideo: null, // あとで変更する
          lastPlayedVideo: null, // あとで変更する
          onlineUsers: [], // あとで変更する
        },
      ];
    },
    roomById: (root: any, args: any, context: any, info: any) => {
      return {
        id: 1114,
        name: "MyString",
        description: "MyText",
        key: "Da4D0oPj",
        public: false,
        now_playing_video: null,
        last_played_video: null,
        online_users: [],
        create_user: {
          id: 1992,
          name: "MyString",
          icon: null,
        },
      };
    },
    roomByKey: (root: any, args: any, context: any, info: any) => {
      return {
        id: 1119,
        name: "MyString",
        description: "MyText",
        key: "lBMdoiq4",
        public: false,
        now_playing_video: null,
        last_played_video: null,
        online_users: [],
        create_user: {
          id: 1997,
          name: "MyString",
          url: null,
        },
      };
    },
    popularRooms: (root: any, args: any, context: any, info: any) => {
      return [
        {
          id: 1120,
          name: "public room",
          description: "MyText",
          key: "bxsUcUj1",
          public: true,
          now_playing_video: null,
          last_played_video: null,
          online_users: [
            {
              id: 1998,
              name: "MyString",
              url: null,
            },
          ],
          create_user: {
            id: 1998,
            name: "MyString",
            url: null,
          },
        },
      ];
    },
  },
  Mutation: {
    login: (root: any, args: any, context: any, info: any) => {
      return {
        id: 69,
        icon: null,
        email: "user@example.com",
        name: "MyString",
        access_token: "69:q1aXhT-onz4sWejxcV1s",
        created_at: "2018-03-31T07:35:05.000Z",
        updated_at: "2018-03-31T07:35:05.000Z",
        self_introduction: null,
      };
    },
    createRoom: (root: any, args: any, context: any, info: any) => {
      return {
        id: 1112,
        name: "MyString",
        description: "MyText",
        key: "dAg2r_u9",
        public: true,
        now_playing_video: null, // あとで変更する
        last_played_video: null, // あとで変更する
        online_users: [], // あとで変更する
        create_user: {
          id: 1988,
          name: "MyString",
          url: null,
        },
      };
    },
  },
  DateTime: GraphQLDateTime,
  Date: GraphQLDate,
  Time: GraphQLTime,
};

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, cors: { credentials: true, origin: API_HOST } });

app.listen({ port: PORT }, () => {
  console.log(`🚀  Server ready at localhost:${PORT}${server.graphqlPath}`);
});
