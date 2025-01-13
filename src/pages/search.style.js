import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    overflow-y: scroll;
  }

  #__next {
    height: 100%;
  }
`;

export const SearchPage = styled.div`
  height: 100%;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 6fr 4fr;
  }
`;

export const ScrollableArea = styled.div`
  overflow-y: scroll;
`;