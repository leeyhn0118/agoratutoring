import React from 'react';
import propTypes from 'prop-types';
import Portal from 'react-modal';

import * as S from './Modal.style';

Portal.setAppElement('#__next');

const Modal = ({ title, position, open, close, className, children }) => {
  const modalCustomStyles = {
    overlay: {
      position: 'fixed',
      zIndex: 10,
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: position,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    content: {
      position: 'static', // to override default styles
      padding: '0',
      inset: 'null',
      border: 'none',
      width: 'auto',
      height: 'auto',
      background: 'none',
      borderRadius: 'none',
    },
  };

  return (
    <Portal
      style={modalCustomStyles}
      isOpen={open}
      contentLabel={title}
      onRequestClose={close}
      shouldCloseOnOverlayClick
    >
      <S.Modal $position={position} className={className}>
        <S.Title>{title}</S.Title>
        <S.CloseButton aria-label="Close Modal" onClick={close}>
          <S.CloseIcon />
        </S.CloseButton>
        {children}
      </S.Modal>
    </Portal>
  );
};

Modal.defaultProps = {
  className: undefined,
};

Modal.propTypes = {
  title: propTypes.string.isRequired,
  position: propTypes.oneOf(['center', 'end']).isRequired,
  open: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
  className: propTypes.string,
  children: propTypes.node.isRequired,
};

export default Modal;
