import React from 'react';
import { useQuery, useSubscription } from '@apollo/client';
import { Mail } from '@styled-icons/material-outlined';
import { useQueryParam, StringParam } from 'next-query-params';

import ChatExcerpt from './ChatExcerpt';

import query from './ChatList.gql';
import * as S from './ChatList.style';

const ChatList = () => {
  const [chatId, setChatId] = useQueryParam('chat', StringParam);

  const { data, loading, fetchMore } = useQuery(query.viewer, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    variables: { page: { first: 25 } },
  });

  useSubscription(query.chatUpdated, {
    ssr: false,
    shouldResubscribe: true,
    onSubscriptionData: ({
      client: { cache },
      subscriptionData: { data: newData },
    }) => {
      cache.modify({
        id: 'Viewer:{}',
        fields: {
          chats(existing) {
            return {
              ...existing,
              edges: [
                {
                  __typename: 'ChatEdge',
                  node: {
                    __ref: `Chat:${newData.chatUpdated.chat.id}`,
                  },
                },
                ...existing.edges.filter(
                  ({ node }) =>
                    node.__ref !== `Chat:${newData.chatUpdated.chat.id}`
                ),
              ],
            };
          },
        },
      });
    },
  });

  useSubscription(query.chatCreated, {
    ssr: false,
    shouldResubscribe: true,
    onSubscriptionData: ({
      client: { cache },
      subscriptionData: { data: newData },
    }) => {
      cache.modify({
        id: 'Viewer:{}',
        fields: {
          chats(existing) {
            return {
              ...existing,
              edges: [
                {
                  __typename: 'ChatEdge',
                  node: {
                    __ref: `Chat:${newData.chatCreated.chat.id}`,
                  },
                },
                ...existing.edges,
              ],
            };
          },
        },
      });
    },
  });

  return (
    <S.ChatList $hasChat={Boolean(chatId)}>
      <S.TitleWrapper>
        <S.Icon as={Mail} />
        <S.Title>Chats</S.Title>
      </S.TitleWrapper>
      {data && (
        <S.ChatContainer>
          <S.InfiniteScroll
            threshold={40}
            useWindow={false}
            hasMore={!loading && data?.viewer.chats.page.hasNextPage}
            loadMore={() => {
              if (!loading && data?.viewer.chats.page.hasNextPage) {
                fetchMore({
                  variables: {
                    page: {
                      first: 25,
                      after: data.viewer.chats.page.endCursor,
                    },
                  },
                });
              }
            }}
          >
            {data.viewer.chats.edges.length > 0 ? (
              data.viewer.chats.edges.map(({ node }) => (
                <ChatExcerpt
                  key={node.id}
                  chat={node}
                  chatId={chatId}
                  setChatId={setChatId}
                />
              ))
            ) : (
              <S.Error>
                Looks like you don&apos;t have any open chats. Go to the page of
                a post to create one.
              </S.Error>
            )}
          </S.InfiniteScroll>
        </S.ChatContainer>
      )}
    </S.ChatList>
  );
};

ChatList.defaultProps = {
  data: undefined,
};

export default ChatList;
