/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';

import * as S from './Button.style';

const Button = ({
  href,
  type,
  area,
  tabIndex,
  loading,
  disabled,
  outline,
  family,
  onClick,
  className,
  children,
}) => {
  const ref = useRef();
  const dimensions = useRef();

  if (!loading && ref.current) {
    dimensions.current = {
      width: `${ref.current.offsetWidth}px`,
      height: `${ref.current.offsetHeight}px`,
    };
  }

  const button = (
    <S.Button
      ref={ref}
      as={(href && 'a') || undefined}
      type={type}
      tabIndex={tabIndex}
      onClick={onClick}
      disabled={disabled || loading || undefined}
      style={(loading && dimensions.current) || undefined}
      className={className}
      $outline={outline}
      $family={family}
      $area={area}
    >
      {!loading && children}
      {loading && 'Loading...'}
    </S.Button>
  );

  return href ? (
    <Link passHref href={href}>
      {button}
    </Link>
  ) : (
    button
  );
};

Button.defaultProps = {
  href: undefined,
  type: undefined,
  area: undefined,
  tabIndex: undefined,
  loading: false,
  disabled: false,
  outline: false,
  family: 'yellow',
  onClick: undefined,
  className: undefined,
};

Button.propTypes = {
  href: propTypes.string,
  type: propTypes.oneOf(['button', 'submit', 'reset']),
  area: propTypes.string,
  tabIndex: propTypes.number,
  loading: propTypes.bool,
  disabled: propTypes.bool,
  outline: propTypes.bool,
  family: propTypes.oneOf(['yellow', 'blue']),
  onClick: propTypes.func,
  className: propTypes.string,
  children: propTypes.node.isRequired,
};

export default Button;
