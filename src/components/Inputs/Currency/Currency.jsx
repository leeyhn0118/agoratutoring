import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useController } from 'react-hook-form';

import * as S from './Currency.style';

const Currency = ({
  name,
  area,
  label,
  placeholder,
  displayName,
  control,
  required,
  validators,
  defaultValue,
  className,
}) => {
  const [displayValue, setDisplayValue] = useState();
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
    rules: {
      required: required && `${displayName} is required`,
      validate: validators && {
        ...validators.reduce(
          (acc, func) => ({ ...acc, [func.name]: func(displayName) }),
          {}
        ),
      },
    },
  });

  return (
    <S.Wrapper $area={area} className={className}>
      {label && <S.Label htmlFor={`${name}.input`}>{label}</S.Label>}
      <S.Container $error={Boolean(error)}>
        <S.Prefix>$</S.Prefix>
        <S.Currency
          ref={ref}
          id={`${name}.input`}
          type="number"
          name={name}
          value={String(
            displayValue || (value && (value / 100).toFixed(2)) || ''
          )}
          onBlur={(...args) => {
            setDisplayValue(undefined);
            onBlur(...args);
          }}
          onChange={({ target: { value: newValue } }) => {
            setDisplayValue(newValue);
            onChange(
              newValue === '' ? null : parseInt(parseFloat(newValue) * 100, 10)
            );
          }}
          placeholder={placeholder}
        />
      </S.Container>
      <S.Error>{error?.message}</S.Error>
    </S.Wrapper>
  );
};

Currency.defaultProps = {
  area: undefined,
  label: undefined,
  placeholder: undefined,
  validators: [],
  defaultValue: null,
  className: undefined,
};

Currency.propTypes = {
  name: propTypes.string.isRequired,
  area: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
  displayName: propTypes.string.isRequired,
  control: propTypes.object.isRequired,
  required: propTypes.bool.isRequired,
  validators: propTypes.oneOfType([
    propTypes.bool,
    propTypes.arrayOf(propTypes.func),
  ]),
  defaultValue: propTypes.string,
  className: propTypes.string,
};

export default Currency;
