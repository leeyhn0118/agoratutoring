import { ApolloClient, split, from } from '@apollo/client';
import http from 'http';
import fetch from 'isomorphic-unfetch';
import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { createUploadLink } from 'apollo-upload-client';
import { getMainDefinition } from '@apollo/client/utilities';

import config from 'src/config';

import cache from './cache';

export default function createApolloClient(initialState, ctx) {
  let webSocketImpl;

  if (typeof window === 'undefined') {
    webSocketImpl = require('ws'); // eslint-disable-line global-require
  }

  let headers = {};

  if (ctx && ctx.req) {
    headers = {
      ...ctx.req.headers,
      'X-Forwarded-For': ctx.req.connection.remoteAddress || '',
    };
  }

  const errorLink = onError((errors) => {
    // eslint-disable-next-line no-console
    console.log(errors);
  });

  const uploadLink = createUploadLink({
    fetch,
    headers,
    uri: config.MAIN_API_ENDPOINT,
    credentials: 'include',
    fetchOptions: {
      credentials: 'include',
      agent: http.Agent({ rejectUnauthorized: false }),
    },
  });

  const wsLink =
    typeof window !== 'undefined'
      ? new WebSocketLink({
          uri: config.WS_API_ENDPOINT,
          options: {
            reconnect: true,
          },
          webSocketImpl,
        })
      : null;

  // The split function determines which Link to use
  // depending on the operation type (query, mutation or subscription)
  const splitLink =
    typeof window !== 'undefined' && wsLink
      ? split(
          ({ query }) => {
            const definition = getMainDefinition(query);
            return (
              definition.kind === 'OperationDefinition' &&
              definition.operation === 'subscription'
            );
          },
          wsLink,
          uploadLink
        )
      : uploadLink;

  return new ApolloClient({
    headers,
    credentials: 'include',
    ssrMode: typeof window === 'undefined',
    link: from([errorLink, splitLink]),
    cache: cache.restore(initialState),
  });
}
