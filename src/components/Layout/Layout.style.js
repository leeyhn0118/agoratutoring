import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  /* Make the google reCaptcha badge invisible */
  .grecaptcha-badge {
    visibility: hidden;
  }

  :root {
    font-weight: 400;
    line-height: 1.4;
    color: ${({ theme }) => theme.text.base};
    font-family: ${({ theme }) => theme.font.primary};
    background-color: ${({ theme }) => theme.bg.default};
  }

  *, :after, :before {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.15;
  }

  textarea, input {
    :focus {
      outline: none;
    }
  }
`;
