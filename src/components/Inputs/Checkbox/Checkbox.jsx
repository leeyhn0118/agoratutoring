import React from 'react';
import propTypes from 'prop-types';
import { useController } from 'react-hook-form';

import * as S from './Checkbox.style';

const Checkbox = ({
  name,
  area,
  label,
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

  return (
    <S.Wrapper $area={area} className={className}>
      <S.Label>
        <S.Checkbox
          ref={ref}
          id={`${name}.input`}
          type="checkbox"
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          $error={Boolean(error)}
        />
        {label}
      </S.Label>
      <S.Error>{error?.message}</S.Error>
    </S.Wrapper>
  );
};

Checkbox.defaultProps = {
  area: undefined,
  validators: [],
  defaultValue: false,
  className: undefined,
};

Checkbox.propTypes = {
  name: propTypes.string.isRequired,
  area: propTypes.string,
  label: propTypes.string.isRequired,
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

export default Checkbox;
