import { GraphQLClient } from 'graphql-hooks';

export const client = new GraphQLClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});
