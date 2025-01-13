import propTypes from 'prop-types';

import * as S from './Discard.style';

const Discard = ({ open, close, title, text, discard, cancel, onClick }) => (
  <S.Discard open={open}>
    <S.DiscardInner>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
      <S.Wrapper>
        <S.DiscardButton
          type="button"
          onClick={() => {
            onClick();
            close();
          }}
        >
          {discard}
        </S.DiscardButton>
        <S.Or>or</S.Or>
        <S.CancelButton type="button" onClick={close}>
          {cancel}
        </S.CancelButton>
      </S.Wrapper>
    </S.DiscardInner>
  </S.Discard>
);

Discard.defaultProps = {
  title: 'Discard Changes',
  text: 'Are you sure you want to discard your changes? This action cannot be undone.',
  discard: 'Discard',
  cancel: 'Cancel',
};

Discard.propTypes = {
  open: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
  title: propTypes.string,
  text: propTypes.string,
  discard: propTypes.string,
  cancel: propTypes.string,
  onClick: propTypes.func.isRequired,
};

export default Discard;
