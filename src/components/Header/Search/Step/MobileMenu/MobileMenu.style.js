import styled from 'styled-components';

export const MobileMenu = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.bg.base};
  padding: 12px 16px;

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    display: none;
  }
`;

export const Next = styled.button`
  border: none;
  background: none;
  padding: 12px;
`;

export const Search = styled.button`
  display: inline-block;
  background: ${({ theme }) => theme.color.yellow.primary};
  border: none;
  padding: 12px;
  border-radius: 4px;
  margin-left: auto;
`;
