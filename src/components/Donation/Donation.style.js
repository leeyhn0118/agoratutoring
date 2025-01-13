import styled from 'styled-components';

import COMP1 from 'src/components/Button';

export const Button = styled(COMP1)`
  display: block;
  width: 100%;
`;

export const RadioWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const RadioLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  color: ${({ theme }) => theme.text.base};
  font-weight: ${({ $checked }) => $checked ? 600 : 400};
  transition: color 0.25s;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg.medium};
    transition: background 0.25s;
  }

  ::after {
    content: '';
    position: absolute;
    left: 7px;
    top: 50%;
    transform: translateY(-50%);
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.blue.secondary};
    opacity: ${({ $checked }) => $checked ? 1 : 0};
    transition: opacity 0.25s;
  }
`;

export const Radio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const Input = styled.input`
  position: relative;
  margin-top: -15px;
  display: block;
  width: 100%;
  height: 40px;
  padding: 12px;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${({ theme, $error }) => $error ? theme.color.red.dark : theme.color.blue.dark};
`;