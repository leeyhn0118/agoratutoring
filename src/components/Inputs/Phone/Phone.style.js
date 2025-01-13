import styled from 'styled-components';

import COMP1 from 'react-phone-number-input/input'

export { Wrapper, Label, Error } from '../Inputs.style';

export const Phone = styled(COMP1)`
  ${({ theme }) => theme.css.p1};

  display: block;
  width: 100%;
  height: 40px;
  padding: 12px;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${({ theme, $error }) => $error ? theme.color.red.dark : theme.color.blue.dark};

  :focus-within {
    outline: 1px solid black;
  }
`;
