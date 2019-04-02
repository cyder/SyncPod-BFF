import { GraphQLDateTime, GraphQLDate, GraphQLTime } from 'graphql-iso-date';

import Query from './resolvers/query';
import Mutation from './resolvers/mutation';

export default {
  Query,
  Mutation,
  DateTime: GraphQLDateTime,
  Date: GraphQLDate,
  Time: GraphQLTime,
};
