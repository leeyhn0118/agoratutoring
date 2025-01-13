import styled from 'styled-components';

import SVG1 from '../../assets/svg/close.svg';

export const Overlay = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);

  @media (min-width: ${({ theme }) => theme.size.md}) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
    cursor: pointer;
  }
`;

export const OverlayInner = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 4.25rem 1rem 1rem;
  background: ${({ theme }) => theme.bg.base};
  cursor: default;
  overflow-y: auto;
  overflow-x: hidden;

  @media (min-width: ${({ theme }) => theme.size.md}) {
    position: static;
    padding: 1rem;
    width: 25rem;
    max-width: 100%;
    max-height: 100%;
    border-radius: 0.5rem;
  }
`;

export const Subheader = styled.header`
  display: flex;
  align-items: center;
  height: 3.25rem;
  position: fixed;
  padding: 0.625rem 1rem;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.color.blue.primary};

  @media (min-width: ${({ theme }) => theme.size.md}) {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    background: none;
    height: auto;
    padding: 0;
    margin-bottom: 1.5rem;
  }
`;

export const Title = styled.h2`
  flex-grow: 1;
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.text.primary};

  @media (min-width: ${({ theme }) => theme.size.md}) {
    color: ${({ theme }) => theme.text.base};
    text-align: center;
  }
`;

export const Close = styled(SVG1)`
  margin-left: 1rem;
  width: 2rem;
  height: 2rem;
  fill: ${({ theme }) => theme.text.primary};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.size.md}) {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${({ theme }) => theme.text.light};
    position: absolute;
    right: 0;
    &:hover {
      fill: ${({ theme }) => theme.text.lightDark};
    }
  }
`;
