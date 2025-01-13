import React from 'react';
import propTypes from 'prop-types';
import { useController } from 'react-hook-form';

import { isPhoneNumber } from 'src/utilities/validators';

import * as S from './Phone.style';

const Phone = ({
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
        isPhoneNumber: isPhoneNumber(displayName),
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
      <S.Phone
        ref={ref}
        id={`${name}.input`}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={(newValue) => {
          onChange(!newValue || newValue === '' ? null : newValue);
        }}
        placeholder={placeholder}
        $error={Boolean(error)}
        defaultCountry="CA"
      />
      <S.Error>{error?.message}</S.Error>
    </S.Wrapper>
  );
};

Phone.defaultProps = {
  area: undefined,
  label: undefined,
  placeholder: undefined,
  validators: [],
  defaultValue: null,
  className: undefined,
};

Phone.propTypes = {
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

export default Phone;
