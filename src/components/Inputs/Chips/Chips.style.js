import styled from 'styled-components';

import COMP1 from 'react-select/creatable';

export { Wrapper, Label, Error } from '../Inputs.style';

export const Chips = styled(COMP1)`
  ${({ theme }) => theme.css.p1};

  display: block;
  width: 100%;
  border-radius: 4px;

  .select__control {
    border: none;
    border: 1px solid ${({ theme, $error }) => $error ? theme.color.red.dark : theme.color.blue.dark} !important;
  }

  .select__control--is-focused {
    outline: 1px solid black !important;
    box-shadow: none !important;
    border-color: black !important;
  }

  .select__value-container {
    padding: 3px 8px;
  }

  .select__single-value {
    overflow: visible;
  }

  .select__indicators {
    display: none;
  }
`;
