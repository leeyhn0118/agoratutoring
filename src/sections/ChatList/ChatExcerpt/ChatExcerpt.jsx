import propTypes from 'prop-types';
import { KeyboardArrowRight } from '@styled-icons/material-outlined';

import * as S from './ChatExcerpt.style';

const ChatExcerpt = ({ chat, chatId, setChatId }) => {
  const recipient = chat.recipients.find(
    ({ context: { isViewer } }) => !isViewer
  );

  return (
    <S.ChatExcerpt
      $active={chat.id === chatId}
      onClick={() => setChatId(chat.id)}
    >
      <S.AvatarLink href={recipient && `/user/${recipient.username}`}>
        <S.Avatar url={recipient?.avatarUrl} />
        <S.UnreadIndicator hasUnreadMessages={chat.context.hasUnreadMessages} />
      </S.AvatarLink>
      <S.MetaWrapper>
        <S.Title>
          {recipient?.name || 'Removed'} · {chat?.post?.title || 'Removed'}
        </S.Title>
        <S.Excerpt>{chat.latestMessage.content}</S.Excerpt>
      </S.MetaWrapper>
      <S.Icon as={KeyboardArrowRight} />
    </S.ChatExcerpt>
  );
};

ChatExcerpt.propTypes = {
  chat: propTypes.shape({
    post: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    context: propTypes.shape({
      hasUnreadMessages: propTypes.bool.isRequired,
    }).isRequired,
    id: propTypes.string.isRequired,
    latestMessage: propTypes.shape({
      content: propTypes.string.isRequired,
    }).isRequired,
    recipients: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string.isRequired,
        username: propTypes.string.isRequired,
        avatarUrl: propTypes.string,
        context: propTypes.shape({
          isViewer: propTypes.bool.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
  chatId: propTypes.string.isRequired,
  setChatId: propTypes.func.isRequired,
};

export default ChatExcerpt;
