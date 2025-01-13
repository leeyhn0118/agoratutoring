import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useController } from 'react-hook-form';

import * as S from './Chips.style';

function valueToOptions(value) {
  return value
    ? value.map((option) => ({
        value: option,
        label: option,
      }))
    : null;
}

function optionsToValue(options) {
  return options && options.map((option) => option.value);
}

const Chips = ({
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
  const [inputValue, onInputChange] = useState('');
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

  const onKeyDown = (event) => {
    if (!inputValue) return;

    if (event.key === 'Enter') {
      event.preventDefault();
      onChange([...(value || []), inputValue]);
      onInputChange('');
    }
  };

  return (
    <S.Wrapper $area={area} className={className}>
      {label && <S.Label htmlFor={`${name}.input`}>{label}</S.Label>}
      <S.Chips
        isMulti
        ref={ref}
        isClearable
        id={`${name}.input`}
        classNamePrefix="select"
        name={name}
        inputValue={inputValue}
        value={valueToOptions(value)}
        onBlur={(...args) => {
          if (inputValue) {
            onChange([...(value || []), inputValue]);
          }
          onBlur(...args);
        }}
        onChange={(newValue) => {
          onChange(optionsToValue(newValue));
        }}
        onInputChange={onInputChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        $error={Boolean(error)}
        menuIsOpen={false}
      />
      <S.Error>{error?.message}</S.Error>
    </S.Wrapper>
  );
};

Chips.defaultProps = {
  area: undefined,
  label: undefined,
  placeholder: undefined,
  validators: [],
  defaultValue: null,
  className: undefined,
};

Chips.propTypes = {
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

export default Chips;
