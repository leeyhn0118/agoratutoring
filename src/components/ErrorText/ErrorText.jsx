import propTypes from 'prop-types';

import * as S from './ErrorText.style';

const ErrorText = ({ title, children }) => (
  <S.ErrorText>
    <S.Title>{title}</S.Title>
    <S.Text>{children}</S.Text>
  </S.ErrorText>
);

ErrorText.defaultProps = {
  title: 'Something went wrong',
  children: 'An error occured. Please try again.',
};

ErrorText.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};

export default ErrorText;
