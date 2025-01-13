import React from 'react';
import propTypes from 'prop-types';

import * as S from './Image.style';

const Image = ({ className, ...rest }) => (
  <S.Image className={className}>
    <S.Component {...rest} />
  </S.Image>
);

Image.defaultProps = {
  className: undefined,
};

Image.propTypes = {
  className: propTypes.string,
};

export default Image;
