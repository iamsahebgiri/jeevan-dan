import { ApolloClient, HttpLink, split } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import fetch from 'isomorphic-unfetch';
import ws from 'isomorphic-ws';
import React from 'react';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const createHttpLink = () => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/v1/graphql',
    fetch,
  });
  return httpLink;
};

const createWSLink = (token) => {
  return new WebSocketLink(
    new SubscriptionClient(
      process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:8080/v1/graphql',
      {
        lazy: true,
        reconnect: true,
      },
      ws
    )
  );
};

let apolloClient;

export const createApolloClient = (token) => {
  const ssrMode = typeof window === 'undefined';

  const link = !ssrMode
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        createWSLink(token),
        createHttpLink(token)
      )
    : createHttpLink(token);

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          resources: {
            keyArgs: false,
            merge(existing = [], incoming) {
              if (incoming.length === 0) return existing;
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  });
  return new ApolloClient({ ssrMode, link, cache });
};

export const initializeApollo = (initialState = {}, token) => {
  const _apolloClient = apolloClient ?? createApolloClient(token);

  if (initialState) {
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  if (typeof window === 'undefined') {
    return _apolloClient;
  }

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};

export function useApollo(initialState, token) {
  const store = React.useMemo(
    () => initializeApollo(initialState, token),
    [initialState, token]
  );
  return store;
}
