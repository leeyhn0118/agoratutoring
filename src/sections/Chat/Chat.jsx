import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useLazyQuery, useSubscription } from '@apollo/client';
import { useQueryParam, StringParam } from 'next-query-params';
import { KeyboardArrowLeft } from '@styled-icons/material-outlined';

import scroll from 'src/utilities/scroll';
import useMutationHandler from 'src/hooks/useMutationHandler';

import MessageForm from 'src/components/MessageForm';

import MessageCard from './MessageCard';

import query from './Chat.gql';
import * as S from './Chat.style';

const Chat = () => {
  const chatWrapper = useRef();
  const firstLoad = useRef(true);
  const [value, setValue] = useState('');
  const [chatId, setChatId] = useQueryParam('chat', StringParam);

  const [allMessages, { data, loading, fetchMore }] = useLazyQuery(query.chat, {
    ssr: false,
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      if (firstLoad.current === true) {
        firstLoad.current = false;
        setTimeout(() => scroll.toBottom(chatWrapper.current), 10);
      }
    },
  });

  const [readChat] = useMutationHandler(query.readChat, {
    notifyOnNetworkStatusChange: true,
  });

  const [createMessage] = useMutationHandler(query.createMessage, {
    notifyOnNetworkStatusChange: true,
  });

  useSubscription(query.messageUpdated, {
    ssr: false,
    shouldResubscribe: true,
  });

  useSubscription(query.messageCreated, {
    ssr: false,
    shouldResubscribe: true,
    onSubscriptionData: ({
      client: { cache },
      subscriptionData: { data: newData },
    }) => {
      cache.modify({
        id: `Chat:${newData.messageCreated.message.chat.id}`,
        fields: {
          messages(existing) {
            return {
              ...existing,
              edges: [
                {
                  __typename: 'MessageEdge',
                  node: {
                    __ref: `Message:${newData.messageCreated.message.id}`,
                  },
                },
                ...existing.edges,
              ],
            };
          },
        },
      });

      setTimeout(() => scroll.toBottom(chatWrapper.current), 10);
    },
  });

  useEffect(() => {
    if (chatId) {
      allMessages({
        variables: { input: { id: chatId }, page: { first: 25 } },
      });
      scroll.toBottom(chatWrapper.current);
    }
  }, [chatId]);

  useEffect(() => {
    if (chatId && data?.chat.context.hasUnreadMessages) {
      readChat({ variables: { input: { id: chatId } } });
    }
  }, [data?.chat.context.hasUnreadMessages]);

  useLayoutEffect(() => {
    scroll.toBottom(chatWrapper.current);
  }, []);

  const recipient = data?.chat?.recipients?.find(
    ({ context: { isViewer } }) => !isViewer
  );

  return (
    <S.Chat $hasChat={Boolean(chatId)}>
      <S.TitleWrapper>
        <S.Icon
          as={KeyboardArrowLeft}
          onClick={() => {
            setChatId(undefined);
          }}
        />
        <S.Title>
          {recipient
            ? `${recipient.name} · ${data.chat.post.title}`
            : 'Select a chat'}
        </S.Title>
      </S.TitleWrapper>
      <S.ChatWrapper ref={chatWrapper}>
        <S.InfiniteScroll
          isReverse
          threshold={40}
          useWindow={false}
          hasMore={!loading && data?.chat.messages.page.hasNextPage}
          loadMore={() => {
            if (!loading && data?.chat.messages.page.hasNextPage) {
              fetchMore({
                variables: {
                  input: { id: chatId },
                  page: { first: 25, after: data.chat.messages.page.endCursor },
                },
              });
            }
          }}
        >
          {data &&
            data.chat.messages.edges.length &&
            data.chat.messages.edges.map(({ node }) => (
              <MessageCard key={node.id} node={node} />
            ))}
          {data?.chat.messages.page.hasNextPage === false && (
            <S.StartText>
              Start of conversation with {recipient.name}
            </S.StartText>
          )}
        </S.InfiniteScroll>
      </S.ChatWrapper>
      <S.MessageWrapper>
        <MessageForm
          value={value}
          id="MessageInput"
          placeholder="Chat message"
          disabled={!data?.chat || value === ''}
          onChange={({ target: { value: newValue } }) => setValue(newValue)}
          onClick={() => {
            createMessage({
              variables: {
                input: {
                  chat: chatId,
                  content: value,
                },
              },
            });

            setValue('');
          }}
        />
      </S.MessageWrapper>
    </S.Chat>
  );
};

export default Chat;
