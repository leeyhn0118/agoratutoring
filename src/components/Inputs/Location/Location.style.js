import styled from 'styled-components';

import COMP1 from 'react-select';

export { Wrapper, Label, Error } from '../Inputs.style';

export const Location = styled(COMP1)`
  ${({ theme }) => theme.css.p1};

  display: block;
  width: 100%;
  height: 40px;
  border-radius: 0.25rem;

  .select__control {
    height: 40px;
    border: none;
    border: 0.0625rem solid ${({ theme, $error }) => $error ? theme.color.red.dark : theme.color.blue.dark} !important;
  }

  .select__control--is-focused {
    outline: 1px solid black !important;
    box-shadow: none !important;
    border-color: black !important;
  }

  .select__single-value {
    overflow: visible;
  }

  .select__indicator-separator {
    display: none;
  }

  .select__indicator {
    color: ${({ theme }) => theme.text.light};
  }

  .select__option--is-focused {
    background: ${({ theme }) => theme.bg.medium};
  }

  .select__option--is-selected {
    background: ${({ theme }) => theme.color.blue.primary};

  }

`;
