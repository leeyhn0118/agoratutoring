import styled from 'styled-components';

export { Wrapper, Label, Error } from '../Inputs.style';

export const Email = styled.input`
  ${({ theme }) => theme.css.p1};

  display: block;
  width: 100%;
  height: 40px;
  padding: 12px 12px 11px 65px;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${({ theme, $error }) => $error ? theme.color.red.dark : theme.bg.hover.medium};
  height: 50px;
  background-color: ${({ theme }) => theme.bg.light};
  :focus-within {
    outline: 1px solid black;
  }
`;
