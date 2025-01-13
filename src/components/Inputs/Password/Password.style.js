import styled from 'styled-components';
import SVG5 from 'src/assets/svg/lock.svg';

export { Wrapper, Label, Error } from '../Inputs.style';

export const Container = styled.div`
  position: relative;
`;

export const Password = styled.input`
  ${({ theme }) => theme.css.p1};

  display: block;
  width: 100%;
  height: 50px;
  padding: 12px 12px 11px 65px;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${({ theme, $error }) => $error ? theme.color.red.dark : theme.bg.hover.medium};
  background-color: ${({ theme }) => theme.bg.light};
  :focus-within {
    outline: 1px solid black;
  }
`;

export const Toggle = styled.button`
  position: absolute;
  right: 12px;
  bottom: 13px;
  line-height: 1;
  font-size: 14px;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  background: none;
  color: ${({ theme }) => theme.color.blue.primary};

  :hover {
    color: ${({ theme }) => theme.color.blue.hover.primary};
  }

  :active {
    color: ${({ theme }) => theme.color.blue.active.primary};
  }
`;

export const lockIcon = styled(SVG5)`
  width: 35px;
  height: 35px;
  padding: 5px;
  position: absolute;
  top: 15%;
  left: 5%;
`;

