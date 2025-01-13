import styled from 'styled-components';

import { Book as SVG1, Place as SVG2 } from '@styled-icons/material-rounded';

export const Suggestions = styled.ul`
  display: block;
  position: relative;
  list-style: none;
  padding: 0;

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    display: ${({ $open }) => $open ? 'block' : 'none'};
    position: absolute;
    overflow-x: visible;
    width: 400px;
    margin: 16px 0 0;
    padding: 10px 8px;
    border-radius: 8px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    background: ${({ theme }) => theme.bg.base};
  }
`;

export const Suggestion = styled.li`
  display: flex;
  width: 100%;
  padding: 8px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  letter-spacing: 0.03125rem;
  border: none;
  background: ${({ $active, theme }) => $active ? theme.bg.medium : 'none'};
  border-radius: 4px;
  transition: background 0.2s;

  :hover, :focus {
    background: ${({ theme }) => theme.bg.medium};
  }
`;

export const Book = styled(SVG1)`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  padding: 10px;
  border-radius: 4px;
  fill: white;
  margin-right: 16px;
  background: ${({ theme }) => theme.color.blue.dark};
`;

export const Pin = styled(SVG2)`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  padding: 10px;
  border-radius: 4px;
  fill: white;
  margin-right: 16px;
  background: ${({ theme }) => theme.color.blue.dark};
`;
