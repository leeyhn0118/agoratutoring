import styled from 'styled-components';

import { Search as SVG1 } from '@styled-icons/material-rounded';

export const Search = styled.form`
  grid-area: Search;
  display: flex;
  height: 36px;
  border-radius: 6px;
  background: ${({ theme }) => theme.bg.light};

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    height: 40px;
    margin: 2px 0;
  }
`;

export const Text = styled.span`
  display: inline-block;
  width: calc(100% - 40px);
  font-size: 1rem;
  margin: 4px 0;
  line-height: 20px;
  padding: 6px 12px;
  letter-spacing: 0.03125rem;
  color: ${({ theme }) => theme.text.light};

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    display: none;
  }
`;

export const Submit = styled.button`
  padding: 8px;
  border: none;
  cursor: pointer;
  background: #DAE7F3;
  transition: background 0.25s;
  border-radius: 0 6px 6px 0;

  :hover, :focus {
    background: #71A3D1;
  }

  :active {
    background: #2D5E8B;
  }
`;

export const SearchIcon = styled(SVG1)`
  width: 24px;
  height: 24px;
`;
