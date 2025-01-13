import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { useController } from 'react-hook-form';
import usePlacesAutocomplete from 'use-places-autocomplete';

import * as S from './Location.style';

function valueToOptions(value) {
  return value ? { value, label: value.address } : null;
}

function dataToOptions(data) {
  return (
    data &&
    data.map((location) => ({
      value: { place: location.place_id },
      label: location.description,
    }))
  );
}

const Location = ({
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
        ...validators.reduce(
          (acc, func) => ({ ...acc, [func.name]: func(displayName) }),
          {}
        ),
      },
    },
  });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (value && value.address) {
      onChange({ place: value.place });
    }
  }, [value]);

  const {
    value: inputValue,
    setValue: onInputChange,
    suggestions: { data },
  } = usePlacesAutocomplete({ requestOptions: { types: ['address'] } });

  return (
    <S.Wrapper $area={area} className={className}>
      {label && <S.Label htmlFor={`${name}.input`}>{label}</S.Label>}
      <S.Location
        ref={ref}
        isClearable
        id={`${name}.input`}
        classNamePrefix="select"
        name={name}
        onBlur={onBlur}
        value={valueToOptions(displayValue)}
        inputValue={inputValue}
        onChange={(newValue) => {
          onChange(newValue ? { place: newValue.value.place } : null);
          setDisplayValue(
            newValue
              ? { place: newValue.value.place, address: newValue.label }
              : null
          );
        }}
        onInputChange={(newValue) => {
          onInputChange(newValue);
        }}
        placeholder={placeholder}
        $error={Boolean(error)}
        options={dataToOptions(data)}
        noOptionsMessage={() => 'Loading...'}
        menuIsOpen={inputValue && inputValue.length > 0 ? undefined : false}
      />
      <S.Error>{error?.message}</S.Error>
    </S.Wrapper>
  );
};

Location.defaultProps = {
  area: undefined,
  label: undefined,
  placeholder: undefined,
  validators: [],
  defaultValue: null,
  className: undefined,
};

Location.propTypes = {
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

export default Location;
