import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useController } from 'react-hook-form';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import * as S from './Coordinates.style';

function valueToOption(value) {
  return value?.coordinates && value?.address
    ? { value: value.coordinates, label: value.address }
    : null;
}

function dataToOptions(data) {
  return (
    data &&
    data.map((location) => ({
      value: location.description,
      label: location.description,
    }))
  );
}

const Coordinates = ({
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

  const {
    value: inputValue,
    setValue: onInputChange,
    suggestions: { data },
  } = usePlacesAutocomplete({ requestOptions: { types: ['(regions)'] } });

  return (
    <S.Wrapper $area={area} className={className}>
      {label && <S.Label htmlFor={`${name}.input`}>{label}</S.Label>}
      <S.Coordinates
        ref={ref}
        isClearable
        id={`${name}.input`}
        classNamePrefix="select"
        name={name}
        onBlur={onBlur}
        value={valueToOption(displayValue)}
        inputValue={inputValue}
        onChange={async (newValue) => {
          if (newValue) {
            const results = await getGeocode({ address: newValue.value });
            const { lat, lng } = await getLatLng(results[0]);

            onChange({ coordinates: [lat, lng], address: newValue.value });
            setDisplayValue({
              coordinates: [lat, lng],
              address: newValue.value,
            });
          } else {
            onChange(null);
            setDisplayValue(null);
          }
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

Coordinates.defaultProps = {
  area: undefined,
  label: undefined,
  placeholder: undefined,
  validators: [],
  defaultValue: null,
  className: undefined,
};

Coordinates.propTypes = {
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

export default Coordinates;
