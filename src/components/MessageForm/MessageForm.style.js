import styled from 'styled-components';

import COMP1 from 'react-textarea-autosize';

export const MessageForm = styled.div`
  width: 100%;
  position: relative;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.bg.base};
`;

export const Input = styled(COMP1)`
  width: 100%;
  display: block;
  padding: 0.375rem 1rem;
  font-size: 1.125rem;
  line-height: 1.59090909;
  flex-grow: 1;
  border: none;
  background: none;
  resize: none;
`;

export const Button = styled.button`
  display: block;
  height: 2.25rem;
  cursor: pointer;
  margin: 0.125rem 0.125rem 0.125rem 1rem;
  border-radius: 4px;
  border: none;
  padding: 0 1rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.color.yellow.primary};

  :hover {
    background: ${({ theme }) => theme.color.yellow.dark};
  }

    :disabled {
      cursor: default;
      color: ${({ theme }) => theme.text.light};
      background: ${({ theme }) => theme.bg.light};
      
      :hover {
        background: ${({ theme }) => theme.bg.primary};
      }
    }
`;
