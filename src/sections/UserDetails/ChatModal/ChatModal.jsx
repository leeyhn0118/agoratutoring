import React, { useState } from 'react';
import propTypes from 'prop-types';

import useMutationHandler from 'src/hooks/useMutationHandler';

import query from './ChatModal.gql';
import * as S from './ChatModal.style';

const ChatModal = ({ post, open, setOpen }) => {
  const [value, setValue] = useState('');

  const [createMessage] = useMutationHandler(query.createChat, {
    notifyOnNetworkStatusChange: true,
    onCompleted: ({ addNotification }) => {
      setOpen(false);
      addNotification({
        type: 'toast',
        level: 'success',
        timeout: 10000,
        content: 'Your message has been sent successfully.',
      });
    },
  });

  const handleClick = () => {
    createMessage({ variables: { input: { post: post.id, content: value } } });
  };

  return (
    <S.ChatModal
      title="Send Message"
      position="center"
      open={open}
      close={() => setOpen(false)}
      contentLabel="Create Chat Modal"
    >
      <S.Input
        minRows="4"
        maxRows="7"
        autoCapitalize="off"
        autoComplete="off"
        placeholder="Send a message"
        onChange={({ target: { value: newValue } }) => setValue(newValue)}
        value={value}
      />
      <S.Button disabled={value === ''} onClick={handleClick}>
        Send Message
      </S.Button>
    </S.ChatModal>
  );
};

ChatModal.propTypes = {
  post: propTypes.shape({
    id: propTypes.string.isRequired,
  }).isRequired,
  open: propTypes.bool.isRequired,
  setOpen: propTypes.func.isRequired,
};

export default ChatModal;
