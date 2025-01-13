import React from 'react';
import propTypes from 'prop-types';

import * as S from './Link.style';

const Link = ({ href, ...rest }) => (
  <S.Link passHref href={href}>
    <S.Component {...rest} />
  </S.Link>
);

Link.propTypes = {
  href: propTypes.string.isRequired,
};

export default Link;
