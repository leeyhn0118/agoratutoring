import React from 'react';
import propTypes from 'prop-types';

import * as S from './MobileMenu.style';

const MobileMenu = ({ onNext }) => (
  <S.MobileMenu>
    {onNext && (
      <S.Next type="button" onClick={onNext}>
        Next
      </S.Next>
    )}
    <S.Search type="submit">Search</S.Search>
  </S.MobileMenu>
);

MobileMenu.defaultProps = {
  onNext: undefined,
};

MobileMenu.propTypes = {
  onNext: propTypes.func,
};

export default MobileMenu;
