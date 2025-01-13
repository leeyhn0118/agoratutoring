import { useRef, useState } from 'react';
import propTypes from 'prop-types';

import Discard from 'src/components/Discard';

import * as S from './Overlay.style';

const Overlay = ({ open, close, title, alertOnClose, children }) => {
  const containerRef = useRef();
  const [alert, setAlert] = useState(false);

  const handleClick = (e) => {
    if (containerRef.current === e.target) {
      if (alertOnClose) {
        setAlert(true);
      } else {
        close();
      }
    }
  };

  return (
    <>
      <S.Overlay onClick={handleClick} open={open} ref={containerRef}>
        <S.OverlayInner>
          <S.Subheader>
            <S.Title>{title}</S.Title>
            <S.Close onClick={alertOnClose ? () => setAlert(true) : close} />
          </S.Subheader>
          {children}
        </S.OverlayInner>
      </S.Overlay>
      {alertOnClose && (
        <Discard open={alert} close={() => setAlert(false)} onClick={close} />
      )}
    </>
  );
};

Overlay.defaultProps = {
  alertOnClose: false,
};

Overlay.propTypes = {
  open: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  alertOnClose: propTypes.bool,
  children: propTypes.node.isRequired,
};

export default Overlay;
