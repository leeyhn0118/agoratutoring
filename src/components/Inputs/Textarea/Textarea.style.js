import styled from 'styled-components';

export { Wrapper, Label, Error } from '../Inputs.style';

export const Textarea = styled.textarea`
  ${({ theme }) => theme.css.p1};

  display: block;
  width: 100%;
  padding: 12px;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${({ theme, $error }) => $error ? theme.color.red.dark : theme.color.blue.dark};

  resize: none;

  :focus-within {
    outline: 1px solid black;
  }
`;
