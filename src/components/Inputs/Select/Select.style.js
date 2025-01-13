import styled from 'styled-components';

import COMP1 from 'react-select';

export { Wrapper, Label, Error } from '../Inputs.style';

export const Select = styled(COMP1)`
  ${({ theme }) => theme.css.p1};

  display: block;
  width: 100%;
  max-width: 640px
  border-radius: 4px;

  .select__control {
    border: none;
    border-radius: 4px;
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

  .select__indicator-separator {
    display: none;
  }

  .select__indicator {
    padding: 9px 8px;
    color: ${({ theme }) => theme.text.light};
  }

  .select__option--is-focused {
    background: ${({ theme }) => theme.bg.medium};
  }

  .select__option--is-selected {
    background: ${({ theme }) => theme.color.blue.light};
  }

  .select__multi-value {
    background-color: ${({ theme }) => theme.color.blue.light};
  }

`;
