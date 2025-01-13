import React from 'react';
import propTypes from 'prop-types';

import * as S from './ProgressBar.style';

const ProgressBar = ({ progress, className }) => (
  <S.ProgressBar className={className} $width={progress * 100} />
);

ProgressBar.defaultProps = {
  className: undefined,
};

ProgressBar.propTypes = {
  progress: propTypes.number.isRequired,
  className: propTypes.string,
};

export default ProgressBar;
