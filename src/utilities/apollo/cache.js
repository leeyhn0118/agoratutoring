import { InMemoryCache } from '@apollo/client';

export function cursorPagination({ reverse }) {
  return (existing = { edges: [] }, incoming = { edges: [] }, { args }) => {
    if (!args?.page?.after) {
      return incoming;
    }

    return {
      ...existing,
      ...incoming,
      edges: reverse
        ? [...incoming.edges, ...existing.edges]
        : [...existing.edges, ...incoming.edges],
    };
  };
}

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: {
          keyArgs: ['input'],
          merge: cursorPagination({ reverse: false }),
        },
        allPosts: {
          keyArgs: ['filter', 'sort'],
          merge: cursorPagination({ reverse: false }),
        },
      },
    },
    Chat: {
      fields: {
        messages: {
          keyArgs: false,
          merge: cursorPagination({ reverse: false }),
        },
      },
    },
    User: {
      fields: {
        posts: {
          keyArgs: ['sort'],
          merge: cursorPagination({ reverse: false }),
        },
      },
    },
    Viewer: {
      keyFields: [],
      fields: {
        chats: {
          keyArgs: false,
          merge: cursorPagination({ reverse: false }),
        },
      },
    },
    PostContext: {
      merge: true,
    },
    chatUpdatedPayload: {
      merge: true,
    },
  },
});
