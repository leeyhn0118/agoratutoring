import React from 'react';
import propTypes from 'prop-types';
import { useController } from 'react-hook-form';

import { isPassword } from 'src/utilities/validators';

import * as S from './Password.style';

const Password = ({
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
  // const [show, setShow] = useState(false);

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
        isPassword: isPassword(displayName),
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
      <S.Container>
        <S.Password
          ref={ref}
          id={`${name}.input`}
          type="password"
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={({ target: { value: newValue } }) => {
            onChange(newValue === '' ? null : newValue);
          }}
          placeholder={placeholder}
          $error={Boolean(error)}
        />
      </S.Container>
      <S.Error>{error?.message}</S.Error>
    </S.Wrapper>
  );
};

Password.defaultProps = {
  area: undefined,
  label: undefined,
  placeholder: undefined,
  validators: [],
  defaultValue: null,
  className: undefined,
};

Password.propTypes = {
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

export default Password;
