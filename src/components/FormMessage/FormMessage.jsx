import React, { useRef, useEffect } from 'react';
import propTypes from 'prop-types';

import theme from 'src/theme';

import * as S from './FormMessage.style';

const color = {
  info: theme.color.blue.dark,
  error: theme.color.red.dark,
  success: theme.color.green.dark,
};

const FormMessage = ({ message }) => {
  const ref = useRef();

  useEffect(() => {
    if (message) ref.current.scrollIntoView();
  }, [message]);

  if (!message) return null;

  return (
    <S.FormMessage ref={ref} $color={color[message.level]}>
      <S.Message>{message.content}</S.Message>
    </S.FormMessage>
  );
};

FormMessage.defaultProps = {
  message: undefined,
};

FormMessage.propTypes = {
  message: propTypes.shape({
    level: propTypes.oneOf(['success', 'info', 'error']),
    content: propTypes.string.isRequired,
  }),
};

export default FormMessage;
