import styled from 'styled-components';

export { Wrapper, Label, Error } from '../Inputs.style';

export const Container = styled.fieldset`
  display: flex;
  margin: 0;
  flex-wrap: nowrap;
  align-items: stretch;
  gap: 4px;
  padding: 4px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${({ theme, $error }) => $error ? theme.color.red.dark : theme.color.blue.dark};

  :focus-within {
    outline: 1px solid black;
  }
`;

export const ToggleWrapper = styled.div`
  position: relative;
  flex: 1 1 0px;
`;

export const ToggleLabel = styled.label`
  display: block;
  position: absolute;
  inset: 0;
  text-align: center;
  line-height: 30px;
  pointer-events: none;
  color: ${({ theme, $checked }) => $checked ? theme.text.white : theme.text.base};
  transition: color 0.25s;
`;

export const Toggle = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  cursor: pointer;
  appearance: none;
  border-radius: 2px;
  background: ${({ theme }) => theme.bg.medium};
  transition: background 0.25s;

  :checked {
    background: ${({ theme }) => theme.color.blue.secondary};
  }
`;
