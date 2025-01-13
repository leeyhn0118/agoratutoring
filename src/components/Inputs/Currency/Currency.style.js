import styled from 'styled-components';

export { Wrapper, Label, Error } from '../Inputs.style';

export const Container = styled.div`
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({ theme, $error }) => $error ? theme.color.red.dark : theme.color.blue.dark};

  :focus-within {
    outline: 1px solid black;
  }
`;

export const Prefix = styled.span`
  display: block;
  width: 38px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  background: ${({ theme }) => theme.bg.medium};
`;

export const Currency = styled.input`
  ${({ theme }) => theme.css.p1};

  display: block;
  width: calc(100% - 38px);
  height: 38px;
  padding: 12px;
  border: none;

  -moz-appearance: textfield;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
