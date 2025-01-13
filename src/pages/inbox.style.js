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

export const Inbox = styled.div`
  height: 100%;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    max-width: 1200px;
    padding: 16px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 360px 1fr;
    grid-column-gap: 64px;
  }
`;
