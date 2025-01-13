import styled from 'styled-components';

export { Wrapper, Error } from '../Inputs.style';

const checkmark = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'%3E%3Cpath d='m12.5 5-6 6-3-3' stroke='%2315355F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A";

export const Label = styled.label`
  display: flex;
  line-height: 1;
  font-weight: 500;
  font-size: 0.875rem;
  align-items: center;
  color: ${({ theme }) => theme.text.medium};
  margin-bottom: 2px;
`;

export const Checkbox = styled.input`
  display: inline-block;
  width: 18px;
  height: 18px;
  cursor: pointer;
  appearance: none;
  background: none;

  flex-shrink: 0;
  margin: 0 6px 0 0;
  border-radius: 2px;
  color: ${({ theme }) => theme.color.blue.dark};
  border: 0.0625rem solid ${({ theme, $error }) => $error ? theme.color.red.dark : theme.color.blue.dark};

  background-image: url("${checkmark}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 0px 0px;

  :checked {
    background-size: 16px 16px;
  }

  :focus-visible {
    outline: max(2px, 0.15em) solid black;
    outline-offset: max(2px, 0.15em);
  }
`;
