import styled, { css } from 'styled-components';

export const Button = styled.button`
  overflow: hidden;
  display: inline-block;
  font-size: 0.875rem;
  padding: 10px 16px;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
  line-height: 16px;
  margin: 0;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.078125rem;
  color: ${({ theme }) => theme.text.base};
  transition: border 0.25s, background 0.25s, color 0.25s;

  :disabled {
    pointer-events: none;
    color: ${({ theme }) => theme.text.base};
    background: ${({ theme }) => theme.bg.medium};
    border: 2px solid ${({ theme }) => theme.bg.medium};
  }

  ${({ $area }) => $area && css`
    grid-area: ${$area};
  `}

  ${({ $family, $outline }) => $family === 'yellow' && $outline && css`
    background: ${({ theme }) => theme.bg.base};
    border: 2px solid ${({ theme }) => theme.color.yellow.primary};

    :hover, :focus {
      background: ${({ theme }) => theme.color.yellow.hover.light};
    }

    :active {
      background: ${({ theme }) => theme.color.yellow.active.light};
    }
  `}

  ${({ $family, $outline }) => $family === 'yellow' && !$outline && css`
    background: ${({ theme }) => theme.color.yellow.primary};
    border: 2px solid ${({ theme }) => theme.color.yellow.primary};

    :hover, :focus {
      background: ${({ theme }) => theme.color.yellow.hover.primary};
      border-color: ${({ theme }) => theme.color.yellow.hover.primary};
    }

    :active {
      background: ${({ theme }) => theme.color.yellow.active.primary};
      border-color: ${({ theme }) => theme.color.yellow.active.primary};
    }
  `}

  ${({ $family, $outline }) => $family === 'blue' && $outline && css`
    background: ${({ theme }) => theme.bg.base};
    border: 2px solid ${({ theme }) => theme.color.blue.dark};

    :hover, :focus {
      color: ${({ theme }) => theme.text.white};
      background: ${({ theme }) => theme.color.blue.hover.dark};
    }

    :active {
      background: ${({ theme }) => theme.color.blue.active.dark};
    }
  `}

  ${({ $family, $outline }) => $family === 'blue' && !$outline && css`
    color: ${({ theme }) => theme.text.white};
    background: ${({ theme }) => theme.color.blue.dark};
    border: 2px solid ${({ theme }) => theme.color.blue.dark};

    :hover, :focus {
      background: ${({ theme }) => theme.color.blue.hover.dark};
      border-color: ${({ theme }) => theme.color.blue.hover.dark};
    }

    :active {
      background: ${({ theme }) => theme.color.blue.active.dark};
      border-color: ${({ theme }) => theme.color.blue.active.dark};
    }
  `}
`;
