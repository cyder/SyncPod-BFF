import { ApolloServer, gql } from "apollo-server";
import * as fs from "fs";
import * as path from "path";

// The GraphQL schema
const typeDefs = gql`
  ${fs.readFileSync(path.resolve(__dirname, "..", "graphql", "types.graphql"), "utf-8")}

  type Query {
    ping: String
    recentlyJoinedRooms(limit: Int): [Room!]!
  }

  type Mutation {
    login(email: String!, password: String!): User
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    ping: () => "pong",
    recentlyJoinedRooms: async (root: any, args: any, context: any, info: any) => {
      return await [
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
  },
  Mutation: {
    login: async (root: any, args: any, context: any, info: any) => {
      return await {
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
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }: { url: any }) => {
  console.log(`🚀 Server ready at ${url}`);
});
