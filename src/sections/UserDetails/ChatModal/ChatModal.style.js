import styled from 'styled-components';


import COMP1 from 'src/components/Modal';
import COMP2 from 'src/components/Button';
import COMP3 from 'react-textarea-autosize';

export const ChatModal = styled(COMP1)`

`;

export const Input = styled(COMP3)`
  width: 100%;
  display: block;
  padding: 0.375rem 1rem;
  font-size: 1.125rem;
  line-height: 1.59090909;
  flex-grow: 1;
  border: none;
  background: none;
  resize: none;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.blue.dark};
  margin: 0 0 24px;
`;

export const Button = styled(COMP2)`
  width: 100%;
`;