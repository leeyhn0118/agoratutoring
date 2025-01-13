/* eslint-disable prettier/prettier */
import React from 'react';
import propTypes from 'prop-types';
import { useController } from 'react-hook-form';

import * as S from './Select.style';

function valueToOptions(value, multiple) {
  if (!value || value.length === 0) return null;
  return multiple
    ? value.map((option) => ({
        value: option,
        label: option,
      }))
    : { value, label: value };
}

function optionsToValue(options, multiple) {
  return (
    options &&
    (multiple ? options.map((option) => option.value) : options.value)
  );
}

const Select = ({
  name,
  area,
  label,
  options,
  placeholder,
  displayName,
  control,
  required,
  multiple,
  disabled,
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
      <S.Select
        ref={ref}
        isClearable
        isDisabled={disabled}
        id={`${name}.input`}
        classNamePrefix="select"
        name={name}
        value={valueToOptions(value, multiple)}
        onBlur={onBlur}
        onChange={(newValue) => {
          onChange(optionsToValue(newValue, multiple));
        }}
        placeholder={placeholder}
        $error={Boolean(error)}
        options={options.map((option) => ({
          value: option,
          label: option,
        }))}
        isMulti={multiple}
      />
      <S.Error>{error?.message}</S.Error>
    </S.Wrapper>
  );
};

Select.defaultProps = {
  area: undefined,
  label: undefined,
  placeholder: undefined,
  multiple: false,
  disabled: false,
  validators: [],
  defaultValue: null,
  className: undefined,
};

Select.propTypes = {
  name: propTypes.string.isRequired,
  area: propTypes.string,
  label: propTypes.string,
  options: propTypes.arrayOf(propTypes.string).isRequired,
  placeholder: propTypes.string,
  displayName: propTypes.string.isRequired,
  control: propTypes.object.isRequired,
  required: propTypes.bool.isRequired,
  multiple: propTypes.bool,
  disabled: propTypes.bool,
  validators: propTypes.oneOfType([
    propTypes.bool,
    propTypes.arrayOf(propTypes.func),
  ]),
  defaultValue: propTypes.string,
  className: propTypes.string,
};

export default Select;
