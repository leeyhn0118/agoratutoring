import propTypes from 'prop-types';

import convertDate from 'src/utilities/convertDate';

import * as S from './MessageCard.style';

const MessageCard = ({ node }) => (
  <S.MessageCard isSender={node.context.isSender}>
    <S.Avatar url={node?.sender?.avatarUrl} />
    <S.Username>
      {node?.sender?.name || node?.sender?.username || 'Removed'}
    </S.Username>
    <S.Created>{convertDate(node.created, true, false, true)}</S.Created>
    <S.Content>{node.content}</S.Content>
    <S.Status>
      {node.context.isSender && node.readers.length === 1 && 'read'}
    </S.Status>
  </S.MessageCard>
);

MessageCard.propTypes = {
  node: propTypes.shape({
    sender: propTypes.shape({
      name: propTypes.string,
      avatarUrl: propTypes.string,
      username: propTypes.string.isRequired,
    }),
    created: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    context: propTypes.shape({
      isSender: propTypes.bool.isRequired,
    }).isRequired,
    readers: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default MessageCard;
