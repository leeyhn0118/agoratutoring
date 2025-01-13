import propTypes from 'prop-types';

import * as S from './MessageForm.style';

const MessageForm = ({ value, onClick, onChange, disabled, className }) => (
  <S.MessageForm className={className}>
    <S.Wrapper>
      <S.Input
        minRows="1"
        maxRows="3"
        autoCapitalize="off"
        autoComplete="off"
        placeholder="Send a message"
        onChange={onChange}
        value={value}
      />
      <S.Button disabled={disabled} onClick={onClick}>
        Send
      </S.Button>
    </S.Wrapper>
  </S.MessageForm>
);

MessageForm.defaultProps = {
  disabled: false,
  className: undefined,
};

MessageForm.propTypes = {
  value: propTypes.string.isRequired,
  disabled: propTypes.bool,
  onClick: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  className: propTypes.string,
};

export default MessageForm;
