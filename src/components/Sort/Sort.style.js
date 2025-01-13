import styled from 'styled-components';

import COMP1 from 'react-select';

export const Wrapper = styled.div`
  
`;

export const Label = styled.div`
  ${({ theme }) => theme.css.overline}

  margin-bottom: 8px;
`;

export const Sort = styled(COMP1)`
  ${({ theme }) => theme.css.p1};

  display: block;
  width: 100%;
  border-radius: 4px;

  .select__control {
    border: none;
    border: 1px solid ${({ theme }) => theme.color.blue.dark} !important;
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
    background: ${({ theme }) => theme.color.blue.primary};
  }

`;
