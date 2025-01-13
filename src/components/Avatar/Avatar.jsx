import React from 'react';
import propTypes from 'prop-types';

import defaultAvatar from 'src/assets/png/default-avatar.png';

import * as S from './Avatar.style';

const Avatar = ({ url, className }) => (
  <S.Avatar className={className} src={url || defaultAvatar.src} />
);

Avatar.defaultProps = {
  url: undefined,
  className: undefined,
};

Avatar.propTypes = {
  url: propTypes.string,
  className: propTypes.string,
};

export default Avatar;
