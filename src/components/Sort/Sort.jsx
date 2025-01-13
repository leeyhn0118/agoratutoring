import React from 'react';
import propTypes from 'prop-types';

import * as S from './Sort.style';

const Sort = ({ closest, value, onChange, className }) => {
  const options = [
    ...(closest ? [{ value: 'CLOSEST', label: 'Closer First' }] : []),
    { value: 'NEWEST', label: 'Newer First' },
    { value: 'OLDEST', label: 'Older First' },
    { value: 'RATE_LOW_TO_HIGH', label: 'Lowest Rate First' },
    { value: 'RATE_HIGH_TO_LOW', label: 'Highest Rate First' },
  ];

  return (
    <S.Wrapper className={className}>
      <S.Label htmlFor="sort.input">Sort By</S.Label>
      <S.Sort
        id="sort.input"
        classNamePrefix="select"
        value={options.find((option) => option.value === value)}
        onChange={(newValue) => onChange(newValue.value)}
        options={options}
      />
    </S.Wrapper>
  );
};

Sort.defaultProps = {
  className: undefined,
};

Sort.propTypes = {
  closest: propTypes.bool.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  className: propTypes.string,
};

export default Sort;
