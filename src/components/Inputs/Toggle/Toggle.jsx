import React from 'react';
import propTypes from 'prop-types';
import { useController } from 'react-hook-form';

import * as S from './Toggle.style';

const Toggle = ({
  name,
  area,
  label,
  placeholder,
  displayName,
  control,
  required,
  options,
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
      required: false,
      validate: validators && {
        ...validators.reduce(
          (acc, func) => ({ ...acc, [func.name]: func(displayName) }),
          {}
        ),
        required: required
          ? (input) => input !== null || `${displayName} is required`
          : undefined,
      },
    },
  });

  return (
    <S.Wrapper $area={area} className={className}>
      {label && <S.Label>{label}</S.Label>}
      <S.Container $error={Boolean(error)}>
        {options.map((option) => (
          <S.ToggleWrapper>
            <S.Toggle
              ref={ref}
              id={`${name}-${option.label}.input`}
              type="radio"
              name={name}
              value={String(option.value)}
              onBlur={onBlur}
              checked={value === option.value}
              onChange={({ target: { value: newValue } }) => {
                if (newValue === 'true') onChange(true);
                else if (newValue === 'false') onChange(false);
                else if (newValue === 'null') onChange(null);
                else onChange(newValue);
              }}
              placeholder={placeholder}
              $error={Boolean(error)}
            />
            <S.ToggleLabel
              htmlFor={`${name}-${option.label}.input`}
              $checked={value === option.value}
            >
              {option.label}
            </S.ToggleLabel>
          </S.ToggleWrapper>
        ))}
      </S.Container>
      <S.Error>{error?.message}</S.Error>
    </S.Wrapper>
  );
};

Toggle.defaultProps = {
  area: undefined,
  label: undefined,
  placeholder: undefined,
  validators: [],
  defaultValue: null,
  className: undefined,
};

Toggle.propTypes = {
  name: propTypes.string.isRequired,
  area: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
  displayName: propTypes.string.isRequired,
  control: propTypes.object.isRequired,
  required: propTypes.bool.isRequired,
  options: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.oneOfType([propTypes.bool, propTypes.string]).isRequired,
      label: propTypes.string.isRequired,
    })
  ).isRequired,
  validators: propTypes.oneOfType([
    propTypes.bool,
    propTypes.arrayOf(propTypes.func),
  ]),
  defaultValue: propTypes.string,
  className: propTypes.string,
};

export default Toggle;
