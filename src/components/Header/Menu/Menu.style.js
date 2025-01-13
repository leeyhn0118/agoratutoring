import styled from 'styled-components';

export const Menu = styled.div`
  position: fixed;
  top: 96px;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 258px;
  padding: 16px;
  transition: transform 0.25s;
  background: ${({ theme }) => theme.bg.base};
  pointer-events: all;
  transform: TranslateX(${({ $menuOpen }) => $menuOpen ? '0' : '100%' });

  @media(min-width: ${({ theme }) => theme.size.md}) {
    top: 60px;
  }

  @media(min-width:${({ theme }) => theme.size.xl}) {
    display: flex;
    position: absolute;
    top: 68px;
    right: 16px;
    bottom: auto;
    gap: 16px;
    flex-direction: column;
    max-width: none;
    width: fit-content;
    padding: 16px;
    transform: translateX(0);
    transition: opacity 0.25s;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    background: ${({ theme }) => theme.bg.base};
    opacity: ${({ $menuOpen }) => $menuOpen ? '1' : '0'};
    pointer-events: ${({ $menuOpen }) => $menuOpen ? 'all' : 'none'};
  }
`;

export const Link = styled.a`
  display: block;
  width: fit-content;
  margin: 0 0 0 auto;
  font-size: 1rem;
  padding: 12px 0;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.text.base};
  transition: color 0.25s;

  :hover {
    color: ${({ theme }) => theme.text.hover.base};
  }

  :active {
    color: ${({ theme }) => theme.text.active.base};
  }

  @media(min-width:${({ theme }) => theme.size.xl}) {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const Button = styled.button`
  display: block;
  width: fit-content;
  margin: 0 0 0 auto;
  font-size: 1rem;
  padding: 12px 0;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.color.red.dark};
  transition: color 0.25s;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  :hover {
    color: ${({ theme }) => theme.color.red.hover.dark};
  }

  :active {
    color: ${({ theme }) => theme.color.red.active.dark};
  }

  @media(min-width:${({ theme }) => theme.size.xl}) {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 500;
  }
`;
