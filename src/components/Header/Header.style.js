import styled from 'styled-components';

import SVG1 from 'src/assets/svg/logo-light.svg';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.color.blue.dark};
  z-index: 10;
`;

export const Fade = styled.div`
  display: block;
  position: fixed;
  top: 96px;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({ $open }) => $open ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)'};

  @media(min-width: ${({ theme }) => theme.size.md}) {
    top: 60px;
  }

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  margin: 0 auto;
  max-width: 1200px;
  padding: 4px 16px 8px;
  grid-row-gap: 4px;
  grid-column-gap: 8px;
  grid-template-areas:
    "LogoWrapper Links"
    "Search Search";

  @media(min-width: ${({ theme }) => theme.size.md}) {
    padding: 10px 16px 6px;
    grid-gap: 32px;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "LogoWrapper Search Links";
  }
`;

export const LogoWrapper = styled.a`
  grid-area: LogoWrapper;
  width: fit-content;
  display: inline-block;
`;

export const Logo = styled(SVG1)`
  display: block;
  width: 132px;
  height: 44px;
`;
