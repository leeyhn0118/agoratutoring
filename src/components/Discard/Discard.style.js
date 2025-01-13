import styled from 'styled-components';

export const Discard = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.shadow.base};
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
`;

export const DiscardInner = styled.div`
  position: static;
  padding: 1rem;
  background: ${({ theme }) => theme.bg.base};
  cursor: default;
  overflow-y: auto;
  overflow-x: hidden;
  width: 25rem;
  max-width: 100%;
  max-height: 100%;
  border-radius: 0.5rem;
`;

export const Title = styled.h2`
  flex-grow: 1;
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.text.base};
  text-align: center;
`;

export const Text = styled.p`
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DiscardButton = styled.button`
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1.5rem;
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.color.red.dark};
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.color.red.darkDark};
  }
`;

export const Or = styled.span``;

export const CancelButton = styled(DiscardButton)`
  background: ${({ theme }) => theme.color.blue.primary};
  &:hover {
    background: ${({ theme }) => theme.color.blue.dark};
  }
`;
